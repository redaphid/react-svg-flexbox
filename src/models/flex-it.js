import computeLayout from 'css-layout'
import {cloneElement, Children} from 'react'
import _ from 'lodash'

export default function flexIt (node, styles) {
  var styleTree = getStyleTree(node)

  computeLayout(styleTree)
  return applyStyleTree(styleTree)

  function applyStyleTree({dom, children, layout}) {
    if(_.isString(dom)) return dom

    return cloneElement(
      dom,
      _.extend({flexed: true}, layout),
      _.map(children, applyStyleTree)
    )
  }

  function getStyleTree(node) {
    if(!_.isObject(node)) return {dom: node}

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
}
