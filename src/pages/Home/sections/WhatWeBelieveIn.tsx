export function WhatWeBelieveIn () {
return (
<div className="relative overflow-hidden py-64 bg-[url('./pages/bg-secondary.avif')] bg-cover
4K:py-48
LaptopL:py-32
Tablet:py-16">
  <div className="section-container flex items-center gap-x-48 
  4K:gap-x-32
  LaptopL:gap-x-16
  Tablet:gap-x-0">
    <div className="max-w-[50vw]">
      <img className='object-cover Tablet:hidden' src='/pages/home/chef.avif'/>
    </div>
    <div className="main-text ml-4 mt-4">
      <h6 className="preTitle leading-[1.6rem] mb-8">Chef's Word</h6>
      <svg className='spoon-svg mb-1'>
      <use xlinkHref='./pages/home/sprite.svg#spoon'/>
      </svg>
      <h1 className="title mb-12 inline-block">What We Believe In</h1>
      <div className="relative">
      <img className="max-w-[5%] inline-block float-left mr-4 LaptopL:mr-2" src="./pages/home/quote.png" alt="quotes.png"/>
      <p className="subTitle mb-6 italic">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae harum quo, atque dolore esse nobis temporibus perferendis et, suscipit deleniti distinctio consequatur magnam nisi molestias doloremque earum quaerat dolor expedita tempore, hic ipsum possimus! Incidunt voluptatum error non praesentium eaque expedita vel cumque illum culpa ipsam, veritatis eius assumenda quia?
      </p>
      </div>
      <div className="mb-8">
      <h2 className="title mb-2">Kevin Luo</h2>
      <h3 className="subTitle">Chef & Founder</h3>
      </div>
      <img className="max-w-[30%]" src="./pages/home/sign.png" alt="sign.png" />

  </div>
  </div>
</div>
)
}