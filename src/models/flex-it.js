import computeLayout from 'css-layout'
import {cloneElement, Children} from 'react'
import _ from 'lodash'

const flexboxToSvgProperty = {
  defaults: {
    left: 'x',
    top: 'y'
  },
  circle: {
    width: 'r',
    left: 'cx',
    top: 'cy'
  }
}

export default function flexIt (node, styles, {width, height}={}) {
  var styleTree = getStyleTree(node)
  styleTree.layout = { 
    width: width || 100,
    height: height || 100
  }
  computeLayout(styleTree)
  delete styleTree.layout
  return applyStyleTree(styleTree)

  function applyStyleTree({dom, children, layout}) {
    if(_.isString(dom)) return dom
    return cloneElement(
      dom,
      getSvgLayout(dom.type, _.extend({}, layout, dom.props)),
      _.map(children, applyStyleTree)
    )
  }

  function getStyleTree(node) {
    if(_.isString(node)) return {dom: node}

    return {
      dom: node,
      style: getStyle(node),
      children: Children.map(node.props.children, getStyleTree)
    }
  }

  function getStyle(node) {
    return _(node.props.className)
      .split(' ')
      .map(function(flexClass){ return styles[flexClass] })
      .reduce(_.extend, {})
  }

  function getSvgLayout(nodeType, layout) {
      return _.mapKeys(layout, function(value, key){
        return getSvgProperty(nodeType, key)
      })
  }

  function getSvgProperty(nodeType, key) {
    const svgPropertiesForType = _.extend({}, flexboxToSvgProperty.defaults, flexboxToSvgProperty[nodeType])
    return svgPropertiesForType[key] || key
  }
}
