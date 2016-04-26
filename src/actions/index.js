export function zoomAround({deltaX, deltaY}){
  return { type: 'zoomAround', deltaX, deltaY }
}

export function renderFlow(flow) {
  return {type: "renderFlow", flow}
}

export function loadFlow({uuid}) {
  return { type: 'loadFlow', uuid }
}
