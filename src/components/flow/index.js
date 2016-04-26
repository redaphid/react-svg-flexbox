import React, {Component} from 'react';
import FlowNode from '../flow-node'
import _ from 'lodash'


const Flow = ({flow}) => {
  const {nodes, links, name} = flow
  return(<div>
          <h1>{name}</h1>
          <svg viewBox="500 300 1000 600">
            <g>
              {renderFlowNodes({nodes})}
            </g>
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
