import HStack from '@common/components/HStack';
import { useProcesses } from '@common/recoil/processes';
import { usePrograms } from '@common/recoil/programs';

const Desktop = () => {
  const { programs } = usePrograms();
  const { processes, start, stop } = useProcesses();

  return (
    <HStack width="100%" height="100%" overflow="hidden" position="relative">
      <button
        onClick={() => {
          start('profile');
        }}
      >
        profile start
      </button>
      <button
        onClick={() => {
          stop('profile');
        }}
      >
        profile stop
      </button>
      <button
        onClick={() => {
          start('blog');
        }}
      >
        blog start
      </button>
      <button
        onClick={() => {
          stop('blog');
        }}
      >
        blog stop
      </button>
      {processes.map(process => {
        const program = programs[process.programId];
        if (!program) {
          return;
        }
        console.log();

        return <program.Component />;
      })}
    </HStack>
  );
};

export default Desktop;
