import React, {Component} from 'react'
import { connect } from 'react-redux'
import {Element} from 'react-scroll'
import { getFlowScale } from '../reducers'
import {zoomAround} from '../actions'

import Flow from '../components/flow'

export default class FlowContainer extends Component {
  render() {
    const {flow, onZoom} = this.props
    return <Flow onZoom={onZoom} flow={flow}/>
  }
}

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
    onZoom: ({deltaX, deltaY}) => {
      dispatch(zoomAround({deltaX, deltaY}))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FlowContainer)
