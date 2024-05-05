import { expect } from 'chai'
import { Block } from '../src/app/lib'

class TestBlock extends Block {
  constructor({ testText }: { testText: string }) {
    super({ testText })
  }

  getTestElement() {
    return this.getElement
  }

  setTestElement(value: HTMLElement) {
    this.setElement = value
  }

  render() {
    return `<div>{{ testText }}</div>`
  }
}

describe('Block', () => {
  const component = new TestBlock({ testText: 'Test text' })
  const block = component.getContent()?.innerHTML

  it('should render new component', () => {
    expect(block).to.equal('Test text')
  })

  it('should add attributes to the element', () => {
    component.setTestElement(document.createElement('div'))
    component.setProps({ attr: { 'data-test': '123' } })
    component.addAttributes()
    expect(component.getTestElement()?.getAttribute('data-test')).to.equal(
      '123',
    )
  })

  it('should show and hide the element', () => {
    component.setTestElement(document.createElement('div'))
    component.show()
    expect(
      document.querySelector('#root')?.contains(component.getTestElement()!),
    ).to.be.true
    component.hide()
    expect(
      document.querySelector('#root')?.contains(component.getTestElement()!),
    ).to.be.false
  })
})
