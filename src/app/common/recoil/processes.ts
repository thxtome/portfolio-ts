import { atom, useRecoilState } from 'recoil';

interface Process {
  id: string;
  programId: string;
}

const processesAtom = atom<Process[]>({
  key: 'processes',
  default: [],
});

export const useProcesses = () => {
  const [processes, setProcesses] = useRecoilState(processesAtom);

  const start = (programId: string) => {
    const findIndex = processes.findIndex(process => process.programId === programId);
    console.log(findIndex);

    if (findIndex === -1) {
      setProcesses(processes => [...processes, { id: `${processes.length}`, programId }]);
    }
  };

  const stop = (programId: string) => {
    setProcesses(processes => processes.filter(process => process.programId !== programId));
  };

  return { processes, start, stop };
};
