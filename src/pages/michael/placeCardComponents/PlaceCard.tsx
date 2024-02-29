interface Places {
  placeName: string;
  placePic:  string;
} 

export default function PlaceCard({ placePic, placeName } : Places) {
  return (
    <a href="">
      <div className="flex flex-col p-3 m-1 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
        <img src={placePic} className='w-[250px] h-[250px] rounded-lg hover:shadow-lg max-tablet:w-[200px] max-tablet:h-[200px]'></img>
        <div className="text-center text-brown font-bold m-auto mt-1">{placeName}</div>
      </div>
    </a>
  )
}
