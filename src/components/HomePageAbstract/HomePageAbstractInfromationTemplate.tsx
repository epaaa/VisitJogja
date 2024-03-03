import { useContext } from "react";
import { AbstractInfromationTemplateInterface } from "../../config/Interface";
import { DataContext } from "../../config/DataContext";

export default function HomePageAbstractInfromationTemplate(prop:AbstractInfromationTemplateInterface) {

  const dataContext = useContext(DataContext)

  return (
    <div className="z-20 max-w-[800px] items-center flex flex-col gap-5 p-5 mr-56 max-tablet:mr-0">
        <img src={dataContext.imageDic['jogja-header.png']} alt="" className="mb-5 max-w-64 max-mobile:hidden"/>
        <div className="text-5xl font-semibold text-center">{prop.title}</div>
        <div className="w-full h-[2px] bg-brown"></div>
        <div className="text-center text-xl">{prop.description}</div>
      </div>
  )
}
