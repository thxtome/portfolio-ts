import { useRef } from 'react';
import { useZIndex } from '@common/recoil/zIndex';
import styled from 'styled-components';
import Box from '@common/components/Box';
import Navbar from '@common/components/Navbar';
import useResize from './Process.useResize';

const Resizable = styled(Box)<{ cursor?: string }>`
  width: 500px;
  height: 500px;
  position: absolute;
  padding: 6px;
`;

const Process = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);
  useResize({ outerRef: ref, innerRef });
  useZIndex(ref);

  return (
    <Resizable ref={ref}>
      <Box ref={innerRef} backgroundColor="white" borderRadius={5} p={12} pt={6} width="100%" height="100%">
        <Navbar processRef={ref}></Navbar>
      </Box>
    </Resizable>
  );
};

export default Process;
