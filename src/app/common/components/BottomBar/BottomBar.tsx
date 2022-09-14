import { useState } from 'react';
import styled from 'styled-components';
import { useProcesses } from '../../recoil/processes';
import AppIcon from '../AppIcon';
import Clock from '../Clock';
import HStack from '../HStack';
import Menu from '../Menu';
import VStack from '../VStack';
import { isBrowser } from 'react-device-detect';

const Tab = styled(VStack)`
  width: 12px;
  height: 100%;
  position: absolute;
  right: 0;
  cursor: pointer;
  border-left: 2px solid ${props => props.theme.colors['grey-300']};
`;

const BottomBar = () => {
  const { start, processes } = useProcesses();
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  const handleAppIconClick = (programId: string) => {
    start(programId);
  };
  return (
    <HStack
      position="fixed"
      bottom={0}
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="60px"
      bg="grey-100"
      opacity="0.8"
      gap={20}
      minWidth="max-content"
    >
      {isBrowser && (
        <AppIcon
          iconId="menu"
          variant="bottom"
          selected={isOpenMenu}
          onClick={() => {
            setIsOpenMenu(isOpenMenu => !isOpenMenu);
          }}
        ></AppIcon>
      )}
      {isOpenMenu && <Menu />}

      <AppIcon
        iconId="profile"
        variant="bottom"
        onClick={handleAppIconClick.bind(null, 'profile')}
        opened={processes.some(({ programId }) => programId === 'profile')}
      ></AppIcon>

      <AppIcon
        iconId="project"
        variant="bottom"
        onClick={handleAppIconClick.bind(null, 'project')}
        opened={processes.some(({ programId }) => programId === 'project')}
      ></AppIcon>

      <AppIcon
        iconId="note"
        variant="bottom"
        onClick={handleAppIconClick.bind(null, 'note')}
        opened={processes.some(({ programId }) => programId === 'note')}
      ></AppIcon>

      <AppIcon
        iconId="blog"
        variant="bottom"
        onClick={handleAppIconClick.bind(null, 'blog')}
        opened={processes.some(({ programId }) => programId === 'blog')}
      ></AppIcon>

      {isBrowser && <Clock />}
      <Tab></Tab>
    </HStack>
  );
};

export default BottomBar;
