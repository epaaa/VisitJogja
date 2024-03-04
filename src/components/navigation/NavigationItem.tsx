import { useState } from "react"
import NavigationPopUp from "./NavigationPopUp"
import NavigationPopUpMobile from "./NavigationPopUpMobile"
import { NavigationItemInterface } from "../../config/Interface"
import NavigationTemplateItemMobile from "./template/NavigationTemplateItemMobile"
import { Link } from "react-router-dom"

export default function NavigationItem(prop:NavigationItemInterface) {
  
  const navigationDic:{[key:string]:string[]} = {
    'Places to Go' :['Accommodation','Culture','Cuisine','Landmark','Nature'],
    'Things to Do' :['Outdoor','Indoor'],
    'Budget Calculator' :[],
  }
  
  const [popUpOption,setPopUpOption] = useState<boolean>(false)
  const [popUpOptionMobile,setPopUpOptionMobile] = useState<boolean>(false)
  
  function handlePopUp() {
    setPopUpOption(!popUpOption)
  }
  
  function handlePopUpMobile() {
    setPopUpOptionMobile(!popUpOptionMobile)
  }

  // NAVIGATION FOR MOBILE
  if(prop.responsivePopUp) {
    return (
      <>
        <div onClick={handlePopUpMobile}>
          {
            navigationDic[prop.text!].length === 0 ? 
            <Link to='/budget'>
              <NavigationTemplateItemMobile text={prop.text}/>
            </Link>
            :
            <NavigationTemplateItemMobile text={prop.text}/>
          }
        </div>
        {
          !popUpOptionMobile || navigationDic[prop.text!].length === 0 ? null :
          <NavigationPopUpMobile option={navigationDic[prop.text!]}/>
        }
      </>
    )
  }
  
  // NAVIGATION FOR DESKTOP
  return (
    <div onMouseEnter={handlePopUp} onMouseLeave={handlePopUp} className="h-20 p-5 flex items-center justify-between cursor-pointer text-lg font-medium hover:font-bold">
      {
        navigationDic[prop.text!].length === 0 ? 
        <Link to='/budget'>{prop.text}</Link>
        :
        <div className="">{prop.text}</div>
      }
      {
        !popUpOption || navigationDic[prop.text!].length === 0 ? null :
        <NavigationPopUp option={navigationDic[prop.text!]}/>
      }
    </div>
  )
}
