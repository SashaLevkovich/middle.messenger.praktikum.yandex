import { expect } from 'chai'
import { JSDOM } from 'jsdom'
import { Block } from '../src/app/lib'
import { Router } from '../src/app/lib/Router'

const router = new Router('root')

class TestComponent extends Block {
  constructor() {
    super({})
  }
  render() {
    return `<div  data-testid="1">Page#1</div>`
  }
}

class TestComponent2 extends Block {
  constructor() {
    super({})
  }

  render() {
    return `<div data-testid="2">Test2</div>`
  }
}

describe('Router', () => {
  beforeEach(() => {
    const { window } = new JSDOM(
      '<!DOCTYPE html><body><div id="root"></div></body>',
      {
        url: 'http://localhost:3000',
      },
    )

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ;(global as any).window = window
    global.document = window.document
  })

  afterEach(() => {
    global.window.close()
  })

  describe('Rendering', () => {
    it('should render the component for the specified route after navigation', () => {
      router
        .use('/test', TestComponent)
        .use('/secondTest', TestComponent2)
        .start()
      router.go('/secondTest')
      expect(document.querySelector('[data-testid="2"]')?.textContent).to.equal(
        'Test2',
      )
    })
  })

  describe('Navigation', () => {
    it('should navigate back to the previous route', () => {
      router.use('/', TestComponent).use('/secondTest', TestComponent2).start()
      router.go('/secondTest')
      router.back()
      expect(window.location.pathname).to.equal('/')
    })
  })
})
