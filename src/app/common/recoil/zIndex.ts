import { MutableRefObject, useEffect, useState } from 'react';
import { atom, useRecoilState } from 'recoil';
const css = String.raw;

export const zIndexAtom = atom<() => number>({
  key: 'zIndex',
  default: (() => {
    let zIndex = 1;
    return () => zIndex++;
  })(),
});

export const useZIndex = (targetRef: MutableRefObject<HTMLDivElement | null>) => {
  const [makeZIndex] = useRecoilState(zIndexAtom);

  useEffect(() => {
    const $target = targetRef?.current;
    if (!$target) {
      return;
    }
    const handleMousedown = () => {
      $target.style.zIndex = makeZIndex().toString();
    };

    $target.addEventListener('mousedown', handleMousedown);

    return () => {
      $target.removeEventListener('mousedown', handleMousedown);
    };
  }, []);

  return useState<number>(makeZIndex());
};
