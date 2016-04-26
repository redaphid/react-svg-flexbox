import _ from 'lodash'
import flow from './flow-data.json'

const initialState = {flow}

const renderFlow = function({state, action}){
    console.log('trying to render a flow with:', {state, action})
    return state
}

export const zoomAround = function() {
  console.log('zoomAround', arguments)
}

export const getFlowScale = function({flow}){
  const {nodes} = flow;
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

const FlowReducer = {renderFlow, zoomAround}



export default (state = initialState, action) => {

  if(!_.isFunction(FlowReducer[action.type])){
    console.log('no action found for', action.type);
    return state;
  }

  return FlowReducer[action.type]({state, action})
}
