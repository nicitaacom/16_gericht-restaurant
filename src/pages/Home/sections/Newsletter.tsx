import { Button, InputNewsletter } from "../../../components";

export function Newsletter () {
return (
  <div className="relative pt-24">
<div className="section-container w-3/5 flex flex-col items-center
    border-solid border-[1px] border-[#DCCA87]
    px-16 py-8
    Tablet:px-4 Tablet:py-4 Tablet:text-center">
        <h6 className="preTitle">Newsletter</h6>
        <svg className='spoon-svg'>
            <use xlinkHref='./pages/home/sprite.svg#spoon'/>
          </svg>
          <h1 className="title">Subscribe To Our Newsletter</h1>
          <p className="mb-16 text-5xl
            4K:text-3xl 4K:mb-8
            LaptopL:text-2xl LaptopL:mb-4
            Laptop:text-lg">And never miss latest Updates!</p>
          <div className="flex gap-x-4 w-full justify-center
          Tablet:flex-col Tablet:gap-y-4">
            <InputNewsletter placeholder='Email adress'/>
            <Button label="Subscribe" onClick={() => {/* BACKEND - subscribe to newsletter */}}/>
          </div>          
    </div>
  </div>
    )
}