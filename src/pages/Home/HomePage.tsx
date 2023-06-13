import { Main,About, TodaySpecial, WhatWeBelieveIn, VideoSection, OutLaurels,PhotoGallerey, FindUs, Newsletter} from "./sections";

export function HomePage () {
return (
<div className="flex flex-col mb-32">
<Main/>
<About/>
<TodaySpecial className="mb-32"/>
<WhatWeBelieveIn/>
<VideoSection/>
<OutLaurels/>
<PhotoGallerey/>
<FindUs/>
<Newsletter/>
</div>
  )
}