import computeLayout from 'css-layout'
import _ from 'lodash'

var styles = {style: {padding: 50}, children: [
  {style: {padding: 10, alignSelf: 'stretch'}}
]};

computeLayout(styles);
console.log(styles)

export default function flexIt (node) {
  return getStyleTree(node);
}

function getStyleTree(node) {
  if( !_.isObject(node) ) return

  var styleNode = {
    dom: node,
    style: getStyle(node),
    children: _.compact( _.map( node.props.children, getStyleTree ) )
  }
  return styleNode
}

function getStyle(node) {
  return {}
}
