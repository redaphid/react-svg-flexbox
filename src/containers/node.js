import React, {Component} from 'react';
import FlexSvg from './flex-svg'
import css from './svg.css.js'
export default class Node extends Component {
  render() {
    return (
      <div>
        <h1>Nodez</h1>
        <FlexSvg css={css}>
            <circle fill="red" className="the-circle"/>
            <g className="center-text">
              <text textAnchor="middle" fontSize="5" className="text">middle</text>
            </g>
            <rect fill="blue" className="big-rect"/>
        </FlexSvg>
      </div>
    )
  }
}
