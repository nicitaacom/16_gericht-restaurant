import { Main,About, TodaySpecial, WhatWeBelieveIn, Video } from "./sections";

export function HomePage () {
return (
<div className="flex flex-col gap-y-16 mb-32">
<Main/>
<About/>
<TodaySpecial className="mb-32"/>
<WhatWeBelieveIn/>
<Video/>
</div>
  )
}