import { connect } from 'react-redux'
import { toggleTodo } from '../actions'

import Flow from '../components/flow'

const mapStateToProps = ({flow}) => {
  return {flow}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

const FlowContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Flow)

export default FlowContainer
