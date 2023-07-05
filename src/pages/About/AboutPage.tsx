export function AboutPage() {



  return (
    <div className='min-h-[80vh] flex justify-center items-center
    px-32 4K:px-28 LaptopL:px-16'>
      <div className="mt-32 flex flex-col justify-center">
        <h1 className="preTitle mb-4">This information is dublicate of information in my portfolio</h1>
        <div className="subTitle flex flex-col gap-2"><span className="preTitle">I'm Frontend web developer</span>
          <span className="flex flex-row gap-2 items-center">
            <img className="w-16 h-16 4K:w-10 4K:h-10 LaptopL:w-6 LaptopL:h-6" src="/7.svg" />- You become any site on your taste<br /></span>
          <span className="flex flex-row gap-2 items-center">
            <img className="w-16 h-16 4K:w-10 4K:h-10 LaptopL:w-6 LaptopL:h-6" src="/conversion.png" />- You become site with high conversion rate<br /></span>
          <span className="flex flex-row gap-2">
            <img className="w-16 h-16 4K:w-10 4K:h-10 LaptopL:w-6 LaptopL:h-6 mt-1 Tablet:mt-0" src="/quality.png" />- I'm the best choise quality/price because <br />
            &nbsp;  I'm study ca. 12h per day (In the feature I increase price)<br /></span>
        </div>
      </div>
    </div>
  )
}