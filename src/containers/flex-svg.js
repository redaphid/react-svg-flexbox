import React, {Component} from 'react';
import flexIt from '../models/flex-it'

const flexStyles = {
  'big-rect': {
    padding: 10,
    flex:1,
    margin: 10
  },
  'small-rect': {
    padding: 10,
    flex:2
  },
  group: {
    flexDirection: 'row',
    flex: 1
  }
}

export default class FlexSvg extends Component {
  render() {
    var root = <svg style={{flex:1, width: '100%', height: '100%'}}>{this.props.children}</svg>
    return flexIt(root, flexStyles)
  }
}
