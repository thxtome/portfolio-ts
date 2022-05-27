import { MutableRefObject, useEffect } from 'react';
import getTranslate from '@common/helper/getTranslate';

const css = String.raw;
const MIN_HEIGHT = 300;
const MIN_WIDTH = 300;

type Direction = 'n' | 's' | 'e' | 'w' | 'ne' | 'nw' | 'se' | 'sw' | null;

const useResize = ({
  outerRef,
  innerRef,
}: {
  outerRef: MutableRefObject<HTMLDivElement | null>;
  innerRef: MutableRefObject<HTMLDivElement | null>;
}) => {
  useEffect(() => {
    const $outer = outerRef.current;
    const $inner = innerRef.current;

    if (!$outer || !$inner) {
      return;
    }

    let maxX: number | null = null;
    let maxY: number | null = null;
    let isOnEdge = false;
    let direction: Direction = null;
    let isResizing = false;

    const handleEdgeEnter = () => {
      isOnEdge = true;
    };

    const handleEdgeLeave = () => {
      isOnEdge = false;
      if (isResizing) {
        return;
      }
      document.body.style.cursor = 'default';
    };

    const handleEdgeMousemove = (e: MouseEvent) => {
      if (isResizing) {
        return;
      }

      if (!isOnEdge) {
        return;
      }

      const style = window.getComputedStyle($outer);
      const { currX, currY } = getTranslate(style);

      const width = Number(style.width.replace('px', ''));
      const height = Number(style.height.replace('px', ''));

      let offsetX = e.clientX - currX;
      let offsetY = e.clientY - currY;

      let cursor: string | null = null;
      direction = null;

      //north
      if (offsetY <= 6) {
        direction = 'n';
      }

      //soute
      if (Math.abs(offsetY - height) <= 6) {
        direction = 's';
      }

      //east
      if (Math.abs(offsetX - width) <= 6) {
        direction ? (direction += 'e') : (direction = 'e');
      }

      //west
      if (offsetX <= 6) {
        direction ? (direction += 'w') : (direction = 'w');
      }

      if (direction === 'n' || direction === 's') {
        cursor = 'ns';
      } else if (direction === 'e' || direction === 'w') {
        cursor = 'ew';
      } else if (direction === 'ne' || direction === 'sw') {
        cursor = 'nesw';
      } else if (direction === 'nw' || direction === 'se') {
        cursor = 'nwse';
      }

      document.body.style.cursor = `${cursor}-resize`;
    };

    const handleResizingStart = (e: MouseEvent) => {
      if (!isOnEdge) {
        return;
      }

      const style = window.getComputedStyle($outer);

      if (style.cursor === 'default') {
        return;
      }

      const { currX, currY } = getTranslate(style);

      const width = Number(style.width.replace('px', ''));
      const height = Number(style.height.replace('px', ''));

      const offsetX = e.clientX - currX;
      const offsetY = e.clientY - currY;

      maxX = e.clientX + width - MIN_WIDTH - offsetX;
      maxY = e.clientY + height - MIN_HEIGHT - offsetY;
      isResizing = true;
    };

    const handleResizing = (e: MouseEvent) => {
      if (!isResizing) {
        return;
      }

      if (maxX === null || maxY === null) {
        return;
      }

      let x = e.clientX;
      let y = e.clientY;

      const style = window.getComputedStyle($outer);
      const { currX, currY } = getTranslate(style);

      let nextX = currX;
      let nextY = currY;
      let nextHeight: number | null = null;
      let nextWidth: number | null = null;

      requestAnimationFrame(() => {
        if (maxX === null || maxY === null) {
          return;
        }

        if (direction?.includes('n')) {
          if (e.clientY > maxY) {
            y = maxY;
          }
          if (e.clientY < 0) {
            y = 0;
          }
          nextY = y;
          nextHeight = maxY + MIN_HEIGHT - e.clientY;
          if (nextHeight < MIN_HEIGHT) {
            nextHeight = MIN_HEIGHT;
          }
          if (e.clientY < 0) {
            nextHeight = maxY + MIN_HEIGHT;
          }
        }

        if (direction?.includes('s')) {
          nextHeight = e.clientY - currY;
          if (nextHeight < MIN_HEIGHT) {
            nextHeight = MIN_HEIGHT;
          }
          if (e.clientY > window.innerHeight) {
            nextHeight = window.innerHeight - currY;
          }
        }

        if (direction?.includes('e')) {
          nextWidth = e.clientX - currX;
          if (nextWidth < MIN_WIDTH) {
            nextWidth = MIN_WIDTH;
          }
          if (e.clientX > window.innerWidth) {
            nextWidth = window.innerWidth - currX;
          }
        }

        if (direction?.includes('w')) {
          if (e.clientX > maxX) {
            x = maxX;
          }
          if (e.clientX < 0) {
            x = 0;
          }
          nextX = x;

          nextWidth = maxX + MIN_WIDTH - e.clientX;
          if (nextWidth < MIN_WIDTH) {
            nextWidth = MIN_WIDTH;
          }
          if (e.clientX < 0) {
            nextWidth = maxX + MIN_WIDTH;
          }
        }

        $outer.style.width = css`
          ${nextWidth}px
        `;
        $outer.style.height = css`
          ${nextHeight}px
        `;
        $outer.style.transform = css`translate(${nextX}px, ${nextY}px)`;
      });
    };

    const handleResizingEnd = () => {
      if (!isResizing) {
        return;
      }
      maxX = null;
      maxY = null;
      isResizing = false;
      direction = null;
      document.body.style.cursor = 'default';
    };

    $inner.addEventListener('mouseleave', handleEdgeEnter);
    $outer.addEventListener('mousemove', handleEdgeMousemove);
    $outer.addEventListener('mouseenter', handleEdgeEnter);

    $outer.addEventListener('mouseleave', handleEdgeLeave);
    $inner.addEventListener('mouseenter', handleEdgeLeave);

    $outer.addEventListener('mousedown', handleResizingStart);
    document.addEventListener('mousemove', handleResizing);
    document.addEventListener('mouseup', handleResizingEnd);

    return () => {
      $inner.removeEventListener('mouseleave', handleEdgeEnter);
      $outer.removeEventListener('mousemove', handleEdgeMousemove);
      $outer.removeEventListener('mouseenter', handleEdgeEnter);

      $outer.removeEventListener('mouseleave', handleEdgeLeave);
      $inner.removeEventListener('mouseenter', handleEdgeLeave);

      $outer.removeEventListener('mousedown', handleResizingStart);
      document.removeEventListener('mousemove', handleResizing);
      document.removeEventListener('mouseup', handleResizingEnd);
    };
  }, []);
};

export default useResize;
