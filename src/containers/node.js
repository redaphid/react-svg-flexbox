import React, {Component} from 'react';
import FlexSvg from './flex-svg'
import css from './svg.css.js'
export default class Node extends Component {
  render() {
    return (
      <div>
        <h1>Nodez</h1>
        <svg viewBox="0 0 100 100">
          <svg viewBox="0 0 100 100" height="50" width="50">
            <circle r="25" cy="50" cx="50" fill="red" className="the-circle"/>
            <text x="50" y="80" alignmentBaseline="end" textAnchor="middle" fontSize="5" className="text">middle</text>
          </svg>
          <svg viewBox="0 0 100 100" height="50" width="50" x="25">
            <circle r="25" cy="50" cx="50" fill="blue" className="the-circle"/>
            <text x="50" y="80" alignmentBaseline="end" textAnchor="middle" fontSize="5" className="text">another one</text>

            <svg viewBox="0 0 100 100" height="50" width="50" x="0">
              <circle r="25" cy="50" cx="50" fill="green" className="the-circle"/>
              <text x="50" y="80" alignmentBaseline="end" textAnchor="middle" fontSize="5" className="text">ear 1</text>
            </svg>

            <svg viewBox="0 0 100 100" height="50" width="50" x="50">
              <circle r="25" cy="50" cx="50" fill="yellow" className="the-circle"/>
              <text x="50" y="80" alignmentBaseline="end" textAnchor="middle" fontSize="5" className="text">ear 2</text>
            </svg>
          </svg>
        </svg>
      </div>
    )
  }
}
