import { Link, RouterProvider, createBrowserRouter } from "react-router-dom"
import Johe from "./pages/johe/Johe"
import Eva from "./pages/eva/Eva"
import Michael from "./pages/michael/Michael"
import { DataContext } from "./config/DataContext"
import ListPage from "./pages/list/ListPage"
import useGetData from "./hooks/useGetData"
import Loading from "./components/loading/Loading"
import Navigation from "./components/navigation/Navigation"

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultPage/>,
  },
  {
    path: '/johe',
    element: <Johe/>,
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

  const { places, things, loading } = useGetData()

  const val = {
    places,
    things
  }

  if(loading) return <Loading/>
  
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