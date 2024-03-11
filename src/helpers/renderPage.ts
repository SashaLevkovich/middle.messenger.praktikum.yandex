import { renderError } from '../pages/error/error'

function getCurrentRoute(): string {
  return window.location.pathname
}

function handleRouteChange(route: string, routeMap: any): void {
  if (routeMap.hasOwnProperty(route)) {
    const page = routeMap[route]

    if (page) {
      document.body.innerHTML = page
    }
  } else {
    const page = renderError({
      error: '404',
      text: 'not found',
    })
    if (page) document.body.innerHTML = page
  }
}

export function trackRouteChanges(routeMap: any): void {
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
