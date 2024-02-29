import { NavigationPopUpInterface } from "../../config/Interface";
import NavigationTemplateItem from "./template/NavigationTemplateItem";

export default function NavigationPopUpMobile(prop:NavigationPopUpInterface) {
  
  console.log(prop.option)
  
  return (
    <div className="pl-10 mb-4 grid gap-2">
      {
        prop.option.map((item,i) => (
          <NavigationTemplateItem text={item} key={i}/>
        ))
      }
    </div>
  )
}