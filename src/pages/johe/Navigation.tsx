import { useState } from "react"
import NavigationChild from "./NavigationChild"

export default function Navigation() {
  const [responsivePopUp, setResponsivePopUp] = useState(false)

  function toggleResponsivePopUp() {
    setResponsivePopUp(!responsivePopUp)
    if (!responsivePopUp) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }

  return (
    <div className={`absolute top-0 w-screen bg-yellow px-10 py-4 ${responsivePopUp ? 'h-screen' : ''}`}>
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">JOGJAﾟIN</div>
        <div onClick={toggleResponsivePopUp} className="md:hidden block">
          { !responsivePopUp ? <i className="fa-solid fa-bars"></i> : <i className="fa-solid fa-x"></i> }
        </div>
        <NavigationChild className="md:flex hidden gap-10" />
      </div>
      { !responsivePopUp ? null : <NavigationChild className="mt-10 grid gap-2" /> }
    </div>
  )
}
