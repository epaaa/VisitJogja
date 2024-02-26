import { Link } from "react-router-dom";

export default function App() {
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