import React, {Component} from 'react';
import FlowNode from '../flow-node'
import _ from 'lodash'

const Flow = ({flow, onZoom}) => {
  const {nodes, links, name} = flow.flow;
  const {min, max} = flow.scale;
  return(
    <div>
      <h1>{name}</h1>
      <svg onWheel={onZoom} viewBox={`${min.x} ${min.y} ${max.x} ${max.y}`}>
          {renderFlowNodes({nodes})}
      </svg>
    </div>
  )
}

const renderFlowNodes = ({nodes}) => {
  return _.map(nodes, function(node){
    return <FlowNode node={node}/>
  });
}

export default Flow
