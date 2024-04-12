import { Block } from './Block'
import { Route } from './Route'

export class Router {
  private static __instance: Router | null = null
  private _routes: Route[] = []
  private _history: History | null = null
  private _currentRoute: Route | null = null
  private _rootQuery: string = ''

  constructor(rootQuery: string) {
    if (Router.__instance) {
      return Router.__instance
    }

    this._routes = []
    this._history = window.history
    this._currentRoute = null
    this._rootQuery = rootQuery

    Router.__instance = this
  }

  public use(pathname: string, block: typeof Block): this {
    const route = new Route(pathname, block, { rootQuery: this._rootQuery })

    this._routes.push(route)

    return this
  }

  public start(): void {
    window.onpopstate = () => {
      this._onRoute(window.location.pathname)
    }

    this._onRoute(window.location.pathname)
  }

  private _onRoute(pathname: string): void {
    const route = this.getRoute(pathname)
    if (!route) {
      return
    }

    if (this._currentRoute && this._currentRoute !== route) {
      this._currentRoute.leave()
    }

    this._currentRoute = route
    route.render()
  }

  public go(pathname: string): void {
    this._history?.pushState({}, '', pathname)
    this._onRoute(pathname)
  }

  public back(): void {
    this._history?.back()
  }

  public forward(): void {
    this._history?.forward()
  }

  private getRoute(pathname: string): Route | undefined {
    return this._routes.find((route) => route.match(pathname))
  }
}
