import { useState } from "react"
import { NavigationItemInterface } from "../../../config/Interface"
import NavigationPopUp from "./NavigationPopUp"

export default function NavigationItem(prop:NavigationItemInterface) {
  
  const navigationDic:{[key:string]:string[]} = {
    'Places to Go' :['Accomodation','Culture','Cuisine','Landmark','Nature'],
    'Things to Do' :['Outdoor','Indoor'],
    'Budget Calculator' :[],
  }
  
  const [popUpOption,setPopUpOption] = useState<boolean>(false)

  if(prop.responsivePopUp) {
    return (
      <div className="flex items-center justify-between cursor-pointer text-lg font-medium hover:font-bold">
        <div className="">{prop.text}</div>
        <div className="fa-solid fa-arrow-right"></div>
      </div>
    )
  }

  function handlePopUp() {
    setPopUpOption(!popUpOption)
  }

  return (
    <div onMouseEnter={handlePopUp} onMouseLeave={handlePopUp} className="h-20 p-5 flex items-center justify-between cursor-pointer text-lg font-medium hover:font-bold">
      <div className="">{prop.text}</div>
      {
        !popUpOption || navigationDic[prop.text!].length === 0 ? null :
          <NavigationPopUp option={navigationDic[prop.text!]}/>
      }
    </div>
  )
}
