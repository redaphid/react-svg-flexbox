import _ from 'lodash'
import flow from './flow-data.json'
const FlowReducer = {

}
const initialState = {flow}

function todoApp(state = initialState, action) {

  if(!_.isFunction(FlowReducer[action.type])){
    console.log('no action found for', action.type);
    return state;
  }

  FlowReducer[action.type]({state, action})
}


export default todoApp
