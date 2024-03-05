import { useContext } from 'react'
import { DataContext } from '../../config/DataContext';

export default function HomeBackdrop() {

  const dataContext = useContext(DataContext);
  
  return (
    <div>
      <div className="w-fit h-[1100px] max-tablet:h-[700px] max-mobile:h-[350px] bg-yellow mb-32">
        <div className="relative w-screen">

            {/* matahari */}
            <div className="absolute drop-shadow-glow w-[700px] h-[700px] top-32 right-20 max-mobile:w-[270px] max-mobile:h-[270px]  bg-white max-mobile:top-0 max-mobile:right-0 rounded-full z-0"></div>
          {/* gunung */}
            <div className="absolute top-52 right-0 z-0 max-mobile:top-28">
              <img src={dataContext.imageDic['gunung.png']} 
                className='w-[900px] h-[450px] rounded-lg max-mobile:w-[300px] max-mobile:h-[150px] max-tablet:w-[500px] max-tablet:h-[250px]'/>
            </div>

            <img src={dataContext.imageDic['frame.png']} 
              className='w-full h-[1400px] relative z-50 rounded-lg max-mobile:w-auto max-mobile:h-auto max-tablet:w-auto max-tablet:h-auto'/>
          
            <div className="absolute top-[35rem] right-10 z-10 max-tablet:top-[420px] max-mobile:top-[240px]">
              <img src={dataContext.imageDic['malioboro.png']}   
                  className='w-[680px] h-[405px] rounded-lg max-mobile:w-[225px] max-mobile:h-[132px] max-tablet:w-[450px] max-tablet:h-[225px]'></img>
            </div>

            <div className="absolute bottom-[480px] left-36 max-tablet:left-[80px] max-tablet:bottom-[330px] max-mobile:left-[40px] max-mobile:bottom-[180px]">
              <img src={dataContext.imageDic['pantai.png']} 
                  className='w-[700px] h-[405px] rounded-lg max-mobile:w-[240px] max-mobile:h-[150px] max-tablet:w-[450px] max-tablet:h-[265px]'></img>
            </div>

            <div className="absolute bottom-[500px] left-4 z-20 max-tablet:bottom-[350px] max-mobile:bottom-48">
              <img src={dataContext.imageDic['keraton.png']} 
                  className='w-[700px] h-[405px] rounded-lg max-mobile:w-[240px] max-mobile:h-[140px] max-tablet:w-[400px] max-tablet:h-[250px]'></img>
            </div>

            <div className="absolute bottom-[500px] left-[520px] z-20 max-tablet:bottom-[350px] max-tablet:left-[350px] max-mobile:left-36 max-mobile:bottom-[190px]">
              <img src={dataContext.imageDic['tugu.png']} 
                  className='w-[200px] h-[405px] rounded-lg max-mobile:w-[60px] max-mobile:h-[150px] max-tablet:w-[100px] max-tablet:h-[200px]'></img>
            </div>

            <div className="absolute bottom-[500px] left-[120px] z-20 max-tablet:left-[90px] max-tablet:bottom-[350px] max-mobile:bottom-[200px] max-mobile:left-10">
              <img src={dataContext.imageDic['pohon_kecil.png']} 
                  className='w-[170px] h-[355px] rounded-lg max-mobile:w-[50px] max-mobile:h-[120px] max-tablet:w-[100px] max-tablet:h-[200px]'></img>
            </div>
        </div>
      </div>
    </div>
  )
}
