import React, {Component} from 'react';
import flexIt from '../models/flex-it'

const flexStyles = {
  'the-circle': {
    padding: 10
  },
  'big-rect': {
    padding: 10,
    margin: 10
  },
  'small-rect': {
    padding: 10
  },
  group: {
    flexDirection: 'row',
    height: 100,
    width: 10,
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
}

export default class FlexSvg extends Component {

  render() {
    var root = <svg viewBox="0 0 100 100">{this.props.children}</svg>
    return flexIt(root, flexStyles)
  }
}
