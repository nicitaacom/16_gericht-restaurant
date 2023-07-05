export function AboutPage() {



  return (
    <div className='min-h-[80vh] flex justify-center items-center'>
      <div className="mt-32 flex flex-col justify-center items-center">
        <h1 className="preTitle">This information is dublicate of information in my portfolio</h1>
        <div className="subTitle flex flex-col gap-2"><span className="preTitle">I'm Frontend web developer</span>
          <span className="flex flex-row gap-2 items-center">
            <img className="w-6 h-6" src="/7.svg" />- You become any site on your taste<br /></span>
          <span className="flex flex-row gap-2 items-center">
            <img className="w-6 h-6" src="/conversion.png" />- You become site with high conversion rate<br /></span>
          <span className="flex flex-row gap-2">
            <img className="w-6 h-6 mt-1" src="/quality.png" />- I'm the best choise quality/price because <br />
            &nbsp;  I'm study ca. 12h per day (In the feature I increase price)<br /></span>
        </div>
      </div>
    </div>
  )
}