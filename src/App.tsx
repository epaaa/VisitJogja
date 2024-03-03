import { Link, RouterProvider, createBrowserRouter } from "react-router-dom"
import Eva from "./pages/eva/Eva"
import Michael from "./pages/michael/Michael"
import { DataContext } from "./config/DataContext"
import ListPage from "./pages/list/ListPage"
import useGetData from "./hooks/useGetData"
import Loading from "./components/loading/Loading"
import Navigation from "./components/navigation/Navigation"
import { useState } from "react"
import useFetchImages from "./hooks/useFetchImages"

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultPage/>,
  },
  {
    path: '/eva',
    element: <Eva/>,
  },
  {
    path: '/michael',
    element: <Michael/>,
  },
  {
    path: '/list/:nav/:navChild',
    element: <ListPage/>
  }
])

export default function App() {

  // fetch data
  const { places, things, loading } = useGetData()

  // fetch image
  const { imageDic, loadingImage } = useFetchImages()

  // for responsive
  const [responsivePopUp, setResponsivePopUp] = useState(false)

  function toggleResponsivePopUp() {
    setResponsivePopUp(!responsivePopUp)
    if (!responsivePopUp) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }

  const val = {
    places,
    things,
    responsivePopUp, 
    setResponsivePopUp,
    toggleResponsivePopUp,
    imageDic
  }

  if(loading || loadingImage) return <Loading/>
  
  return (
    <DataContext.Provider value={val}>
      <RouterProvider router={router} />
    </DataContext.Provider>
  ) 
}

function DefaultPage(){
  return (
    <>
      <Navigation/>
      <h1 className="text-3xl font-bold underline">
        Hello world!
        <div className="grid">
          <br/>
          <Link className="text-yellow" to='/eva'>eva</Link>
          <Link className="text-green" to='/list/placesToGo/Culture'>testing accommodation</Link>
          <Link className="text-brown" to='/michael'>michael</Link>
        </div>
      </h1>
    </>
  )
}