
export default function HomePage() {

  return (
    <>
      <div className="w-fit h-[1300px] max-mobile:h-[450px] bg-yellow">
        <div className="relative h-[1300px]">

          {/* gunung */}
          <div className="absolute top-[150px] ml-[200px] z-10 right-14">
            <img 
              src="../../../public/home/gunung.png" 
              className='w-[1200px] h-[450px] rounded-lg max-mobile:w-[300px] max-mobile:h-[150px]'></img>
          </div>

          <img 
              src="../../../public/home/frame.png" 
              className='w-[1400px] h-[1300px] rounded-lg z-100 max-mobile:w-[500px] max-mobile:h-[450px]'></img>  

          {/* pantai */}
          <div className="absolute top-[510px] z-20 left-[180px]">
            <img 
                src="../../../public/home/pantai.png" 
                className='w-[480px] h-[285px] rounded-lg max-mobile:w-[300px] max-mobile:h-[150px]'></img>
          </div>

          <div className="absolute top-[550px] z-20 left-[480px]">
            <img 
                src="../../../public/home/malioboro.png" 
                className='w-[480px] h-[285px] rounded-lg max-mobile:w-[300px] max-mobile:h-[150px]'></img>
          </div>

        </div>
      </div>
    </>
  )
}
