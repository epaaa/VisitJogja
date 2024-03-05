import { useContext } from "react";
import { DataContext } from "../../config/DataContext";
import { useParams } from "react-router-dom";
import { DescriptionDic } from "../../config/DescriptionDic";

export default function ListPageBackdrop() {
  const dataContext = useContext(DataContext);
  const {navChild} = useParams();

  
  return (
    <div>
      <div className="relative w-screen">
        {/* gunung */}

          <div className="flex-col">
            <div className="relative w-screen">
              <div className="relative">
                <img src={dataContext.imageDic['frame_without_shadow.png']} 
                  className='bg-yellow w-full shadow-2xl h-[1000px] relative z-50 max-mobile:w-auto max-mobile:h-auto max-tablet:w-auto max-tablet:h-auto'/>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 max-mobile:top-28">
                  <h1 className="font-bold text-brown [font-size:_clamp(16px,5vw,20px)]">{DescriptionDic[navChild!].title}</h1>
                </div>
              </div>
              <img src={dataContext.imageDic['shadow.png']} 
                className='w-full h-[300px] relative z-50 max-mobile:w-auto max-mobile:h-auto max-tablet:w-auto max-tablet:h-auto'/>
            </div>
          </div>

      </div>
    </div>
  )
}
