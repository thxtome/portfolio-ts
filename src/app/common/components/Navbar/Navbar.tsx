import styled from 'styled-components';
import { variant } from 'styled-system';

import AppIcon from '../AppIcon';
import HStack from '../HStack';
import Typography from '../Typography';
import ic_minimize from '@asset/icon/ic_minimize.png';
import ic_maximize from '@asset/icon/ic_maximize.png';
import ic_resize from '@asset/icon/ic_resize.png';
import ic_close from '@asset/icon/ic_close.png';
import { MutableRefObject, useCallback, useEffect, useRef } from 'react';
import useDrag from './Navbar.useDrag';
const NavbarIcon = styled.div<{ variant: 'minimize' | 'maximize' | 'resize' | 'close' }>`
  width: 24px;
  height: 24px;
  border: 4px solid white;
  box-sizing: border-box;
  ${variant({
    variants: {
      minimize: {
        background: `url(${ic_minimize})`,
      },
      maximize: {
        background: `url(${ic_maximize})`,
      },
      resize: {
        background: `url(${ic_resize})`,
      },
      close: {
        background: `url(${ic_close})`,
      },
    },
  })}
  background-size: cover;
`;

const  Navbar = ({ processRef }: { processRef: MutableRefObject<HTMLDivElement | null> }) => {
  const navBarRef = useRef<HTMLDivElement>(null);

  useDrag({ dragRef: navBarRef, targetRef: processRef });
  return (
    <HStack width="100%" height="36px" justifyContent="space-between" minWidth="max-content" p={3} ref={navBarRef}>
      <HStack alignItems="center">
        <AppIcon variant="navBar" program="blog" mr={6}></AppIcon>
        <Typography kind="title2" as="p">
          blog
        </Typography>
      </HStack>
      <HStack gap={4} p={3} alignItems="center">
        <NavbarIcon variant="minimize"></NavbarIcon>
        <NavbarIcon variant="resize"></NavbarIcon>
        <NavbarIcon variant="close"></NavbarIcon>
      </HStack>
    </HStack>
  );
};

export default Navbar;
