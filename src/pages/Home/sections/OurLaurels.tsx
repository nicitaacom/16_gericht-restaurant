import { laurels } from "../../../constant";

export function OutLaurels () {
return (
<div className="relative overflow-hidden py-32 bg-[url('/bg.webp')] bg-cover">
 <img className="absolute top-4 left-8 z-10 max-w-[7.5%]" src="/smth1.png" alt="smth1.png" />
  <div className="section-container flex justify-between items-center
  Tablet:justify-center Tablet:text-center">
    <div className="flex flex-col max-w-[50%] 
    Tablet:max-w-full Tablet:items-center">
      <h6 className="preTitle">Awards & Recognition</h6>
      <svg className='spoon-svg'>
      <use xlinkHref='./sprite.svg#spoon'/>
      </svg>
      <h1 className="title mb-12 inline-block">Our Laurels</h1>
      <div className="grid grid-cols-2 gap-y-8 LaptopL:grid-cols-1">
        {laurels.map(laurel => (
          <div className="flex items-center gap-x-8
          Tablet:justify-center Tablet:items-center" key={laurel.title}>
          <img className="w-1/5 object-cover Tablet:w-1/6 MobileL:w-1/4" src={laurel.imgSrc} alt="award01"/>
          <div className="flex flex-col justify-center h-full w-1/2">
            <h1 className="title-small font-bold whitespace-nowrap">{laurel.title}</h1>
            <p className="subTitle">{laurel.subTitle}</p>
          </div>
        </div>
        ))}
      </div>
    </div>
      <div className="max-w-[40%] Tablet:hidden">
        <img src="/laurels.png" alt="laurels.png" />
      </div>
  </div>
</div>
)
}