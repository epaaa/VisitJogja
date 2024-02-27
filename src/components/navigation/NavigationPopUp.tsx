import { NavigationPopUpInterface } from "../../config/Interface";
import NavigationTemplateItem from "./template/NavigationTemplateItem";

export default function NavigationPopUp(prop:NavigationPopUpInterface) {
  return (
    <div className="absolute grid gap-2 w-screen px-14 py-6 bg-yellow left-0 top-16 z-20">
      {
        prop.option.map((item,i) => (
          <NavigationTemplateItem text={item} key={i}/>
        ))
      }
    </div>
  )
}