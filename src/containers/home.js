import React, {Component} from 'react';
import flexIt from '../models/flex-it'
export default class Home extends Component {
  render() {
    var a =  <div>
      <h1>Home Page</h1>
      <ul flexClass="the-list list1">
        <li>Item 1</li>
        <li>Item 2</li>
      </ul>
    </div>
    const flexed = flexIt(a)
    console.log({flexed})
    return flexed
  }
}

export default Home;
