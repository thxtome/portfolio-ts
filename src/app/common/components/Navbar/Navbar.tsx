import styled from 'styled-components';
import { variant } from 'styled-system';

import AppIcon from '../AppIcon';
import HStack from '../HStack';
import Typography from '../Typography';
import ic_minimize from '@asset/icon/ic_minimize.png';
import ic_maximize from '@asset/icon/ic_maximize.png';
import ic_resize from '@asset/icon/ic_resize.png';
import ic_close from '@asset/icon/ic_close.png';
import { MutableRefObject, useRef } from 'react';
import useDrag from './Navbar.useDrag';
import { useProcess } from '@common/components/Process/Process.useProcess';
import { isBrowser } from 'react-device-detect';

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

const Navbar = ({
  processRef,
  programId,
}: {
  processRef: MutableRefObject<HTMLDivElement | null>;
  programId: string;
}) => {
  const navBarRef = useRef<HTMLDivElement>(null);
  const { status, maximize, minimize, resize, stop } = useProcess();

  useDrag({ dragRef: navBarRef, targetRef: processRef });

  return (
    <HStack width="100%" height="36px" justifyContent="space-between" minWidth="max-content" p={3} ref={navBarRef}>
      <HStack alignItems="center" gap={6}>
        <AppIcon variant="navBar" iconId={programId as any}></AppIcon>
        <Typography kind="title2" as="p">
          {programId}
        </Typography>
      </HStack>
      <HStack gap={4} p={3} alignItems="center">
        {isBrowser && (
          <>
            <NavbarIcon variant="minimize" onClick={minimize}></NavbarIcon>
            {status === 'maximize' && <NavbarIcon variant="resize" onClick={resize}></NavbarIcon>}
            {status === 'active' && <NavbarIcon variant="maximize" onClick={maximize}></NavbarIcon>}
          </>
        )}
        <NavbarIcon variant="close" onClick={stop}></NavbarIcon>
      </HStack>
    </HStack>
  );
};

export default Navbar;
