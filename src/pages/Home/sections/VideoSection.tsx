import { Video } from '../../../components'

export function VideoSection () {
return (
<div className="flex flex-col justify-center h-[75h]">
  <Video previewSrc='/pages/home/video-preview.avif'
  videoSrc='/pages/home/meal.mp4'/>
</div>
)
}