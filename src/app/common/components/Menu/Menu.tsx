import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { useProcesses } from '@common/recoil/processes';
import AppIcon from '@common/components/AppIcon';
import HStack from '@common/components/HStack';
import Typography from '@common/components/Typography';
import VStack from '@common/components/VStack';
import { memo } from 'react';
import { useRecoilState } from 'recoil';
import { zIndexAtom } from '../../recoil/zIndex';

const Container = styled(VStack)`
  transform: translateX(-50%);
`;

const Menu = () => {
  const { start, processes } = useProcesses();
  const handleAppIconClick = (programId: string) => {
    start(programId);
  };

  return (
    <Container
      onClick={e => {
        e.stopPropagation();
      }}
      zIndex={Number.MAX_SAFE_INTEGER}
      position="fixed"
      height="500px"
      bottom="80px"
      left="50%"
      bg="grey-200"
      opacity="0.9"
      p={20}
    >
      <Typography as="p" kind="title1">
        Pinned
      </Typography>
      <HStack gap={64} p={16}>
        <AppIcon
          variant="menu"
          iconId={'profile'}
          onClick={handleAppIconClick.bind(null, 'profile')}
          opened={processes.some(({ programId }) => programId === 'profile')}
        ></AppIcon>
        <AppIcon
          variant="menu"
          iconId={'project'}
          onClick={handleAppIconClick.bind(null, 'project')}
          opened={processes.some(({ programId }) => programId === 'project')}
        ></AppIcon>
        <AppIcon
          variant="menu"
          iconId={'note'}
          onClick={handleAppIconClick.bind(null, 'note')}
          opened={processes.some(({ programId }) => programId === 'note')}
        ></AppIcon>
        <AppIcon
          variant="menu"
          iconId={'blog'}
          onClick={handleAppIconClick.bind(null, 'blog')}
          opened={processes.some(({ programId }) => programId === 'blog')}
        ></AppIcon>
      </HStack>
    </Container>
  );
};

export default () => {
  return createPortal(<Menu></Menu>, document.getElementById('menu')!);
};
