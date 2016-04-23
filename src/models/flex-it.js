import computeLayout from 'css-layout'
import {cloneElement} from 'react'
import _ from 'lodash'

export default function flexIt (node, styles) {
  var styleTree = getStyleTree(node)
  computeLayout(styleTree)
  return applyStyleTree(styleTree)

  function applyStyleTree({dom, children, layout}) {    
    if(_.isEmpty(children)) return cloneElement(dom, layout)

    return cloneElement(
      dom,
      _.extend({flexed: true}, layout),
      _.map(children, applyStyleTree)
    )
  }

  function getStyleTree(node) {
    return {
      dom: node,
      style: getStyle(node),
      children: getStyleChildren(node.props.children)
    }
  }

  function getStyleChildren(children) {
    if( _.isString(children)) return []
    if(_.isObject(children)) children = [children]

    return _.compact( _.map(children, getStyleTree ) )
  }

  function getStyle(node) {
    if(!node.props.flexClass) return {}
    return _(node.props.flexClass)
      .split(' ')
      .map(function(flexClass){ return styles[flexClass] })
      .reduce(_.extend, {})
  }
}
