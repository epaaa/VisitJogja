import { useContext } from "react";
import { DataContext } from "../../config/DataContext";


export default function BudgetinBackdrop() {

  const dataContext = useContext(DataContext);

  return (
    <div className="flex flex-col">
      <div className="relative bg-yellow">
        {/* frame without shadow  */}
        <img src={dataContext.imageDic['frame_without_shadow.png']} className="relative w-full z-10" alt="" />

        {/* title area */}
        <div className="absolute text-5xl max-mobile:text-3xl max-tablet:text-4xl font-bold top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-20">Plan your trip's budget with Jogja Budget'in</div>

        {/* matahari */}
        <div className="absolute w-[700px] drop-shadow-glow h-[700px] top-36 right-20 max-tablet:w-[350px] max-tablet:h-[350px] max-mobile:w-[270px] max-mobile:h-[270px]  bg-white max-mobile:top-0 max-mobile:right-0 rounded-full z-0"></div>

        {/* hotel */}
        
      
      </div>
      <img src={dataContext.imageDic['shadow.png']} alt="" />
    </div>
  )   
}
