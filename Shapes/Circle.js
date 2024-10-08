/* eslint new-cap: ["error", { "capIsNew": false }] */
/* eslint no-unexpected-multiline: 0 */

import React, { Component } from 'react';
import { ART } from 'react-native';

function makeCirclePath(x, y, radius, direction) {
  const arcMethod = direction === 'counter-clockwise' ? 'counterArc' : 'arc';

  return ART.Path()
    .moveTo(x, y)
    .move(radius, 0)
    [arcMethod](0, radius * 2, radius, radius)
    [arcMethod](0, radius * -2, radius, radius)
    .close();
}

export default class Circle extends Component {
  static defaultProps = {
    offset: { top: 0, left: 0 },
    strokeWidth: 0,
    direction: 'clockwise',
  };

  render() {
    const { radius, offset, strokeWidth, direction, ...restProps } = this.props;
    const path = makeCirclePath(
      (offset.left || 0) + (strokeWidth / 2),
      (offset.top || 0) + (strokeWidth / 2),
      radius - (strokeWidth / 2),
      direction
    );
    return (
      <ART.Shape
        d={path}
        strokeCap="butt"
        strokeWidth={strokeWidth}
        {...restProps}
      />
    );
  }
}
