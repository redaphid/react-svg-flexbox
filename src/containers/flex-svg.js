import React, {Component} from 'react';
import flexIt from '../models/flex-it'

export default class FlexSvg extends Component {

  render() {
    var root = <svg viewBox="0 0 100 100">{this.props.children}</svg>
    return flexIt(root, this.props.style)
  }
}
