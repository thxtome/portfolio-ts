import { MutableRefObject, useEffect } from 'react';

const css = String.raw;
const Y_PADDING_SIZE = 6;
const EXTRA_SIZE = 6;

const useDrag = ({
  targetRef,
  dragRef,
}: {
  targetRef: MutableRefObject<HTMLDivElement | null>;
  dragRef: MutableRefObject<HTMLDivElement | null>;
}) => {
  useEffect(() => {
    const $process = targetRef.current;
    const $navBar = dragRef.current;

    if (!$process || !$navBar) {
      return;
    }

    let offsetX: number | null = null;
    let offsetY: number | null = null;

    const handleMousedown = (e: MouseEvent) => {
      const style = window.getComputedStyle($process);
      const matrix = style.transform;
      const matrixValues = matrix.match(/matrix.*\((.+)\)/)?.[1].split(', ');
      const currX = Number(matrixValues?.[4] ?? '0');
      const currY = Number(matrixValues?.[5] ?? '0');

      offsetX = e.clientX - currX;
      offsetY = e.clientY - currY;
    };

    const handleMousemove = (e: MouseEvent) => {
      if (offsetX === null || offsetY === null) {
        return;
      }

      let x = e.clientX - offsetX;
      let y = e.clientY - offsetY;

      const MIX_X = 0;
      const MAX_X = window.innerWidth - EXTRA_SIZE;

      const MIN_Y = 0 + EXTRA_SIZE;
      const MAX_Y = window.innerHeight - EXTRA_SIZE - Y_PADDING_SIZE;

      if (e.clientX <= MIX_X) {
        x = offsetX * -1;
      }
      if (e.clientX >= MAX_X) {
        x = MAX_X - offsetX;
      }

      if (e.clientY <= MIN_Y) {
        y = offsetY * -1 + EXTRA_SIZE;
      }
      if (e.clientY >= MAX_Y) {
        y = MAX_Y - offsetY;
      }

      requestAnimationFrame(() => {
        $process.style.transform = css`translate(${x ?? 0}px, ${y ?? 0}px)`;
      });
    };

    const handleMouseup = () => {
      offsetX = null;
      offsetY = null;
    };

    $navBar.addEventListener('mousedown', handleMousedown);
    document.addEventListener('mousemove', handleMousemove);
    document.addEventListener('mouseup', handleMouseup);

    return () => {
      $navBar.removeEventListener('mousedown', handleMousedown);
      document.removeEventListener('mousemove', handleMousemove);
      document.removeEventListener('mouseup', handleMouseup);
    };
  }, []);
};

export default useDrag;
