import React, {Component} from 'react';
import flexIt from '../models/flex-it'

export default class FlexSvg extends Component {
  getDefaultProps() {
    return {
      scale: {
        width: 100,
        height: 100
      },
      css: {}
    }
  }
  render() {
    const {css, scale} = this.props
    const {width, height} = scale

    var root = <svg viewBox={`0 0 ${width} ${height}`}>{this.props.children}</svg>
    return flexIt(root, {css, scale})
  }
}
