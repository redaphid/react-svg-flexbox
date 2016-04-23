import React, {Component} from 'react';
import FlexSvg from './flex-svg'
export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <FlexSvg>
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
