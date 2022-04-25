import { ComponentType, ReactNode } from 'react';
import { atom, useRecoilState } from 'recoil';

interface Program {
  id: string;
  name: string;
  Component: ComponentType;
}

interface ProgramMap {
  [key: string]: Program | undefined;
}

export const programsAtom = atom<ProgramMap>({
  key: 'programs',
  default: {},
});

export const usePrograms = () => {
  const [programs, setPrograms] = useRecoilState(programsAtom);

  const register = (program: Program) => {
    setPrograms(programs => ({
      ...programs,
      [program.id]: program,
    }));

    const unregister = () => {
      setPrograms(programs => ({
        ...programs,
        [program.id]: undefined,
      }));
    };

    return unregister;
  };

  return { programs, register };
};
