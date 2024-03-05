import { useContext } from "react";
import { DataContext } from "../../config/DataContext";
import { useParams } from "react-router-dom";
import { DescriptionDic } from "../../config/DescriptionDic";

export default function ListPageBackdrop() {
  const dataContext = useContext(DataContext);
  const {navChild} = useParams();

  
  return (
    <div className="flex flex-col">
      <div className="relative bg-yellow">
        {/* frame without shadow  */}
        <img src={dataContext.imageDic['frame_without_shadow.png']} className="relative w-full z-10" alt="" />

        {/* title area */}
        <div className="absolute text-5xl max-mobile:text-3xl max-tablet:text-4xl font-bold top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-20">{DescriptionDic[navChild!].title}</div>

        {/* matahari */}
        <div className="absolute w-[700px] drop-shadow-glow h-[700px] top-36 right-20 max-tablet:w-[350px] max-tablet:h-[350px] max-mobile:w-[270px] max-mobile:h-[270px]  bg-white max-mobile:top-0 max-mobile:right-0 rounded-full z-0"></div>

        {/* hotel */}
        {/* <img src={dataContext.imageDic['pohon_besar.png']} className="absolute top-[600px] right-0 w-[450px] h-[350px]" alt="" />
        <img src={dataContext.imageDic['pohon_besar.png']} className="absolute top-[650px] left-0 w-[450px] h-[350px]" alt="" />
        <img src={dataContext.imageDic['becak.png']} className="absolute top-[700px] left-72 w-[450px] h-[350px] max-mobile:top-[250px] max-mobile:left-24 max-mobile:w-[200px] max-mobile:h-[100px]" alt="" />
        <img src={dataContext.imageDic['kursi.png']} className="absolute top-[880px] right-52 w-[200px] h-[100px]" alt="" /> */}
      </div>
      <img src={dataContext.imageDic['shadow.png']} alt="" />
    </div>
  )
}
