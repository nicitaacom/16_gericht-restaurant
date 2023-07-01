/*
To use this hook paste code below where you want use slider into parameters
e.g <div className='flex overflow-hidden' onMouseDown={onMouseTouchDown} ...></div>
        onMouseDown={onMouseTouchDown}
        onTouchStart={onMouseTouchDown}
        onMouseMove={move}
        onTouchMove={move}
*/

import { useEffect, useState } from "react";

export function useSlider() {
  const [isDown, setDown] = useState(false);
  const [startX, setX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  function onMouseTouchDown(e: React.SyntheticEvent<HTMLDivElement>) {
    e.preventDefault();
    setDown(true);

    // @ts-ignore
    if (e.changedTouches) {
      // @ts-ignore
      setX(e.changedTouches[0].pageX - e.currentTarget.offsetLeft);
    } else {
      // @ts-ignore
      setX(e.pageX - e.currentTarget.offsetLeft);
    }

    setScrollLeft(e.currentTarget.scrollLeft);
  }

  function move(
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) {
    if (!isDown) return;
    let x: number;
    // @ts-ignore
    if (e.changedTouches) {
      // @ts-ignore
      x = e.changedTouches[0].pageX - e.currentTarget.offsetLeft;
    } else {
      // @ts-ignore
      x = e.pageX - e.currentTarget.offsetLeft;
    }

    const speed = 1;
    const walk = (x - startX) * speed;
    e.currentTarget.scrollLeft = scrollLeft - walk;
  }

  useEffect(() => {
    function handleUp() {
      setDown(false);
    }
    window.addEventListener("mouseup", handleUp);
    window.addEventListener("dragend", handleUp);
    return () => {
      window.removeEventListener("mouseup", handleUp);
      window.removeEventListener("dragend", handleUp);
    };
  }, []);
  return { onMouseTouchDown, move };
}
