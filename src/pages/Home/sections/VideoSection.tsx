import { Video } from '../../../components'

export function VideoSection () {
return (
<div className="flex flex-col justify-center h-[75h]">
  <Video previewSrc='/public/video-preview.jpeg'
  videoSrc='/meal.mp4'/>
</div>
)
}