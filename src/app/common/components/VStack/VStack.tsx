import styled from 'styled-components';
import { alignItems, flexWrap, justifyContent } from 'styled-system';
import Box from '@common/components/Box';

const VStack = styled(Box)`
  display: flex;
  flex-direction: column;
  ${alignItems}
  ${flexWrap}
  ${justifyContent}
`;

export default VStack;
