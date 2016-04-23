import React, {Component} from 'react';
import styles from './flow-node.css';
import _ from 'lodash'
import Isvg from 'react-inlinesvg'

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
    const {uuid, name, logo, x, y, input, output} = this.props.node
    const imageSize = this.getImageSize()

    return (
      <svg onClick={this.onClick.bind(this)} width={viewboxSize} height={viewboxSize} x={x} y={y} key={uuid} viewBox={`0 0 ${viewboxSize} ${viewboxSize}`} className={styles.flowNode}>      
        <svg x={portSize} width={imageSize}  height={imageSize} className="flow-node-icon" viewBox="0 0 512 512">
          <Isvg src={logo} wrapper={React.DOM.svg}/>
        </svg>
        <text x={viewboxSize / 2} y={viewboxSize - textSize + 10} fontSize={textSize} alignmentBaseline="middle" textAnchor="middle">{name}</text>
        {this.renderInputPort(input)}
        {this.renderOutputPort(output)}
      </svg>
    )
  }
  getIcon(logo) {
    superagent.get(logo, (error, response) =>{
      if(error) console.log('Oh no! error', error)
      console.log({response})
      this.setState({icon: response.text})
    })
  }
  onClick (event) {
    event.preventDefault()
    console.log(`${this.props.node.name} was clicked`)
  }

  renderInputPort(input) {
    const imageSize = this.getImageSize()
    const portY = imageSize / 2 - (portSize / 2)

    if(input > 0){
      return <rect x="0" y={portY} width={portSize} height={portSize} className="flow-node-port flow-node-input-port"></rect>
    }
  }

  renderOutputPort(output) {
    const imageSize = this.getImageSize()
    const portY = imageSize / 2 - (portSize / 2)
    if(output > 0) {
      return <rect x={viewboxSize - portSize} y={portY} width={portSize} height={portSize} className="flow-node-port flow-node-output-port"></rect>
    }
  }
}
