import * as CSS from 'csstype';
import styled from 'styled-components';
import {
  space,
  color,
  width,
  minWidth,
  maxWidth,
  height,
  minHeight,
  maxHeight,
  order,
  alignSelf,
  borders,
  borderColor,
  borderRadius,
  overflow,
  overflowX,
  overflowY,
  position,
  display,
  zIndex,
} from 'styled-system';
import type { LayoutProps, BorderProps, ColorProps, ZIndexProps, PositionProps, SpaceProps } from 'styled-system';

import { system } from 'styled-system';
const Box = styled.div<
  Omit<LayoutProps, 'overflowY'> &
    BorderProps &
    ColorProps &
    ZIndexProps &
    PositionProps &
    SpaceProps & { gap?: number | number[] } & { overflowY?: CSS.Property.OverflowY | 'overlay' }
>`
  ${zIndex}
  ${space}
  ${color}
  ${width}
  ${maxWidth}
  ${minWidth}
  ${height}
  ${minHeight}
  ${maxHeight}
  ${order}
  ${alignSelf}
  ${borders}
  ${borderColor}
  ${borderRadius}
  ${overflow}
  ${overflowX}
  ${overflowY}
  ${position}
  ${display}
  box-sizing:border-box;
  ${system({
    gap: {
      property: 'gap',
      scale: 'space',
    },
  })}
`;

export default Box;
