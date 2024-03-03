import PlaceCard from './PlaceCard';

export default function PlacesToGo() {
  const landmarks = "../../../../public/places_to_go/landmarks.png"
  const cuisine = "../../../../public/places_to_go/cuisine.png"
  const accommodation = '../../../../public/places_to_go/accomodation.png';
  const nature = '../../../../public/places_to_go/nature.jpg';
  const culture = '../../../../public/places_to_go/cultures.jpg';
  const placesPics = [landmarks, culture, cuisine, accommodation, nature];
  const placesNames = ["LANDMARKS", "CULTURE", "CUISINE", "NATURE", "DWELLINGS"];

  return (
    <>
      <div className="flex gap-2 justify-center pt-56 relative">
        <div className="m-8 text-4xl font-bold mt-6 text-brown max-tablet:px-5 max-mobile:px-2">PLACES TO DISCOVER</div>
        
        <i className="fa-solid fa-arrow-right text-3xl mt-7 text-brown"></i>
      </div>
      
      <div className="flex flex-col gap-4 justify-center">
        <div className="flex justify-center gap-4 mt-8 max-mobile:flex-wrap">

          <PlaceCard placeName={placesNames[0]} placePic={placesPics[0]}/>
          <PlaceCard placeName={placesNames[1]} placePic={placesPics[1]}/>
          
        </div>
        <div className="flex justify-center gap-4 max-mobile:flex-wrap ">
          
          <PlaceCard placeName={placesNames[2]} placePic={cuisine}/>
          <PlaceCard placeName={placesNames[3]} placePic={placesPics[4]}/>
          <PlaceCard placeName={placesNames[4]} placePic={placesPics[3]}/>

        </div>
      </div>
      
    </>
  )
}
