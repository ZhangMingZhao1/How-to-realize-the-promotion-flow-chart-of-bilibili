import { RectNode, RectNodeModel, h } from "@logicflow/core"
import { getIcon } from "./icon";


class TeamNodeModel extends RectNodeModel {
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
    const dataStyle = this.properties.style || {};
    const { isCloseToBoundary, region, isHide } = this.properties;
    let fill = this.defaultFill
    let stroke = '#EAEAEC'
    console.log('region',region)
    if (isHide==='true') {
      console.log('ddddd')
      style.display = 'none'
    }
    switch (region) {
      case 'LPL':
        fill = 'rgb(248, 206, 204)'
        stroke = 'rgb(184, 84, 80)'
        break
      case 'LCK':
        fill = 'rgb(255, 230, 204)'
        stroke = 'rgb(215, 155, 0)'
        break
      case 'LEC':
        fill = 'rgb(218, 232, 252)'
        stroke = 'rgb(108, 142, 191)'
        break
      case 'LCS':
        fill = 'rgb(213, 232, 212)'
        stroke = 'rgb(130, 179, 102)'
        break
      case 'CBLOL':
        fill = 'rgb(225, 213, 231)'
        stroke = 'rgb(150, 115, 166)'
        break
      case 'PCS':
        fill = 'rgb(177, 221, 240)'
        stroke = 'rgb(16, 115, 158)'
        break
      case 'LCO':
      case 'VCS':
      case 'LLA':
      case 'LJL':
      case 'TCL':
        fill = 'rgb(186, 200, 211)'
        stroke = 'rgb(35, 68, 93)'
    }
    if (isCloseToBoundary) {
      style.strokeWidth = Number(dataStyle.borderWidth) || 2;
      style.stroke = dataStyle.borderColor || '#ff7f0e';
    } else {
      style.strokeWidth = Number(dataStyle.borderWidth) || 1;
      style.stroke = stroke;
    }
    style.fill = fill;
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
  // getAnchorStyle (anchorInfo) {
  //   const style = super.getAnchorStyle(anchorInfo);
  //   style.fill = 'transparent';
  //   style.stroke = 'transparent';
  //   style.hover.fill = 'transparent';
  //   style.hover.stroke = 'transparent';
  //   return style;
  // }
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
class TeamNode extends RectNode {
  paintIcon () {
    const { width, height, text } = this.props.model;
    return h('image', {
      width: 35,
      height: 35,
      x: - width / 2 + 3,
      y: - height / 2 + 3,
      href: getIcon(text.value)
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
    return h(
      'g',
      {
        className: 'lf-team-node',
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
            fillOpacity: 0.1,
            stroke: 'none',
            style: "font-size: 18px;color: var(--text3);font-family: Helvetica, Arial, sans-serif;",
            // text: {
            //   x: width / 2 - 18,
            //   y: 5,
            //   value: '3'
            // }
          }),
          // h('text', {
          //   x: width/2-18 ,
          //   y: 5,
          //   style: "font-size: 18px;color: var(--text3);font-family: Helvetica, Arial, sans-serif;"
          // },['3']),
          this.paintIcon(),
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
  type: 'team-node',
  model: TeamNodeModel,
  view: TeamNode
}
