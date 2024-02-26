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
    <div className={`select-none bg-yellow px-14 ${responsivePopUp ? 'h-screen' : ''}`}>
      <div className="flex justify-between items-center">
        <div className="h-20 flex items-center">
          <div className="cursor-pointer text-2xl font-semibold hover:font-bold">JOGJAﾟIN</div>
        </div>
        <div onClick={toggleResponsivePopUp} className="max-tablet:block hidden">
          { !responsivePopUp ? <i className="fa-solid fa-bars"></i> : <i className="fa-solid fa-x"></i> }
        </div>
        <NavigationChild responsivePopUp={responsivePopUp} className="max-tablet:hidden flex gap-2" />
      </div>
      { !responsivePopUp ? null : <NavigationChild responsivePopUp={responsivePopUp} className="mt-10 grid gap-2" /> }
    </div>
  )
}
