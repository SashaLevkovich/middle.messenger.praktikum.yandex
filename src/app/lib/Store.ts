import { EventBus } from './EventBus'
import { State, Action, Reducer, StoreEvents } from './types'

export class Store extends EventBus {
  private static instance: Store
  private subscribers: ((state: State) => void)[] = []
  private state: State | object = {}

  private constructor(
    private reducer: Reducer,
    initialState: State,
  ) {
    super()
    this.state = initialState

    this.on(StoreEvents.Updated, (...args: unknown[]) => {
      const [state] = args as [State]
      this.subscribers.forEach((fn) => fn(state))
    })
  }

  public static getInstance(reducer: Reducer, initialState: State): Store {
    if (!Store.instance) {
      Store.instance = new Store(reducer, initialState)
    }
    return Store.instance
  }

  public getState(): State {
    return this.state as State
  }

  public subscribe(fn: (state: State) => void): void {
    this.subscribers.push(fn)
    fn(this.state as State)
  }

  public dispatch(action: Action): void {
    this.state = this.reducer(this.state as State, action)
    this.subscribers.forEach((fn) => fn(this.state as State))
    this.emit(StoreEvents.Updated, this.state)
  }
}
