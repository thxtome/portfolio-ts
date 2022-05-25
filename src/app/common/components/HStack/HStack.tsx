import styled from 'styled-components';
import { alignItems, flexWrap, justifyContent, FlexboxProps } from 'styled-system';
import Box from '@common/components/Box';

const HStack = styled(Box)<FlexboxProps>`
  display: flex;
  flex-direction: row;
  ${alignItems}
  ${flexWrap}
  ${justifyContent}
`;

export default HStack;
