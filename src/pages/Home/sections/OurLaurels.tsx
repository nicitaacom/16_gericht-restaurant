import { laurels } from "../../../constant";

export function OutLaurels () {
return (
<div className="relative overflow-hidden py-32">
 <img className="absolute top-4 left-8 z-10 max-w-[7.5%]" src="/smth1.png" alt="smth1.png" />
 <img className="bg-png" src="/bg.webp" alt="bg.png" />
  <div className="section-container flex justify-around">
    <div className="flex flex-col max-w-[50%]">
      <h6 className="preTitle leading-[1.6rem]">Awards & Recognition</h6>
      <svg className='spoon-svg'>
      <use xlinkHref='./sprite.svg#spoon'/>
      </svg>
      <h1 className="title mb-12 inline-block">Our Laurels</h1>
      <div className="grid grid-cols-2 gap-y-8">
        {laurels.map(laurel => (
          <div className="flex items-center gap-x-8" key={laurel.title}>
          <img className="w-1/5 object-cover" src={laurel.imgSrc} alt="award01"/>
          <div className="flex flex-col justify-center h-full w-1/2">
            <h1 className="title-small font-bold whitespace-nowrap">{laurel.title}</h1>
            <p className="subTitle">{laurel.subTitle}</p>
          </div>
        </div>
        ))}
      </div>
    </div>
      <img className="max-w-[40%]" src="/laurels.png" alt="laurels.png" />
  </div>
</div>
)
}