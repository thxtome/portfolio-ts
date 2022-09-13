import { ReactNode } from 'react';
import styled from 'styled-components';
import { ColorProps, system } from 'styled-system';

const Line = styled.hr<ColorProps>`
  border: 1px solid;
  width: 100%;
  ${system({
    color: {
      property: 'borderColor',
      scale: 'colors',
    },
  })}
`;

export default Line;
