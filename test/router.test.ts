import { expect } from 'chai'
import { JSDOM } from 'jsdom'
import { Block, Props } from '../src/app/lib'
import { router } from '../src/shared/helpers/routes'

class TestComponent extends Block {
  constructor({ ...props }: Props) {
    super({
      ...props,
    })
  }

  render() {
    return `<div data-testid="1">Test1</div>`
  }
}

class TestComponent2 extends Block {
  constructor({ ...props }: Props) {
    super({
      ...props,
    })
  }

  render() {
    return `<div data-testid="2">Test2</div>`
  }
}

describe('Router', () => {
  beforeEach(() => {
    const { window } = new JSDOM(
      '<!DOCTYPE html><body><main id="app"></main></body>',
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
    it('should render the component for the specified route', () => {
      router.use('/', TestComponent).start()
      expect(document.querySelector('[data-testid="1"]')?.textContent).to.equal(
        'Test1',
      )
    })

    it('should render the component for the specified route after navigation', () => {
      router.use('/', TestComponent).use('/secondTest', TestComponent2).start()
      router.go('/secondTest')
      expect(document.querySelector('[data-testid="2"]')?.textContent).to.equal(
        'Test2',
      )
    })
  })

  describe('Navigation', () => {
    it('should navigate to the specified route', () => {
      router.use('/', TestComponent).use('/secondTest', TestComponent2).start()
      router.go('/secondTest')
      expect(window.location.pathname).to.equal('/secondTest')
    })

    it('should navigate back to the previous route', () => {
      router.use('/', TestComponent).use('/secondTest', TestComponent2).start()
      router.go('/secondTest')
      router.back()
      expect(window.location.pathname).to.equal('/')
    })
  })
})
