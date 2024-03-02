
export default function HomePage() {

  return (
    <>
      <div className="w-fit h-screen max-tablet:h-[600px] max-mobile:h-[400px] bg-yellow">

          <div className="relative w-screen">
            {/* gunung */}
            <img src="../../../public/home/frame.png" 
              className='w-full h-[1400px] relative z-50 rounded-lg max-tablet:w-[800px] max-tablet:h-[800px] max-mobile:w-[600px] max-mobile:h-[600px]'/>
            
            <div className="absolute top-52 right-0 z-0">
              <img src="../../../public/home/gunung.png" 
                className='w-[900px] h-[450px] rounded-lg max-mobile:w-[350px] max-mobile:h-[150px] max-tablet:w-[550px] max-tablet:h-[250px]'/>
            </div>

            <div className="absolute top-[35rem] right-0">
              <img src="../../../public/home/malioboro.png" 
                  className='w-[480px] h-[285px] rounded-lg max-mobile:w-[300px] max-mobile:h-[150px]'></img>
            </div>

            <div className="absolute top-96 left-0">
              <img src="../../../public/home/pantai.png" 
                  className='w-[480px] h-[285px] rounded-lg max-mobile:w-[300px] max-mobile:h-[150px]'></img>
            </div>
          </div>

          {/* pantai */}
      </div>
    </>
  )
}
