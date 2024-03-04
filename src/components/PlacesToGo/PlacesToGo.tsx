import PlaceCard from './PlaceCard';

export default function PlacesToGo() {
  const landmarks = "../../../../public/places_to_go/landmarks.png"
  const cuisine = "../../../../public/places_to_go/cuisine.png"
  const accommodation = '../../../../public/places_to_go/accomodation.png';
  const nature = '../../../../public/places_to_go/nature.jpg';
  const culture = '../../../../public/places_to_go/cultures.jpg';
  const placesPics = [landmarks, culture, cuisine, nature, accommodation];
  const placesNames = ["LANDMARKS", "CULTURE", "CUISINE", "NATURE", "DWELLINGS"];

  return (
    <>
      <div className="flex gap-2 justify-center pt-32 relative">
        <div className="m-8 text-4xl font-bold mt-6 text-brown max-tablet:px-5 max-mobile:px-2">PLACES TO DISCOVER</div>
        
        <i className="fa-solid fa-arrow-right text-3xl mt-7 text-brown"></i>
      </div>
      
      <div className="flex flex-col gap-4 justify-center">
        <div className="flex justify-center gap-4 mt-8 max-mobile:flex-wrap">

          <PlaceCard placeName={placesNames[0]} placePic={placesPics[0]} placeURL='/list/placesToGo/Landmarks'/>
          <PlaceCard placeName={placesNames[1]} placePic={placesPics[1]} placeURL='/list/placesToGo/Culture'/>
          
        </div>
        <div className="flex justify-center gap-4 max-mobile:flex-wrap ">
          
          <PlaceCard placeName={placesNames[2]} placePic={cuisine} placeURL='/list/placesToGo/Cuisine'/>
          <PlaceCard placeName={placesNames[3]} placePic={placesPics[3]} placeURL='/list/placesToGo/Nature'/>
          <PlaceCard placeName={placesNames[4]} placePic={placesPics[4]} placeURL='/list/placesToGo/Accommodation'/>

        </div>
      </div>
      
    </>
  )
}
