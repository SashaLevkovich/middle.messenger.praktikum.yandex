import { expect } from 'chai'
import { afterEach, beforeEach, describe, it } from 'mocha'
import sinon, {
  SinonFakeXMLHttpRequest,
  SinonFakeXMLHttpRequestStatic,
} from 'sinon'
import { Fetch } from '../src/app/lib/fetch'

describe('Fetch test', () => {
  let xhr: SinonFakeXMLHttpRequestStatic
  let instance: Fetch
  const requests: SinonFakeXMLHttpRequest[] = []

  beforeEach(() => {
    xhr = sinon.useFakeXMLHttpRequest()

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    global.XMLHttpRequest = xhr

    xhr.onCreate = (req) => {
      requests.push(req)
    }

    instance = new Fetch()
  })

  afterEach(() => {
    requests.length = 0
    xhr.restore()
  })

  describe('Fetch methods', () => {
    it('should make a GET request', () => {
      instance.get('/')

      const [request] = requests

      expect(request.method).to.equal('GET')
    })

    it('should make a POST request', () => {
      instance.post('/', { data: { name: 'John', age: 30 } })

      const [request] = requests

      expect(request.method).to.equal('POST')
    })

    it('should make a PUT request', () => {
      instance.put('/', { data: { id: 1, name: 'Jane' } })

      const [request] = requests

      expect(request.method).to.equal('PUT')
    })

    it('should make a DELETE request', () => {
      instance.delete('/')

      const [request] = requests

      expect(request.method).to.equal('DELETE')
    })

    it('should handle missing method', () => {
      expect(() => instance.get('')).to.not.throw()
    })
  })
})
