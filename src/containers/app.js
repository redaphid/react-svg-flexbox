import React, {Component} from 'react'
import { connect } from 'react-redux'
import {Element} from 'react-scroll'
import { getFlowScale } from '../reducers'
import {zoomAround} from '../actions'

import Flow from '../components/flow'

const mapStateToProps = ({flow}) => {
  console.log('mapStateToProps', flow.scale.min.x)
  return {flow}
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
)(Flow)
