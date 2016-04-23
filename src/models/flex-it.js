import computeLayout from 'css-layout'
import {cloneElement, Children} from 'react'
import _ from 'lodash'

const flexboxToSvgProperty = {
  left: 'x',
  top: 'y'
}

export default function flexIt (node, styles) {
  var styleTree = getStyleTree(node)

  computeLayout(styleTree)
  return applyStyleTree(styleTree)

  function applyStyleTree({dom, children, layout}) {
    if(_.isString(dom)) return dom
    console.log({layout, type: dom.type})
    return cloneElement(
      dom,
      getSvgLayout(layout),
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
    return _(node.props.flexClass)
      .split(' ')
      .map(function(flexClass){ return styles[flexClass] })
      .reduce(_.extend, {})
  }

  function getSvgLayout(layout) {
      return _.mapKeys(layout, function(value, key){
        const svgProperty = flexboxToSvgProperty[key]
        if(svgProperty) return svgProperty
        return key
      })
  }
}
