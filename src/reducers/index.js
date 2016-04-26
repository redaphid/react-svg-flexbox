import _ from 'lodash'
import flowData from './flow-data.json'

const initialState = {}

const renderFlow = function({state, action}){
    console.log('trying to render a flow with:', {state, action})
    return state
}

const loadFlow = function({state, action}){
  const flow = {
    data: flowData,
    scale: getFlowScale(flowData)
  }
  console.log(flow)
  return _.defaults({flow}, state)
}

export const zoomAround = function({state, action}) {
  const {flow={}} = state
  const {scale, data} = flow

  if(!scale || !data) return state

  console.log(flow.scale, action)
  var newScale = _.cloneDeep(scale)
  newScale.min.y += (action.deltaY * 10)
  newScale.max.y += (action.deltaY * 10)
  console.log('zoomAround', newScale.min.x)
  return _.defaults({flow: {scale: newScale, data}}, state)
}

export const getFlowScale = function(flowData){
  console.log('getting flow scale')
  const {nodes} = flowData;
  const {x,y} = _.first(nodes)
  var min = {x, y}, max = {x, y}

  _.each(nodes, function({x, y}){
    if (x < min.x) min.x = x
    if (y < min.y) min.y = y

    if (x > max.x) max.x = x
    if (y > max.y) max.y = y
  })

  return {min, max}
}

const FlowReducer = {renderFlow, zoomAround, loadFlow}



export default (state = initialState, action) => {
  console.log('action', action.type)
  if(!_.isFunction(FlowReducer[action.type])){
    console.log('no action found for', action.type);
    return state;
  }

  return FlowReducer[action.type]({state, action})
}
