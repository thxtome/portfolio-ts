import HStack from '@common/components/HStack';
import { useProcesses } from '@common/recoil/processes';
import { ReactElement, ReactNode } from 'react';
import { usePrograms } from '../../recoil/programs';
const Desktop = () => {
  const { programs } = usePrograms();
  const { processes, start, stop } = useProcesses();
  console.log(programs);
  console.log(processes);

  return (
    <HStack>
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
