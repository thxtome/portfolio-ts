import { useRef } from 'react';
import { useZIndex } from '../../recoil/zIndex';
import Box from '../Box';
import Navbar from '../Navbar';

const Process = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <Box
      position="absolute"
      width="500px"
      height="500px"
      backgroundColor="white"
      borderRadius={5}
      p={12}
      pt={6}
      ref={ref}
    >
      <Navbar processRef={ref}></Navbar>
    </Box>
  );
};

export default Process;
