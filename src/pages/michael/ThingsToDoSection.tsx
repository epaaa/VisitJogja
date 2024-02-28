interface Activity {
  activityType: string;
  activityDesc: string;
}

export default function ThingsToDoSection({activityType, activityDesc} : Activity) {
  return (
    <div className="flex flex-row gap-1 justify-center p-12 m-2 flex-wrap max-mobile:flex-col">
      <div className="flex-col p-4 basis-1/2">
        <div className="flex-col gap-0">
          <div className="text-3xl font-bold text-brown mt-2">{activityType}</div>
          <div className="text-3xl font-bold text-brown mt-2">ACTIVITIES</div>
        </div>
        <p className="text-brown">{activityDesc}</p>

        
        <a href="">
          <div className="bg-white rounded-full w-32 h-12 mt-2 border-2 p-3 border-brown hover:bg-brown">
            <div className="flex gap-3">
              <div className="text-center text-brown font-semibold">See all</div>
              <i className="fa-solid fa-arrow-right text-1xl mt-1 text-brown"></i>
            </div>
          </div>
        </a>
      </div>

      <div className="w-[250px] h-[250px] bg-green m-4">Placeholder</div>
    </div>
  )
}
