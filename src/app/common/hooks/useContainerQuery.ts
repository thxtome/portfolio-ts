import { ContainerQueryContext } from '@src/app/common/context/containerQuery';
import { useContext, useLayoutEffect, useMemo, useRef, useState } from 'react';

function inRange(width: number, range: { minWidth: number; maxWidth: number }) {
  let min = range.minWidth || 0;
  let max = range.maxWidth || Infinity;
  return width >= min && width < max;
}

export function useContainerQuery(ref: React.RefObject<HTMLDivElement> | null, options: any[]) {
  const { cutlines } = useContext(ContainerQueryContext);

  const [selectedValue, setSelectedValue] = useState(options[0]);
  const currIdxRef = useRef(0);

  if (options.length !== cutlines.length - 1) {
    throw new Error('options length invalid');
  }

  useLayoutEffect(() => {
    if (ref === null || !ref.current) {
      return;
    }

    const element = ref.current;

    const observer = new ResizeObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.contentRect) {
          return;
        }

        const width = entry.borderBoxSize[0].inlineSize;

        let nextIdx = cutlines.findIndex((_, idx, arr) => {
          return inRange(width, { minWidth: arr[idx], maxWidth: arr[idx + 1] });
        });

        if (currIdxRef.current !== nextIdx) {
          currIdxRef.current = nextIdx;
          setSelectedValue(options[nextIdx]);
        }
      });
    });

    observer.observe(element, { box: 'border-box' });

    return () => {
      observer.disconnect();
    };
  }, []);

  return selectedValue;
}

export default useContainerQuery;
