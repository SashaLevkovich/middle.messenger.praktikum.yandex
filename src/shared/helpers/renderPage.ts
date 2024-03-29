import { ROUTE } from './routes'
import { ErrorPage } from '@/pages'

function getCurrentRoute(): string {
  return window.location.pathname
}

function handleRouteChange(route: string, routeMap: ROUTE): void {
  if (Object.prototype.hasOwnProperty.call(routeMap, route)) {
    const page = routeMap[route]

    const container = document.getElementById('root')!

    container.append(page().getContent()!)
  } else {
    const page = new ErrorPage({
      title: '404',
      text: 'not found',
    })

    const container = document.getElementById('root')!
    console.log(page.getContent())

    container.append(page.getContent()!)
  }
}

export function trackRouteChanges(routeMap: ROUTE): void {
  let currentRoute = getCurrentRoute()

  function routeChangeListener(): void {
    const newRoute = getCurrentRoute()

    if (newRoute !== currentRoute) {
      currentRoute = newRoute
      handleRouteChange(currentRoute, routeMap)
    }
  }

  window.addEventListener('popstate', routeChangeListener)

  handleRouteChange(currentRoute, routeMap)
}
