import { EventBus } from './EventBus'
import { renderTemplate } from '../../shared/helpers'
import { EVENTS } from '../lib/types'

export class Block {
  static DATA_ID_ATTR = 'data-id'

  _id = Math.floor(100000 + Math.random() * 900000)

  protected children: Record<string, Block>

  private _eventBus: () => EventBus<string, Record<string, unknown[]>>
  private _element: HTMLElement | undefined
  private _lists: Record<string, Block[]>
  private _props: Record<string, unknown>

  constructor(propsWithChildren: Record<string, unknown>) {
    const eventBus = new EventBus()

    const { props, children, lists } =
      this._extractPropsAndChildren(propsWithChildren)

    this._lists = lists
    this._props = this._makePropsProxy({ ...props })
    this.children = children
    this._eventBus = () => eventBus
    this._registerEvents(eventBus)

    eventBus.emit(EVENTS.INIT)
  }

  protected get getElement() {
    return this._element
  }

  protected set setElement(value: HTMLElement) {
    this._element = value
  }

  protected get getProps(): Record<string, unknown> {
    return this._props
  }

  setProps = (nextProps: unknown | unknown[]) => {
    if (!nextProps) {
      return
    }

    Object.assign(this._props, nextProps)
  }

  init() {
    this._eventBus().emit(EVENTS.FLOW_RENDER)
  }

  componentDidMount(_oldProps?: unknown) {}

  dispatchComponentDidMount() {
    this._eventBus().emit(EVENTS.FLOW_CDM)
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

  render() {
    return ''
  }

  getContent(): HTMLElement | undefined {
    return this._element
  }

  show() {
    const el = this.getContent()
    if (el) {
      const parent = el.parentElement
      if (parent) {
        return
      }
      const container = document.querySelector('#root')
      if (container) {
        container.appendChild(el)
      } else {
        console.error('Container not found')
      }
    }
  }

  hide() {
    const el = this.getContent()
    if (el) {
      el.remove()
    }
  }

  protected _addEvents() {
    const events = (this._props as Record<string, unknown>).events

    if (!events) {
      return
    }

    Object.entries(events).forEach(([event, listener]) => {
      this._element!.addEventListener(event, listener)
    })
  }

  protected _makePropsProxy(props: Record<string, unknown>) {
    const self = this

    return new Proxy(props, {
      get(target, prop) {
        const value = target[String(prop)]
        return typeof value === 'function' ? value.bind(target) : value
      },
      set(target, prop, value) {
        const oldTarget = { ...target }
        target[String(prop)] = value
        self._eventBus().emit(EVENTS.FLOW_CDU, oldTarget, target)
        return true
      },
      deleteProperty() {
        throw new Error('No access')
      },
    })
  }

  protected _extractPropsAndChildren(
    propsAndChildren: Record<string, unknown>,
  ) {
    const lists: Record<string, Block[]> = {}
    const props: Record<string, unknown> = {}
    const children: Record<string, Block> = {}

    Object.entries(propsAndChildren).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key] = value
      } else if (
        Array.isArray(value) &&
        value.every((item) => item instanceof Block)
      ) {
        lists[key] = value
      } else {
        props[key] = value
      }
    })

    return { lists, props, children }
  }

  private _componentDidUpdate(_oldProps?: unknown, _newProps?: unknown) {
    const response = this.componentDidUpdate(_oldProps, _newProps)

    if (!response) {
      return
    }

    this._render()
  }

  private _render() {
    const propsAndStubs = { ...this._props }
    const styles: Record<string, string> | unknown = (
      this._props as Record<string, unknown>
    ).styles
    const _tmpId = Math.floor(100000 + Math.random() * 900000)

    this._removeEvents()

    Object.entries(this.children).forEach(([key, child]) => {
      propsAndStubs[key] = `<div ${Block.DATA_ID_ATTR}="${child._id}"></div>`
    })

    Object.entries(this._lists).forEach(([key]) => {
      propsAndStubs[key] = `<div data-id="__l_${_tmpId}"></div>`
    })

    const fragment = this._createDocumentElement(
      'template',
    ) as HTMLTemplateElement

    const template = this.render()
    fragment.innerHTML = renderTemplate({
      template,
      context: propsAndStubs,
      styles: styles || {},
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

    Object.entries(this._lists).forEach(([_, child]) => {
      const listElement = this._createDocumentElement(
        'template',
      ) as HTMLTemplateElement
      child.forEach((item) => {
        const listContent = item.getContent()
        if (listContent) listElement?.content.append(listContent)
      })

      const stub = fragment.content.querySelector(`[data-id="__l_${_tmpId}"]`)

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
    this.addAttributes()
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

  private _registerEvents(eventBus: EventBus) {
    eventBus.on(EVENTS.INIT, this.init.bind(this))
    eventBus.on(EVENTS.FLOW_CDM, this._componentDidMount.bind(this))
    eventBus.on(EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this))
    eventBus.on(EVENTS.FLOW_RENDER, this._render.bind(this))
  }

  private _removeEvents() {
    const events = (this._props as Record<string, unknown>).events

    if (!events || !this._element) {
      return
    }

    Object.entries(events).forEach(([event, listener]) => {
      this._element!.removeEventListener(event, listener)
    })
  }
}
