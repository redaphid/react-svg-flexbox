import React, {Component} from 'react';
import FlowNode from '../components/flow-node/flow-node'
import flowData from './flow-data.json'
import _ from 'lodash'

export default class Flow extends Component {
  componentDidMount() {
  }
  renderFlowNodes() {
    return _.map(flowData.nodes, function(node){
      return <FlowNode node={node}/>
    })
  }
  render() {
    console.log(this.renderFlowNodes())
    return (
      <div>
        <h1>{flowData.name}</h1>
        <svg viewBox="500 300 1000 600">
          <g>
            {this.renderFlowNodes()}
          </g>
        </svg>
      </div>
    )
  }

}
