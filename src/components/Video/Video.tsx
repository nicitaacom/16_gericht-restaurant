import { useState, useRef } from "react"
import { convertToMinuteSeconds } from "../../utils/formatters"
import VideoOverlay from "./VideoOverlay"

interface VideoProps {
  videoSrc: string
  previewSrc: string
}

export function Video({ videoSrc, previewSrc, ...props }: VideoProps) {

  const [isLoading, setIsLoading] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const [videoDuration, setVideoDuration] = useState("00:00")
  const [currentTime, setCurrentTime] = useState("00:00")
  const [jumpTime, setJumpTime] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)
  const videoWrapperRef = useRef(null)


  const playPauseVideo = () => {
    const currentVideo = videoRef.current

    document.querySelector('.preview')?.classList.add('hidden')

    if (isPlaying && currentVideo) {
      currentVideo.pause()
    } else {
      currentVideo && currentVideo.play()
    }

    setIsPlaying(prevState => !prevState)
  }


  document.body.onkeydown = function (e) {
    if (e.key == " " ||
      e.code == "Space" ||
      e.keyCode == 32
    ) {
      e.preventDefault()
      playPauseVideo()
    }
  }

  const onTimeUpdate = () => {
    setCurrentTime(() => convertToMinuteSeconds(videoRef.current?.currentTime))
  }
  return (
    <div className={`w-full max-w-full mx-auto relative`} ref={videoWrapperRef}>
      {isLoading ?
        <div className='absolute top-[35%] left-[50%] -translate-x-1/2 -translate-y-1/2'>
          {/* You may add custom loading here */}
          <div className="loader" />
        </div> : ""}
      <video className={`w-full pointer-events-none`}
        onCanPlayThrough={() => {
          setVideoDuration(() =>
            convertToMinuteSeconds(videoRef.current?.duration)
          )
          setIsLoading(false)
        }}
        onWaiting={() => setIsLoading(true)}
        preload='metadata'
        onEnded={() => {
          setIsPlaying(false)
          setJumpTime(0)
        }}
        onTimeUpdate={onTimeUpdate}
        {...props}
        ref={videoRef}>
        <source src={videoSrc} type='video/mp4'></source>
      </video>
      <VideoOverlay
        previewSrc={previewSrc}
        isPlaying={isPlaying}
        isLoading={isLoading}
        video={videoRef.current}
        playPauseVideo={playPauseVideo}
        currentTime={currentTime}
        videoWrapper={videoWrapperRef.current}
        videoDuration={videoDuration}
        jumpTime={jumpTime}
        setJumpTime={setJumpTime}
      />
    </div>
  )
}