import { useContext } from "react"
import NavigationChild from "./NavigationChild"
import { Link } from "react-router-dom"
import { DataContext } from "../../config/DataContext"

export default function Navigation() {

  const dataContext = useContext(DataContext)

  return (
    <div className={`relative select-none z-20 bg-yellow px-14 ${dataContext.responsivePopUp ? 'h-screen' : ''}`}>
      <div className="flex justify-between items-center">
        <div className="h-20 flex items-center">
          <Link to='/' className="cursor-pointer text-2xl font-semibold hover:font-bold">JOGJAﾟIN</Link>
        </div>
        <div onClick={dataContext.toggleResponsivePopUp} className="max-tablet:block hidden">
          { !dataContext.responsivePopUp ? <i className="fa-solid fa-bars"></i> : <i className="fa-solid fa-x"></i> }
        </div>
        <NavigationChild responsivePopUp={dataContext.responsivePopUp} className="max-tablet:hidden flex gap-2" />
      </div>

      { !dataContext.responsivePopUp ? null : <NavigationChild responsivePopUp={dataContext.responsivePopUp} className="mt-10 grid gap-2" /> }
      
    </div>
  )
}
