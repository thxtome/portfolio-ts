import { forwardRef, ReactNode, useRef } from 'react';
import styled from 'styled-components';
import css from '@styled-system/css';
import useContainerQuery from '../../hooks/useContainerQuery';
import VStack from '../VStack';

const hideScrollbar = css`
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const Container = styled(VStack)<{ scrollVisible: boolean }>`
  ${props => !props.scrollVisible && hideScrollbar}
`;

const Layout = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);

  const { p, gap, scrollVisible } = useContainerQuery(ref, [
    { p: 0, gap: 12, scrollVisible: false },
    { p: 12, gap: 24, scrollVisible: true },
    { p: 36, gap: 48, scrollVisible: true },
  ]);

  return (
    <Container
      ref={ref}
      p={p}
      height="100%"
      overflowX="hidden"
      overflowY="overlay"
      alignItems="center"
      scrollVisible={scrollVisible}
    >
      <VStack gap={gap} width="100%" maxWidth="1200px" minWidth="296px" height="100%">
        {children}
      </VStack>
    </Container>
  );
};

export default Layout;
