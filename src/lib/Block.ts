import { EventBus } from '@/lib/EventBus.ts'
import { EventMap, Props } from '@/lib/types.ts'
import { renderTemplate } from '@/helpers/renderTemplate.ts'

export default class Block {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  }

  static DATA_ID_ATTR = 'data-id'

  _id = Math.floor(100000 + Math.random() * 900000)

  protected children: Record<string, Block>
  private eventBus: () => EventBus<string, Record<string, any[]>>
  private lists: Record<string, Block[]>

  constructor(propsWithChildren: Props) {
    const eventBus = new EventBus()

    const { props, children, lists } =
      this._extractPropsAndChildren(propsWithChildren)

    this.lists = lists
    this._props = this._makePropsProxy({ ...props })
    this.children = children
    this.eventBus = () => eventBus
    this._registerEvents(eventBus)

    eventBus.emit(Block.EVENTS.INIT)
  }

  private _element: HTMLElement | undefined

  get element() {
    return this._element
  }

  private _props: Props

  get props() {
    return this._props
  }

  set props(value) {
    this._props = value
  }

  init() {
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER)
  }

  componentDidMount(_oldProps?: unknown) {}

  dispatchComponentDidMount() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM)
  }

  componentDidUpdate(_oldProps?: unknown, _newProps?: unknown): boolean {
    return true
  }

  addAttributes() {
    const attr = this._props.attr
    if (attr) {
      Object.entries(attr).forEach(([key, value]) => {
        this._element!.setAttribute(key, value)
      })
    }
  }

  setProps = (nextProps: unknown | unknown[]) => {
    if (!nextProps) {
      return
    }
    Object.assign(this._props, nextProps)
  }

  render() {
    return ''
  }

  getContent(): HTMLElement | undefined {
    return this._element
  }

  show() {
    this.showHideContent('block', 'Failed to show content: No content element.')
  }

  hide() {
    this.showHideContent('none', 'Failed to hide content: No content element.')
  }

  private _componentDidUpdate(_oldProps?: unknown, _newProps?: unknown) {
    console.log('_componentDidUpdate')

    const response = this.componentDidUpdate(_oldProps, _newProps)
    if (!response) {
      return
    }
    this._render()
  }

  private _extractPropsAndChildren(propsAndChildren: Props) {
    const children: Record<string, Block> = {}
    const props: Record<string, unknown> = {}
    const lists: Record<string, Block[]> = {}

    Object.entries(propsAndChildren).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key] = value
      } else if (Array.isArray(value)) {
        lists[key] = value
      } else {
        props[key] = value
      }
    })
    return { children, props, lists }
  }

  private _render() {
    const propsAndStubs = { ...this._props }
    const styles: Record<string, string> | undefined = this._props!.styles
    const _tmpId = Math.floor(100000 + Math.random() * 900000)

    Object.entries(this.children).forEach(([key, child]) => {
      propsAndStubs[key] = `<div ${Block.DATA_ID_ATTR}="${child._id}"></div>`
    })

    Object.entries(this.lists).forEach(([key]) => {
      propsAndStubs[key] = `<div data-id="__l_${_tmpId}"></div>`
    })

    const fragment = this._createDocumentElement(
      'template',
    ) as HTMLTemplateElement

    const template = this.render()
    fragment.innerHTML = renderTemplate({
      template,
      context: propsAndStubs,
      styles,
    })

    Object.values(this.children).forEach((child) => {
      const stub = fragment.content.querySelector(
        `[${Block.DATA_ID_ATTR}="${child._id}"]`,
      )
      if (stub) {
        const childContent = child.getContent()
        if (childContent) {
          stub.replaceWith(childContent)
        } else {
          console.warn('Content not found for child:', child)
        }
      } else {
        console.warn('Stub not found for child:', child)
      }
    })

    Object.entries(this.lists).forEach(([_, child]) => {
      const listElement = this._createDocumentElement(
        'template',
      ) as HTMLTemplateElement
      child.forEach((item) => {
        const listContent = item.getContent()
        if (listContent) listElement?.content.append(listContent)
      })

      const stub = fragment.content.querySelector(`[data-id="__l_${_tmpId}"]`)

      console.log(stub)

      if (stub && listElement.content) {
        stub.replaceWith(listElement.content)
      } else {
        console.warn('Content not found for child:', listElement)
      }
    })

    const newElement = fragment.content.firstElementChild as HTMLElement

    if (this._element && newElement) {
      this._element.replaceWith(newElement)
    }

    this._element = newElement
    this._addEvents()
  }

  private _makePropsProxy(props: Props) {
    const self = this

    return new Proxy(props, {
      get(target, prop) {
        const value = target[String(prop)]
        return typeof value === 'function' ? value.bind(target) : value
      },
      set(target, prop, value) {
        const oldTarget = { ...target }
        target[String(prop)] = value
        self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, target)
        return true
      },
      deleteProperty() {
        throw new Error('No access')
      },
    })
  }

  private _createDocumentElement(tagName: string): HTMLElement {
    return document.createElement(tagName)
  }

  private _componentDidMount() {
    this.componentDidMount()

    Object.values(this.children).forEach((child) => {
      child.dispatchComponentDidMount()
    })
  }

  private _addEvents() {
    const events: EventMap | undefined = this._props!.events

    if (typeof events === 'object' && events !== null) {
      Object.keys(events).forEach((eventName) => {
        const listener = events[eventName]

        if (typeof listener === 'function') {
          this._element!.addEventListener(eventName, listener)
        }
      })
    }
  }

  private _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this))
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this))
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this))
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this))
  }

  private showHideContent(
    displayStyle: 'none' | 'block',
    failureMessage: string,
  ) {
    const content = this.getContent()
    if (content) {
      content.style.display = displayStyle
    } else {
      console.warn(failureMessage)
    }
  }
}
