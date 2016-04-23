import React, {Component} from 'react';
import flexIt from '../models/flex-it'

const flexStyles = {
  'the-list': {
    padding: 50
  },
  list1: {
    padding: 100
  },
  'big-rect': {
    padding: 10
  },
  'small-rect': {
    padding: 10
  }
}

export default class Home extends Component {
  render() {
    var svg = <svg>
      <g>
        <rect flexClass="big-rect"/>
        <rect flexClass="small-rect"/>
      </g>
    </svg>
    var a =  <div>
      <h1>Home Page</h1>
      <ul flexClass="the-list list1">
        <li>Item 1</li>
        <li>Item 2</li>
      </ul>
    </div>
    const flexed = flexIt(svg, flexStyles)
    console.log({flexed})
    return flexed
  }
}

export default Home;
