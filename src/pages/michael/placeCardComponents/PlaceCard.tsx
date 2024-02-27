interface Places {
  placeName: string;
  placePic:  string;
} 

export default function PlaceCard({ placePic, placeName } : Places) {
  return (
    <div className="flex flex-col p-3 m-1 rounded-lg">
      <img src={placePic} className='w-[250px] h-[250px] rounded-lg'></img>
      <div className="text-center text-brown font-bold m-auto mt-1">{placeName}</div>
    </div>
  )
}
