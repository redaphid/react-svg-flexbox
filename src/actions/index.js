
export function getFlowScale(flow){

}

export function zoomAround({deltaX, deltaY}){
  return {
    type: 'zoomAround',
    deltaX, deltaY
  }
}

export function renderFlow(flow) {
  return {type: "renderFlow", flow}
}
