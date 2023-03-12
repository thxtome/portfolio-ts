import { atom, useRecoilState } from 'recoil';
import { zIndexAtom } from './zIndex';

interface Process {
  id: string;
  programId: string;
  zIndex: number;
  status: 'active' | 'minimize' | 'maximize';
}

const processesAtom = atom<Process[]>({
  key: 'processes',
  default: [],
});

export const useProcesses = () => {
  const [processes, setProcesses] = useRecoilState(processesAtom);
  const [makeZIndex] = useRecoilState(zIndexAtom);

  const focus = (programId: string) => {
    setProcesses(processes =>
      processes.map(process => ({
        ...process,
        zIndex: process.programId === programId ? makeZIndex() : process.zIndex,
        status: process.status,
      })),
    );
  };

  const changeStatus = (programId: string, status: 'active' | 'minimize' | 'maximize') => {
    setProcesses(processes =>
      processes.map(process => ({
        ...process,
        status: programId === process.programId ? status : process.status,
      })),
    );
  };

  const start = (programId: string) => {
    const findIndex = processes.findIndex(process => process.programId === programId);

    if (findIndex === -1) {
      setProcesses(processes => [
        ...processes,
        { id: `${processes.length}`, programId, zIndex: makeZIndex(), status: 'active' },
      ]);
    } else {
      focus(programId);
    }
  };

  const stop = (programId: string) => {
    setProcesses(processes => processes.filter(process => process.programId !== programId));
  };

  return { processes, start, stop, focus, changeStatus };
};
