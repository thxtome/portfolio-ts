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
  zIndex,
} from 'styled-system';
import type { LayoutProps, BorderProps, ColorProps, ZIndexProps, PositionProps, SpaceProps } from 'styled-system';

import { css } from '@styled-system/css';
import { system } from 'styled-system';

const gap = css((props: any) => ({
  gap: theme => theme.space[props.gap],
}));

const Box = styled.div<
  LayoutProps & BorderProps & ColorProps & ZIndexProps & PositionProps & SpaceProps & { gap?: number }
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
  ${flex}
  ${order}
  ${alignSelf}
  ${borders}
  ${borderColor}
  ${borderRadius}
  ${overflow}
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
