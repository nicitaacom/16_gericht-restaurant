import { Button } from "../../../components";

export function FindUs () {
return (
  <div className="py-16 relative">
    <img className="bg-png" src="/bg.webp" alt="bg.webp" />
     <div className="section-container flex justify-around">
        <div className="flex flex-col max-w-[50%] justify-center items-start">
          <h6 className="preTitle leading-[1.6rem]">Contact</h6>
          <svg className='spoon-svg'>
            <use xlinkHref='./sprite.svg#spoon'/>
          </svg>
          <h1 className="title mb-12 inline-block">Find Us</h1>
          <p className="subTitle mb-6">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
          <div className="flex flex-col gap-y-3 mb-12">
            <h2 className="title-small">Opening hours</h2>
            <p>Mon - Fri:10:00 am - 02:00 am</p>
            <p>St - Sun:10:00 am - 03:00 am</p>
          </div>
          <Button label='Visit Us' onClick={() => {/* Open modal book table */}}/>
      </div>
      <img className="max-w-[50%]" src="/findus.png" alt="findus.png"/>
    </div>
  </div>
)
}