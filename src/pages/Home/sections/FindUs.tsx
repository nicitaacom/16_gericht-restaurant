import { Button } from "../../../components";

export function FindUs () {
return (
  <div className="py-16 relative bg-[url('/bg.webp')] bg-cover">
     <div className="section-container flex justify-around
     Tablet:gap-x-4">
        <div className="flex flex-col max-w-[50%] justify-center items-start
        Tablet:items-center Tablet:text-center Tablet:max-w-full">
          <h6 className="preTitle leading-[1.6rem]">Contact</h6>
          <svg className='spoon-svg'>
            <use xlinkHref='./sprite.svg#spoon'/>
          </svg>
          <h1 className="title mb-12 inline-block">Find Us</h1>
          <p className="subTitle mb-6">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
          <div className="flex flex-col gap-y-3 mb-12">
            <h2 className="title-small">Opening hours</h2>
            <p className="text-5xl
            4K:text-3xl
            LaptopL:text-2xl
            Laptop:text-lg">Mon - Fri:10:00 am - 02:00 am</p>
            <p className="text-5xl
            4K:text-3xl
            LaptopL:text-2xl
            Laptop:text-lg">St - Sun:10:00 am - 03:00 am</p>
          </div>
          <Button label='Visit Us' onClick={() => {/* Open modal book table */}}/>
      </div>
      <img className="max-w-[50%] Tablet:hidden" src="/findus.png" alt="findus.png"/>
    </div>
  </div>
)
}