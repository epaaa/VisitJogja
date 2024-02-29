import { Link } from "react-router-dom"
import { NavigationTemplateItemInterface } from "../../../config/Interface"
import { useEffect, useState } from "react"

export default function NavigationTemplateItem(prop:NavigationTemplateItemInterface) {

  const placesToGo = [
    "Accommodation",
    "Culture",
    "Cuisine",
    "Landmark",
    "Nature"
  ]

  const thingsToDo = [
    "Indoor",
    "Outdoor"
  ]

  const [nav, navChild] = useState<string>('');

  useEffect(() => {
    if (placesToGo.includes(prop.text)) {
      navChild("placesToGo")
    } else if (thingsToDo.includes(prop.text)) {
      navChild("thingsToDo")
    }
  },[])

  return (
    <Link to={`/list/${nav}/${prop.text}`} className="flex items-center justify-between cursor-pointer text-lg font-medium hover:font-bold">
        <div className="">{prop.text}</div>
        <div className="fa-solid fa-arrow-right"></div>
    </Link>
  )
}