import PlacesToGo from '../../components/PlacesToGo/PlacesToGo'
import ThingsToDo from '../../components/ThingsToDo/ThingsToDo'
import HomePage from '../../components/Home/HomePage'
import Navigation from '../../components/navigation/Navigation'

export default function Michael() {
  return (
    <div className="h-[5200px] bg-cream">
      <Navigation/>
      <HomePage/>
      <PlacesToGo/>
      <ThingsToDo/>
    </div>
  )
}