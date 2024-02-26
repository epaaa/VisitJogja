import { NavigationPopUpInterface } from "../../../config/Interface";
import NavigationItem from "./NavigationItem";

export default function NavigationPopUp(prop:NavigationPopUpInterface) {
  return (
    <div className="absolute grid gap-2 w-screen px-14 py-6 bg-yellow left-0 top-16">
      {
        prop.option.map((item,i) => (
          <NavigationItem text={item} key={i} responsivePopUp/>
        ))
      }
    </div>
  )
}