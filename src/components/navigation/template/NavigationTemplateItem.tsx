import { NavigationTemplateItemInterface } from "../../../../config/Interface";

export default function NavigationTemplateItem(prop:NavigationTemplateItemInterface) {
  return (
    <div className="flex items-center justify-between cursor-pointer text-lg font-medium hover:font-bold">
        <div className="">{prop.text}</div>
        <div className="fa-solid fa-arrow-right"></div>
    </div>
  )
}
