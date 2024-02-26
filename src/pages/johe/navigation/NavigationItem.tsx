import NavigationPopUp from "./NavigationPopUp"

export interface NavigationItemInterface{
    text:string,
    responsivePopUp:boolean
}

export default function NavigationItem(prop:NavigationItemInterface) {
  if(prop.responsivePopUp) {
    return (
      <div className="flex items-center justify-between cursor-pointer text-lg font-medium hover:font-bold">
        <div className="">{prop.text}</div>
        <div className="fa-solid fa-arrow-right"></div>
      </div>
    )
  }
  
  return (
    <div className="flex items-center justify-between cursor-pointer text-lg font-medium hover:font-bold">
      <div className="">{prop.text}</div>
      <NavigationPopUp/>
    </div>
  )
}
