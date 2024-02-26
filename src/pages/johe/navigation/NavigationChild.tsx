import { NavigationChildInterface } from "../../../config/Interface"
import NavigationItem from "./NavigationItem"

export default function NavigationChild(prop:NavigationChildInterface){
  return (
    <div className={prop.className}>
      <NavigationItem responsivePopUp={prop.responsivePopUp} text="Places to Go"/>
      <NavigationItem responsivePopUp={prop.responsivePopUp} text="Things to Do"/>
      <NavigationItem responsivePopUp={prop.responsivePopUp} text="Budget Calculator"/>
    </div>
  )
}