import { connect } from '../../../app/lib/Hoc'
import { State } from '../../../app/lib/types'
import { FileInput } from '../../../shared/components'

function mapToProps(state: State) {
  return {
    avatarSrc: state.userConfig.avatar,
  }
}

export default connect(FileInput, mapToProps)
