import { ReactNode, useRef } from 'react';
import styled from 'styled-components';
import Box from '@common/components/Box';
import Navbar from '@common/components/Navbar';
import useResize from './Process.useResize';
import { useProcess } from './Process.useProcess';
import { variant } from 'styled-system';
import VStack from '@common/components/VStack';
import { MIN_WIDTH, MIN_HEIGHT } from '@common/contants/constants';
import useContainerQuery from '@common/hooks/useContainerQuery';

const Wrapper = styled(Box)<{ cursor?: string; status: string }>`
  position: absolute;
  padding: 6px;
  width: ${MIN_WIDTH}px;
  height: ${MIN_HEIGHT}px;

  ${variant({
    prop: 'status',
    variants: {
      minimize: {
        display: 'none;',
      },
      maximize: {
        width: '100% !important',
        height: '100% !important',
        transform: 'translate(0, 0) !important',
        padding: '0',
      },
    },
  })};
`;

const Process = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);
  const { programId, zIndex, status, focus } = useProcess();
  const p = useContainerQuery(ref, [6, 12, 12]);

  useResize({ outerRef: ref, innerRef });

  return (
    <Wrapper tabIndex={1} ref={ref} zIndex={zIndex} status={status} onFocus={focus}>
      <VStack ref={innerRef} backgroundColor="white" borderRadius={5} p={p} pt={6} width="100%" height="100%" gap={12}>
        <Navbar processRef={ref} programId={programId!}></Navbar>
        {children}
      </VStack>
    </Wrapper>
  );
};

export default Process;
