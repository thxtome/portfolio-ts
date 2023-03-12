import HStack from '@common/components/HStack';
import { useProcesses } from '@common/recoil/processes';
import { usePrograms } from '@common/recoil/programs';
import BottomBar from '../../components/BottomBar';
import { ProcessProvider } from '../../components/Process/Process.useProcess';
import { useMenu } from '../../recoil/menu';
import { useEffect } from 'react';

const Desktop = () => {
  const { programs } = usePrograms();
  const { processes } = useProcesses();
  const { setIsOpen } = useMenu();

  useEffect(() => {
    const handleMousedown = () => {
      setIsOpen(false);
    };

    document.body.addEventListener('click', handleMousedown);

    return () => {
      document.body.removeEventListener('click', handleMousedown);
    };
  }, []);

  return (
    <HStack width="100%" height="100%" overflow="hidden" position="relative">
      {processes.map(process => {
        const program = programs[process.programId];
        if (!program) {
          return;
        }
        return (
          <ProcessProvider
            key={process.programId}
            programId={process.programId}
            zIndex={process.zIndex}
            status={process.status}
          >
            <program.Component />
          </ProcessProvider>
        );
      })}
      <BottomBar></BottomBar>
    </HStack>
  );
};

export default Desktop;
