import { useEffect, useState } from "react"
import { FaPlay, FaPause, FaStepBackward, FaStepForward } from "react-icons/fa"
import { BiFullscreen, BiExitFullscreen } from 'react-icons/bi'

interface VideoOverlayProps {
  previewSrc: string
  isLoading: boolean
  isPlaying: boolean
  video: HTMLVideoElement | null
  videoWrapper: HTMLDivElement | null
  currentTime: string
  videoDuration: string
  playPauseVideo: () => void
  jumpTime: number
  setJumpTime: React.Dispatch<React.SetStateAction<number>>
}

const VideoOverlay: React.FC<VideoOverlayProps> = ({
  isLoading,
  isPlaying,
  video,
  videoWrapper,
  currentTime,
  videoDuration,
  playPauseVideo,
  jumpTime,
  setJumpTime,
  previewSrc,
}) => {

  const [isFullScreen, setIsFullscreen] = useState(false)
  useEffect(() => {
    document.addEventListener("fullscreenchange", () => {
      if (document.fullscreenElement) {
        setIsFullscreen(true)
      } else {
        setIsFullscreen(false)
      }
    })
  }, [])

  if (video) {
    const JUMP_FACTOR = 4


    const handleJumpForward = () => {
      setJumpTime((prevJumpTime: number) => prevJumpTime + JUMP_FACTOR)
      const newTime = video.currentTime + JUMP_FACTOR
      video.currentTime = Math.floor(newTime)
    }

    const handleBackward = () => {
      setJumpTime((prevJumpTime: number) => prevJumpTime - JUMP_FACTOR)
      const newTime = video.currentTime - JUMP_FACTOR
      video.currentTime = Math.floor(newTime)
    }






    const toggleFullScreen = () => {
      if (document.fullscreenElement) {
        document.exitFullscreen()
      } else {
        videoWrapper?.requestFullscreen()
      }
    }

    return (
      <>
        <div className={`absolute w-full bottom-0 flex flex-col justify-end`}>
          {/* Controls Container */}
          <div>
            {/* Progress bar container */}
            <div className={`progress-bar-container h-1 w-[98%] mx-auto`}>
              {/* Progress bar inner */}
              <div
                className={`${`progress h-full w-0`} ${video?.ended ? "" : "progress-inner"}`}
                style={{
                  animationPlayState:
                    isPlaying && !isLoading ? "running" : "paused",
                  animationDuration: video?.ended
                    ? "0s"
                    : `${Math.ceil(video.duration - jumpTime)}s`,
                }}
              />
            </div>
            {/* Video actions */}
            <div className={`w-[95%] mx-auto flex justify-between items-center py-3 font-[12px]`}>
              <div className='flex justify-between gap-x-4'>

                {/* Play/pause */}
                <div className='flex justify-center items-center'>
                  <button onClick={playPauseVideo}>
                    {isPlaying ? <FaPause /> : <FaPlay />}
                  </button>
                </div>
                {/* +10s/-10s */}
                <div className='flex justify-center items-center'>
                  <button
                    className='disabled:opacity-70'
                    disabled={!isPlaying}
                    onClick={handleBackward}>
                    <FaStepBackward />
                  </button>
                  <button
                    className='disabled:opacity-70'
                    disabled={!isPlaying}
                    onClick={handleJumpForward}>
                    <FaStepForward />
                  </button>
                </div>
                <div className='flex justify-center items-center'>
                  <span>
                    {currentTime}/{videoDuration}
                  </span>
                </div>


              </div>

              <button onClick={toggleFullScreen}>
                {isFullScreen ? <BiExitFullscreen size={24} /> : <BiFullscreen size={24} />}
              </button>
            </div>
          </div>
        </div>
        {/* Video without actions bar */}
        <div className={`${isPlaying
          ? "after:opacity-0 	 before:opacity-0 		after:scale-90 	before:scale-90"
          : "after:opacity-100 before:opacity-100 	after:scale-100	before:scale-100"} 
				${isLoading ? '' : 'video-wrapper'}
				after:translate-x-[-20%] after:translate-y-[-110%]
				before:translate-x-[-50%] before:translate-y-[-75%]
				absolute top-0 right-0 bottom-[10%] left-0`} onClick={playPauseVideo} />
        {/* Preview */}
        <div className={`preview bg-[url('${previewSrc}')] bg-no-repeat bg-cover
				absolute inset-0 z-[1]`} onClick={() => {
            playPauseVideo()
          }}>
        </div>
      </>
    )
  }
  else {
    return (
      <div>Video is null</div>
    )
  }
}

export default VideoOverlay