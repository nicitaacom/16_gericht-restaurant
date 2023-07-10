/*
To use this hook paste code below where you want use slider into parameters
e.g <div onMouseDown={onMouseTouchDown} ...></div>
        onMouseDown={onMouseTouchDown}
        onTouchStart={onMouseTouchDown}
        onMouseMove={move}
        onTouchMove={move}
*/

import { useEffect, useState, useRef } from "react"

export function useSlider() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [isDown, setDown] = useState(false)
  const [startX, setX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  useEffect(() => {
    if (wrapperRef.current) {
      const width = wrapperRef.current.scrollWidth
      const diff = width - document.body.clientWidth

      if (diff < 0) return
      wrapperRef.current.scrollLeft = diff / 2
    }
  }, [])

  function handleMouseDown(e: React.MouseEvent<HTMLDivElement>) {
    setDown(true)
    setX(e.pageX - e.currentTarget.offsetLeft)
    setScrollLeft(e.currentTarget.scrollLeft)
  }
  function handleTouchDown(e: React.TouchEvent<HTMLDivElement>) {
    setDown(true)
    setX(e.changedTouches[0].pageX - e.currentTarget.offsetLeft)
    setScrollLeft(e.currentTarget.scrollLeft)
  }

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!isDown) return
    const x = e.pageX - e.currentTarget.offsetLeft
    const speed = 1
    const walk = (x - startX) * speed
    e.currentTarget.scrollLeft = scrollLeft - walk
  }
  function handleTouchMove(e: React.TouchEvent<HTMLDivElement>) {
    if (!isDown) return
    const x = e.changedTouches[0].pageX - e.currentTarget.offsetLeft
    const speed = 1
    const walk = (x - startX) * speed
    e.currentTarget.scrollLeft = scrollLeft - walk
  }

  useEffect(() => {
    function handleUp() {
      setDown(false)
    }
    window.addEventListener("mouseup", handleUp)
    window.addEventListener("dragend", handleUp)
    return () => {
      window.removeEventListener("mouseup", handleUp)
      window.removeEventListener("dragend", handleUp)
    }
  }, [])
  return {
    handleMouseMove,
    handleTouchMove,
    handleMouseDown,
    handleTouchDown,
    wrapperRef
  }
}
