import styled from 'styled-components';
import { flex, flexbox, alignItems, flexWrap, justifyContent, FlexboxProps } from 'styled-system';
import Box from '@common/components/Box';

const HStack = styled(Box)<FlexboxProps>`
  display: flex;
  flex-direction: row;
  ${alignItems}
  ${flexWrap}
  ${justifyContent}
  ${flex}
  ${flexbox}
`;

export default HStack;
