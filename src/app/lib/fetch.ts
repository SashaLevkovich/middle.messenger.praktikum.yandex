export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export interface RequestOptions {
  headers?: Record<string, string>
  method?: HttpMethod
  data?: Record<string, unknown> | FormData | File
  timeout?: number
  [key: string]: unknown | unknown[]
}

function queryStringify(data: Record<string, unknown>): string {
  if (typeof data !== 'object') {
    throw new Error('Data must be object')
  }

  const keys = Object.keys(data)
  return keys.reduce((result, key, index) => {
    const value = data[key]
    if (
      typeof value === 'string' ||
      typeof value === 'number' ||
      typeof value === 'boolean'
    ) {
      return `${result}${key}=${encodeURIComponent(value.toString())}${index < keys.length - 1 ? '&' : ''}`
    }
    return result
  }, '?')
}

export class Fetch {
  private request(
    url: string,
    options: RequestOptions = {},
    timeout = 5000,
  ): Promise<XMLHttpRequest> {
    const { headers = {}, method, data } = options

    return new Promise(function (resolve, reject) {
      if (!method) {
        reject(new Error('No method'))
        return
      }

      const xhr = new XMLHttpRequest()
      const isGet = method === HttpMethod.GET

      xhr.open(
        method,
        isGet && !!data
          ? `${url}${queryStringify(data as Record<string, unknown>)}`
          : url,
      )

      Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key])
      })

      xhr.onload = function () {
        resolve(xhr)
      }

      xhr.onabort = reject
      xhr.onerror = reject
      xhr.withCredentials = true
      xhr.timeout = timeout
      xhr.ontimeout = reject

      if (isGet || !data) {
        xhr.send()
      } else if (data instanceof FormData) {
        xhr.send(data)
      } else {
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.send(JSON.stringify(data))
      }
    })
  }

  public get(
    url: string,
    options: RequestOptions = {},
  ): Promise<XMLHttpRequest> {
    return this.request(
      url,
      { ...options, method: HttpMethod.GET },
      options.timeout,
    )
  }

  public post(
    url: string,
    options: RequestOptions = {},
  ): Promise<XMLHttpRequest> {
    return this.request(
      url,
      { ...options, method: HttpMethod.POST },
      options.timeout,
    )
  }

  public put(
    url: string,
    options: RequestOptions = {},
  ): Promise<XMLHttpRequest> {
    return this.request(
      url,
      { ...options, method: HttpMethod.PUT },
      options.timeout,
    )
  }

  public delete(
    url: string,
    options: RequestOptions = {},
  ): Promise<XMLHttpRequest> {
    return this.request(
      url,
      { ...options, method: HttpMethod.DELETE },
      options.timeout,
    )
  }
}
