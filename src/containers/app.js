import { connect } from 'react-redux'
import { getFlowScale } from '../reducers'

import Flow from '../components/flow'

const mapStateToProps = ({flow}) => {
  return {
    flow: {
      flow: flow,
      scale: getFlowScale({flow})
    }
  }
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
