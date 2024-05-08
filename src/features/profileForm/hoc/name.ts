import { connect } from '../../../app/lib/Hoc'
import { State } from '../../../app/lib/types'
import { Input } from '../../../shared/components'

function mapToProps(state: State) {
  return {
    value: state.userConfig.first_name,
  }
}

export default connect(Input, mapToProps)
