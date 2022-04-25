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
  flex,
  order,
  alignSelf,
  borders,
  borderColor,
  borderRadius,
  overflow,
  position,
  display,
} from 'styled-system';
import type { LayoutProps, BorderProps, ColorProps } from 'styled-system';

const Box = styled.div<LayoutProps & BorderProps & ColorProps>`
  ${space}
  ${color}
  ${width}
  ${maxWidth}
  ${minWidth}
  ${height}
  ${minHeight}
  ${maxHeight}
  ${flex}
  ${order}
  ${alignSelf}
  ${borders}
  ${borderColor}
  ${borderRadius}
  ${overflow}
  ${position}
  ${display}
`;

export default Box;
