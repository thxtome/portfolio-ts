import { createContext, ReactNode, useContext, useState } from 'react';
import { useProcesses } from '../../recoil/processes';

interface ProcessContext {
  programId: string;
  zIndex: number;
  status: 'active' | 'minimize' | 'maximize';
  minimize: () => void;
  maximize: () => void;
  resize: () => void;
  stop: () => void;
  focus: () => void;
}

const ProcessContext = createContext<ProcessContext>(null as any);

export const ProcessProvider = ({
  programId,
  zIndex,
  status,
  children,
}: {
  programId: string;
  zIndex: number;
  children: ReactNode;
  status: 'active' | 'minimize' | 'maximize';
}) => {
  const { changeStatus, stop, focus } = useProcesses();

  const minimize = () => {
    changeStatus(programId, 'minimize');
  };
  const maximize = () => {
    changeStatus(programId, 'maximize');
  };
  const resize = () => {
    changeStatus(programId, 'active');
  };
  const stopCertainProcess = () => {
    stop(programId);
  };
  const focusCertainProcess = () => {
    focus(programId);
  };

  const value = {
    programId,
    zIndex,
    status,
    minimize,
    maximize,
    resize,
    stop: stopCertainProcess,
    focus: focusCertainProcess,
  };

  return <ProcessContext.Provider value={value}>{children}</ProcessContext.Provider>;
};

export const useProcess = () => useContext(ProcessContext);
