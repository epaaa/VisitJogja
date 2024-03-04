import { useContext } from "react";
import { DataContext } from "../../config/DataContext";

export default function ListPageBackdrop() {
  const dataContext = useContext(DataContext);
  
  return (
    <div>
      <div className="w-fit h-[1100px] max-tablet:h-[700px] max-mobile:h-[350px] bg-yellow mb-32">
        <div className="relative w-screen">
          {/* gunung */}
            <div className="absolute top-52 right-0 z-0 max-mobile:top-28">
              {
                
              }
            </div>

            <img src={dataContext.imageDic['frame.png']} 
              className='w-full h-[1400px] relative z-50 rounded-lg max-mobile:w-auto max-mobile:h-auto max-tablet:w-auto max-tablet:h-auto'/>
          
            

            

            

            

            
        </div>
      </div>
    </div>
  )
}
