import { PolylineEdge, PolylineEdgeModel } from '@logicflow/core';

class BetterLineModel extends PolylineEdgeModel {
  getEdgeStyle() {
    const style = super.getEdgeStyle();
    style.stroke = '#9499a0';
    style.strokeWidth = 1;
    style.strokeLinecap = 'butt';
    style.strokeLinejoin = 'miter';
    style.fill = 'transparent';
    return style;
  }
}

class BetterLine extends PolylineEdge {
  // getEndArrow() {
  //   return null;
  // }
  getArrow() {
    return null;
  }
}

export default {
  type: 'better-line',
  view: BetterLine,
  model: BetterLineModel
};
