import { PolylineEdge, PolylineEdgeModel } from '@logicflow/core';

class BetterLineModel extends PolylineEdgeModel {
  getEdgeStyle() {
    const style = super.getEdgeStyle()
    const sourceNodeModel = this.graphModel.getNodeModelById(this.sourceNodeId)
    if (sourceNodeModel.properties.color) {
      style.stroke = sourceNodeModel.properties.color
    } else {
      style.stroke = 'rgb(204, 204, 206)'
    }
    return style
  }
}

class BetterLine extends PolylineEdge {
}

export default {
  type: 'better-line',
  view: BetterLine,
  model: BetterLineModel
}