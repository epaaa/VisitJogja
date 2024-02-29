import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import Johe from "./pages/johe/Johe";
import Eva from "./pages/eva/Eva";
import Michael from "./pages/michael/Michael";

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
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  ) 
}

function DefaultPage(){
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
      <div className="grid">
        <br/>
        <Link className="text-yellow" to='/eva'>eva</Link>
        <Link className="text-green" to='/johe'>johe</Link>
        <Link className="text-brown" to='/michael'>michael</Link>
      </div>
    </h1>
  )
}