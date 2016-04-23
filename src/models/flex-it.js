import computeLayout from 'css-layout'
import {cloneElement, Children} from 'react'
import _ from 'lodash'

export default function flexIt (node, {css={}, scale={height: 100, width: 100}}={}) {

  const flexboxToSvgProperty = {
    defaults: function(layout) {
      const {top, left} = layout
      return _.defaults({x: left, y: top}, layout)
    },
    circle: function(layout) {
      const {top, left, width, height} = layout
      const rx = width / 2
      const ry = height / 2
      return _.defaults({
        cx: left + rx,
        cy: top + ry,
        r: _.min([rx,ry])
      }, layout)

    },
    g: function(layout) {
      const {top, left, bottom, right} = layout
      var x = left, y = top
      // if (right > 0) x = scale.width - right
      // if (bottom > 0) y = scale.height - bottom
      return {
        transform: `translate(${x},${y})`
      }
    }
  }

  var styleTree = getStyleTree(node)
  styleTree.layout = scale
  computeLayout(styleTree)
  delete styleTree.layout
  return applyStyleTree(styleTree)

  function applyStyleTree({dom, children, layout}) {
    if(_.isString(dom)) return dom
    console.log({type: dom.type, layout: layout})
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
      .map(function(flexClass){ return css[flexClass] })
      .reduce(_.extend, {})
  }

  function getSvgLayout(nodeType, layout) {
      const transform = flexboxToSvgProperty[nodeType] || flexboxToSvgProperty.defaults
      return transform(layout)
  }

  function getSvgProperty(nodeType, key) {
    const svgPropertiesForType = _.extend({}, flexboxToSvgProperty.defaults, flexboxToSvgProperty[nodeType])
    return svgPropertiesForType[key] || key
  }
}
