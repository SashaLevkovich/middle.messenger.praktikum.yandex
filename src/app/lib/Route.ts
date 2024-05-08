import { Block } from './Block'

function isEqual(lhs: string, rhs: string) {
  return lhs === rhs
}

function render(page: Block, query?: string) {
  const container = document.getElementById(query || 'root')!

  container?.append(page.getContent() as HTMLElement)
}

export class Route {
  private _pathname: string
  private _blockClass: typeof Block
  private _block: Block | null
  private _props: Record<string, unknown>

  constructor(
    pathname: string,
    view: typeof Block,
    props: Record<string, unknown>,
  ) {
    this._pathname = pathname
    this._blockClass = view
    this._block = null
    this._props = props
  }

  navigate(pathname: string): void {
    if (this.match(pathname)) {
      this._pathname = pathname
      this.render()
    }
  }

  leave() {
    if (this._block) {
      this._block.hide()
    }
  }

  match(pathname: string) {
    return isEqual(pathname, this._pathname)
  }

  render() {
    if (!this._block) {
      this._block = new this._blockClass(this._props)

      render(this._block, this._props.rootQuery as string)
      return
    }

    this._block.show()
  }
}
