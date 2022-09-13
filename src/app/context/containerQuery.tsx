import { createContext, PropsWithChildren, useContext, useLayoutEffect, useState } from 'react';

export const ContainerQueryContext = createContext<{ cutlines: number[] }>(null as any);

type ContainerQueryContextProps = PropsWithChildren<{
  breakpoints: number[];
}>;

export function ContainerQueryContextProvider({ children, breakpoints }: ContainerQueryContextProps) {
  const cutlines = [0, ...breakpoints, Infinity];
  return <ContainerQueryContext.Provider value={{ cutlines }}>{children}</ContainerQueryContext.Provider>;
}

export default ContainerQueryContextProvider;
