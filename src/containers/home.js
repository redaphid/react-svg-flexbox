import React, {Component} from 'react';
import FlexSvg from './flex-svg'
import css from './svg.css.js'
export default class Home extends Component {
  render() {
    console.log({css})
    return (
      <div>
        <h1>Hello</h1>
        <FlexSvg style={css}>
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
