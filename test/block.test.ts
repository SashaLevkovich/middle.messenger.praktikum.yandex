import { expect } from 'chai'
import { Block } from '../src/app/lib'

class TestBlock extends Block {
  constructor({ testText }: { testText: string }) {
    super({ testText })
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
})
