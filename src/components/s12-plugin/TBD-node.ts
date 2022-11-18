import { RectNode, RectNodeModel, h } from "@logicflow/core"
import { getIcon } from "./icon";


class TBDNodeModel extends RectNodeModel {
  /**
   * 初始化
   */
  initNodeData(data) {
    super.initNodeData(data)
    this.width = 268;
    this.height = 44;
    // this.radius = 3;
    // this.text.editable = false;
    this.text.x = this.x + 10;
    this.text.y = this.y + 1;
    this.iconPosition = ''; // icon位置，left表示左边，'right'表示右边
    this.defaultFill = '#FFFFFf';
    this.isTeamNode = true
  }
  getTextStyle () {
    const style = super.getTextStyle();
    return style;
  }
  /**
   * 重写节点样式
   */
  getNodeStyle() {
    
    const style = super.getNodeStyle();
    const { isCloseToBoundary } = this.properties;
    let stroke = '#EAEAEC'
    if (isCloseToBoundary) {
      style.strokeWidth =2;
      style.stroke = '#ff7f0e';
    } else {
      style.strokeWidth = 1;
      style.stroke = stroke;
    }
    // const { result } = this.properties;
    // if (result === 'win') {
    //   style.fill = "#0094ff"
    // } else {
      style.fill = "#f1f2f3"
    // }
    style.stroke = '#EAEAEC'
    style.strokeWidth = 1;
    return style;
  }
  /**
   * 宽高判断
   */
  setAttributes() {
    const region = this.properties.region;
    // 如果是边缘左边节点
    if (region) {
      this.width = 100
      this.height = 30
    }
  }
  getBackgroundFill(region) {
    // dataStyle.backgroundColor || this.defaultFill
    
  }
  /**
   * 提供方法给插件在判断此节点被拖动边界事件节点靠近时调用，从而触发高亮
   */
  setIsCloseToBoundary (flag) {
    this.setProperty('isCloseToBoundary', flag)
  }
  getAnchorStyle (anchorInfo) {
    const style = super.getAnchorStyle(anchorInfo);
    style.fill = 'transparent';
    style.stroke = 'transparent';
    style.hover.fill = 'transparent';
    style.hover.stroke = 'transparent';
    return style;
  }
  /**
   * 重写定义锚点
   */
  getDefaultAnchor() {
    const { x, y, id, width, height } = this;
    const anchors = [
      {
        x: x + width / 2,
        y: y + height / 2,
        id: `${id}_right`,
        type: "right"
      },
    ];
    return anchors;
  }
  // getOutlineStyle() {
  //   const style = super.getOutlineStyle();
  //   style.stroke = 'transparent';
  //   style.hover.stroke = 'transparent';
  //   return style;
  // }
}
class TBDNode extends RectNode {
  paintIcon () {
    const { width, height, properties } = this.props.model;
    return h('image', {
      width: 35,
      height: 35,
      x: - width / 2 + 3,
      y: - height / 2 + 3,
      href: getIcon(properties.name)
    });
  }
  customMouseDown = (ev) => {
    const { model, graphModel } = this.props;
    graphModel.eventCenter.emit('custom-event:clone-team', model);
  }
  getShape() {
    const {
      text,
      x,
      y,
      width,
      height,
      radius
    } = this.props.model;
    console.log('xxx', x, y, width, height)
    const style = this.props.model.getNodeStyle()
    const score = this.props.model.properties.score || 0;
    const { result, name } = this.props.model.properties;
    let scoreTextStyle = '', teamNameTextStyle = '', scoreBack = {};
    // console.log('result',result)
    // if (result === 'win') {
    //   teamNameTextStyle = "fill:#fff;";
    //   scoreTextStyle = "fill: #fff;";
    //   scoreBack = {
    //     fill : 'rgb(66,49,49)',
    //     fillOpacity: 0.3,
    //   }
    // } else {
      teamNameTextStyle = 'fill: #9499a0;';
      scoreTextStyle = 'fill: #9499a0;';
      scoreBack = {
        fillOpacity: 0.1,
      // }
    }
    teamNameTextStyle += "font-size: 14px;font-family: Helvetica, Arial, sans-serif;text-overflow: ellipsis;letter-spacing: 0;"
    scoreTextStyle += "font-size: 18px;font-family: Helvetica, Arial, sans-serif;"
    if(name === 'JDG') console.log('scoreTextStyle',scoreTextStyle)
    return h(
      'g',
      {
        className: 'lf-TBD-node',
        onMouseDown: this.customMouseDown,
      },
      [
        h('rect', {
          ...style,
          x: x - width / 2,
          y: y - height / 2,
          width,
          height,
          rx: radius,
          ry: radius
        }),
        h('g', {
          style: 'pointer-events: none;',
          transform: `translate(${x}, ${y})`
        }, [
          h('rect', {
            x: width/2-26 ,
            y:  -22,
            width: 26,
            height: 44,
            fill: '#000',
            stroke: 'none',
            ...scoreBack
          }),
          // h('text', {
          //   x: width/2-18 ,
          //   y: 5,
          //   style: scoreTextStyle
          // }, [score]),
          // h('text', {
          //   x: -80 ,
          //   y: 5,
          //   style: teamNameTextStyle
          // },[name]),
          // this.paintIcon(),
          // h('path', {
          //   d: `M ${30 - width / 2} ${1 -height / 2 } l 0 28`,
          //   stroke: '#000',
          //   strokeOpacity: 0.1,
          //   strokeWidth: 1
          // })
        ])
      ]
    )
  }
}


export default {
  type: 'TBD-node',
  model: TBDNodeModel,
  view: TBDNode
}
