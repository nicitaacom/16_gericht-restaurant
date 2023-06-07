import { Button, InputNewsletter } from "../../../components";

export function Newsletter () {
return (
  <div className="relative pt-24">
    <img className="bg-png !top-20" src="/bg.webp" alt="bg.webp" />
<div className="section-container w-3/5 flex flex-col items-center
    border-solid border-[1px] border-[#DCCA87]
    px-16 py-8">
        <h6>Newsletter</h6>
        <svg className='spoon-svg'>
            <use xlinkHref='./sprite.svg#spoon'/>
          </svg>
          <h1 className="title">Subscribe To Our Newsletter</h1>
          <p className="mb-8">And never miss latest Updates!</p>
          <div className="flex gap-x-4 w-full justify-center">
            <InputNewsletter placeholder='Email adress'/>
            <Button label="Subscribe" onClick={() => {/* BACKEND - subscribe to newsletter */}}/>
          </div>          
    </div>
  </div>
    )
}