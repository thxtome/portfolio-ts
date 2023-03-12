import { MutableRefObject, useEffect, useState } from 'react';
import { atom, useRecoilState } from 'recoil';

export const menuAtom = atom<boolean>({
  key: 'menu',
  default: false,
});

export const useMenu = () => {
  const [isOpen, setIsOpen] = useRecoilState(menuAtom);
  return { isOpen, setIsOpen };
};
