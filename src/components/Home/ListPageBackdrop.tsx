import { useContext } from "react";
import { DataContext } from "../../config/DataContext";
import { useParams } from "react-router-dom";
import { DescriptionDic } from "../../config/DescriptionDic";

export default function ListPageBackdrop() {
  const dataContext = useContext(DataContext);
  const {navChild} = useParams();

  
  return (
    <div className="flex flex-col">
      <div className="relative">
        {/* frame without shadow  */}
        <img src={dataContext.imageDic['frame_without_shadow.png']} className="bg-yellow w-full" alt="" />

        {/* title area */}
        <div className="absolute text-4xl max-mobile:text-3xl font-bold top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">{DescriptionDic[navChild!].title}</div>

        {/* matahari */}
        <div className="absolute w-[300px] h-[300px] bg-white top-0 left-32 rounded-full"></div>
      </div>
      <img src={dataContext.imageDic['shadow.png']} alt="" />
    </div>
  )
}
