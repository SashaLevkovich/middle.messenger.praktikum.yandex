import { Block } from './Block'
import { Props, State } from './types'
import { isEqualObject, PlainObject } from '../../shared/helpers'
import { store } from '../store/store'

export function connect<T>(
  Component: typeof Block,
  mapStateToProps: (state: State) => T,
) {
  return class extends Component {
    constructor(props: Props) {
      let state = mapStateToProps(store.getState())
      super({ ...props, ...mapStateToProps(store.getState()) })

      store.subscribe(() => {
        const newState = mapStateToProps(store.getState())

        if (!isEqualObject(state as PlainObject, newState as PlainObject)) {
          this.setProps({ ...newState })
        }

        state = newState
      })
    }
  }
}
