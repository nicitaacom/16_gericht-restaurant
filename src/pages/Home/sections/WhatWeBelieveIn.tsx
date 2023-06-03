export function WhatWeBelieveIn () {
return (
<div>
  <img className="bg-png" src="/bg.png" alt="bg.png" />
  <div className="section-container flex gap-x-16">
    <div className="max-w-[50vw]">
      <img className='object-cover' src='./chef.png'/>
    </div>
    <div className="main-text ml-4 mt-4">
      <h6 className="preTitle leading-[1.6rem]">Chef's Word</h6>
      <svg className='spoon-svg mb-1'>
      <use xlinkHref='./sprite.svg#spoon'/>
      </svg>
      <h1 className="title mb-12 inline-block">What We Believe In</h1>
      <div className="relative">
      <img className="max-w-[7.5%] absolute top-[-20px] inline-block float-left mr-2" src="/public/quote.png" alt="quotes.png"/>
      <p className="subTitle max-w-[80%] mb-6 italic">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae harum quo, atque dolore esse nobis temporibus perferendis et, suscipit deleniti distinctio consequatur magnam nisi molestias doloremque earum quaerat dolor expedita tempore, hic ipsum possimus! Incidunt voluptatum error non praesentium eaque expedita vel cumque illum culpa ipsam, veritatis eius assumenda quia?
      </p>
      </div>
      <div className="mb-8">
      <h2 className="title !text-3xl !font-normal mb-2">Kevin Luo</h2>
      <h3 className="subTitle">Chef & Founder</h3>
      </div>
      <img className="max-w-[30%]" src="/public/sign.png" alt="sign.png" />

  </div>
  </div>
</div>
)
}