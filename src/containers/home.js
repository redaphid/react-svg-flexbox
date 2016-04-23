import React, {Component} from 'react';
import FlexSvg from './flex-svg'
import css from './svg.css.js'
export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {scale: {height:1000, width:1000}}
  }

  render() {
    const {scale} = this.state
    return (
      <div>
        <h1>Hello</h1>
        <FlexSvg css={css} scale={scale}>
            <g className="row-group">
              <rect fill="green" className="big-rect"/>
              <circle fill="red" className="the-circle"/>
              <rect fill="blue" className="small-rect"/>
            </g>
            <g className="group2">
              <rect className="background-rect" fill="lightgray" stroke="gray"/>
              <text textAnchor="middle" fontSize="100" className="text">middle</text>
            </g>
        </FlexSvg>
      </div>
    )
  }
}
