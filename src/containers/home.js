import React, {Component} from 'react';
import FlexSvg from './flex-svg'
export default class Home extends Component {
  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'column', height: '100%', width: '100%'}}>
        <h1>Hello</h1>
        <FlexSvg>
          <g className="group">
            <rect className="big-rect"/>
            <rect className="small-rect"/>
          </g>
        </FlexSvg>
      </div>
    )
  }
}
