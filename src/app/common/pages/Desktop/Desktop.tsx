import HStack from '@common/components/HStack';
import { useProcesses } from '@common/recoil/processes';
import { usePrograms } from '@common/recoil/programs';
import BottomBar from '../../components/BottomBar';
import { ProcessProvider } from '../../components/Process/Process.useProcess';

const Desktop = () => {
  const { programs } = usePrograms();
  const { processes } = useProcesses();

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
