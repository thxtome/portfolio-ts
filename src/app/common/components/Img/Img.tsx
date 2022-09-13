import styled from 'styled-components';
import {
  space,
  width,
  minWidth,
  maxWidth,
  height,
  minHeight,
  maxHeight,
  borderRadius,
  position,
  display,
} from 'styled-system';
import type { LayoutProps, BorderProps, ColorProps, PositionProps, SpaceProps } from 'styled-system';
const Img = styled.img<LayoutProps & BorderProps & ColorProps & PositionProps & SpaceProps>`
  ${space}
  ${width}
  ${maxWidth}
  ${minWidth}
  ${height}
  ${minHeight}
  ${maxHeight}
  ${borderRadius}
  ${position}
  ${display}
`;

export default Img;
