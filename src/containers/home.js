import React, {Component} from 'react';
import FlexSvg from './flex-svg'
import css from './svg.css.js'
export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {scale: {height:1000, width:1000}}
  }

  componentDidMount() {
    console.log("I, a component, mounted.")
    // setInterval( ()=> this.zoomIn(), 200)
  }

  zoomIn() {
    const {scale} = this.state
    const newScale = {
      height: zoom,
      width: scale.width - 1
    }
    this.setState({scale: newScale})
  }
  render() {
    const {scale} = this.state
    return (
      <div>
        <h1>Hello</h1>
        <FlexSvg css={css} scale={scale}>
          <g className="group">
            <rect fill="green" className="big-rect"/>
            <circle fill="red" className="the-circle"/>
            <rect fill="blue" className="small-rect"/>
          </g>
        </FlexSvg>
      </div>
    )
  }
}
