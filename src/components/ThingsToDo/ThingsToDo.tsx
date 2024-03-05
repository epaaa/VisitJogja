import ThingsToDoSection from "./ThingsToDoSection"

export default function ThingsToDo() {
  return (
    <>
      <div className="flex gap-5 justify-center mt-8">
        <i className="fa-solid fa-arrow-down text-3xl mt-7 text-brown"></i>
        <div className="text-4xl font-bold mt-6 text-brown max-tablet:px-5 max-mobile:px-2">THINGS TO DO </div>
        <i className="fa-solid fa-arrow-down text-3xl mt-7 text-brown"></i>
      </div>

      <div className="mt-5">
        <ThingsToDoSection activityType="OUTDOOR" activityDesc="Explore the great outdoors and enjoy exciting adventures under the open sky!" isOutdoor={true}/>
        <ThingsToDoSection activityType="INDOOR" activityDesc="Discover indoor attractions and delve into cultural experiences in the comfort of covered spaces!" isOutdoor={false}/>
      </div>
        
    </>
  )
}
