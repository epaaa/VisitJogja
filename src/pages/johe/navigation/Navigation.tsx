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
    <div className={`select-none bg-yellow px-14 py-6 ${responsivePopUp ? 'h-screen' : ''}`}>
      <div className="flex justify-between items-center">
        <div className="cursor-pointer text-2xl font-semibold hover:font-bold">JOGJAﾟIN</div>
        <div onClick={toggleResponsivePopUp} className="md:hidden block">
          { !responsivePopUp ? <i className="fa-solid fa-bars"></i> : <i className="fa-solid fa-x"></i> }
        </div>
        <NavigationChild responsivePopUp={responsivePopUp} className="md:flex hidden gap-10" />
      </div>
      { !responsivePopUp ? null : <NavigationChild responsivePopUp={responsivePopUp} className="mt-10 grid gap-2" /> }
    </div>
  )
}
