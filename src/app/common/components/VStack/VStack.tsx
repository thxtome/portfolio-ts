import styled from 'styled-components';
import { flexbox, flex, alignItems, flexWrap, justifyContent, FlexboxProps } from 'styled-system';
import Box from '@common/components/Box';

const VStack = styled(Box)<FlexboxProps>`
  display: flex;
  flex-direction: column;
  ${alignItems}
  ${flexWrap}
  ${justifyContent}
  ${flex}
  ${flexbox}
`;

export default VStack;
