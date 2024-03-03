
export default function HomePage() {

  return (
    <>
      <div className="w-fit h-[1100px] max-tablet:h-[600px] max-mobile:h-[350px] bg-yellow">

          <div className="relative w-screen">
            {/* gunung */}
            <img src="../../../public/home/frame.png" 
              className='w-full h-[1400px] relative z-50 rounded-lg max-mobile:w-auto max-mobile:h-auto max-tablet:w-auto max-tablet:h-auto'/>
            
            <div className="absolute top-52 right-0 z-0">
              <img src="../../../public/home/gunung.png" 
                className='w-[900px] h-[450px] rounded-lg max-mobile:w-[300px] max-mobile:h-[150px] max-tablet:w-[600px] max-tablet:h-[300px]'/>
            </div>

            <div className="absolute top-[35rem] right-10 z-10">
              <img src="../../../public/home/malioboro.png"   
                  className='w-[680px] h-[405px] rounded-lg max-mobile:w-[225px] max-mobile:h-[132px] max-tablet:w-[450px] max-tablet:h-[225px]'></img>
            </div>

            <div className="absolute bottom-[480px] left-36">
              <img src="../../../public/home/pantai.png" 
                  className='w-[700px] h-[405px] rounded-lg max-mobile:w-auto max-mobile:h-auto max-tablet:w-auto max-tablet:h-auto'></img>
            </div>

            <div className="absolute bottom-[500px] left-4 z-20">
              <img src="../../../public/home/keraton.png" 
                  className='w-[700px] h-[405px] rounded-lg max-mobile:w-auto max-mobile:h-auto max-tablet:w-auto max-tablet:h-auto'></img>
            </div>

            <div className="absolute bottom-[500px] left-[520px] z-20">
              <img src="../../../public/home/tugu.png" 
                  className='w-[200px] h-[405px] rounded-lg max-mobile:w-auto max-mobile:h-auto max-tablet:w-auto max-tablet:h-auto'></img>
            </div>

            <div className="absolute bottom-[500px] left-[120px] z-20">
              <img src="../../../public/home/pohon_kecil.png" 
                  className='w-[170px] h-[355px] rounded-lg max-mobile:w-auto max-mobile:h-auto max-tablet:w-auto max-tablet:h-auto'></img>
            </div>
          </div>

          
      </div>
    </>
  )
}
