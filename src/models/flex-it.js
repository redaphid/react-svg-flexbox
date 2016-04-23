import computeLayout from 'css-layout'
import {cloneElement} from 'react'
import _ from 'lodash'

const styles = {
  'the-list': {
    padding: 50
  },
  list1: {
    padding: 100
  }
}

export default function flexIt (node) {
  var styleTree = getStyleTree(node)
  computeLayout(styleTree)
  return applyStyleTree(styleTree)
}

function applyStyleTree(styleTree) {
  if(!_.isObject(styleTree)) {
    console.log(styleTree, 'is not an object')
  }

  const {dom, children, layout} = styleTree
  if(_.isEmpty(children)){
    return cloneElement(dom, layout)
  }

  return cloneElement(dom, layout, _.map(children, applyStyleTree))
}

function getStyleTree(node) {
  console.log('getStyleTree', node)
  return {
    dom: node,
    style: getStyle(node),
    children: getStyleChildren(node.props.children)
  }
}

function getStyleChildren(children) {
  console.log('getStyleChildren', {children})
  if( !_.isArray(children)) return []

  return _.compact( _.map(children, getStyleTree ) )
}

function getStyle(node) {
  if(!node.props.flexClass) return {}
  return _(node.props.flexClass)
    .split(' ')
    .map(function(flexClass){ return styles[flexClass] })
    .reduce(_.extend, {})
}
