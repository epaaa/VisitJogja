import PlacesToGo from './placeCardComponents/PlacesToGo'
import ThingsToDo from './ThingsToDo'
import HomePage from './HomePage'

export default function Michael() {
  return (
    <div className="h-[5200px] bg-cream">
      <HomePage/>
      <PlacesToGo/>
      <ThingsToDo/>
    </div>
  )
}