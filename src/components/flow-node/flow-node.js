import React, {Component} from 'react';
import styles from './flow-node.css';
import _ from 'lodash'

const viewboxSize = 100
const portSize = 10
const textSize = 20


export default class FlowNode extends Component {
  getImageSize() {
    const width = viewboxSize - (portSize * 2)
    const height = viewboxSize - textSize
    return _.min([width, height])
  }

  render() {
    const {uuid, name, logo, x, y} = this.props.node
    console.log(this.props.node)
    const imageSize = this.getImageSize()
    console.log({imageSize})
    const portY = imageSize / 2 - (portSize / 2)

    return (
      <svg width={viewboxSize} height={viewboxSize} x={x} y={y} key={uuid} viewBox={`0 0 ${viewboxSize} ${viewboxSize}`} className={styles.flowNode}>
        <rect x="0" y={portY} width={portSize} height={portSize} className="flow-node-port flow-node-input-port"></rect>
        <image x="10" width={imageSize} height={imageSize} className="flow-node-icon" xlinkHref={logo}/>
        <rect x={viewboxSize - portSize} y={portY} width={portSize} height={portSize} className="flow-node-port flow-node-output-port"></rect>
        <text x={viewboxSize / 2} y={viewboxSize - textSize + 10} fontSize={textSize} alignmentBaseline="middle" textAnchor="middle">{name}</text>
      </svg>
    )
  }
}
