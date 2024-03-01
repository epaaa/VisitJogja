import PlacesToGo from './placeCardComponents/PlacesToGo'
import ThingsToDo from './thingsToDoComponents/ThingsToDo'
import HomePage from './HomePage'
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