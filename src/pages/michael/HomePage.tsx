
export default function HomePage() {

  return (
    <>
      <div className="w-fit h-[1000px] max-tablet:h-[600px] max-mobile:h-[400px] bg-yellow">
        <div className="relative h-[1300px]">

          {/* gunung */}
          <div className="absolute top-52 left-52 z-0 max-mobile:left-10">
            <img 
              src="../../../public/home/gunung.png" 
              className='w-[900px] h-[450px] rounded-lg max-mobile:w-[350px] max-mobile:h-[150px] max-tablet:w-[550px] max-tablet:h-[250px]'></img>
          </div>
          
          <div className="w-screen z-10">
            <img 
              src="../../../public/home/frame.png" 
              className='w-[1400px] h-[1400px] rounded-lg max-tablet:w-[800px] max-tablet:h-[800px] max-mobile:w-[600px] max-mobile:h-[600px]'></img>  
          </div>

          {/* pantai */}
          {/* <div className="absolute top-[510px] z-20 left-[180px]">
            <img 
                src="../../../public/home/pantai.png" 
                className='w-[480px] h-[285px] rounded-lg max-mobile:w-[300px] max-mobile:h-[150px]'></img>
          </div>

          <div className="absolute top-[550px] z-20 left-[480px]">
            <img 
                src="../../../public/home/malioboro.png" 
                className='w-[480px] h-[285px] rounded-lg max-mobile:w-[300px] max-mobile:h-[150px]'></img>
          </div> */}

        </div>
      </div>
    </>
  )
}
