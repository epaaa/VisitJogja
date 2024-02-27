import landmarks from '../../../assets/places_to_go/landmarks.png';
import cuisine from '../../../assets/places_to_go/cuisine.png';
import culture from '../../../assets/places_to_go/cultures.jpg';
import accommodation from '../../../assets/places_to_go/accomodation.png';
import nature from '../../../assets/places_to_go/nature.jpg';
import PlaceCard from './PlaceCard';

export default function PlacesToGo() {

  const placesPics = [landmarks, culture, cuisine, accommodation, nature];
  const placesNames = ["LANDMARKS", "CULTURE", "NATURE", "CUISINE", "DWELLINGS"];

  return (
    <>
      <div className="flex gap-4 justify-center">
        <div className="text-4xl font-bold w-fit mt-6 max-tablet:px-5">PLACES TO DISCOVER</div>
        <i className="fa-solid fa-arrow-right text-3xl mt-7 ml-3"></i>
      </div>

      <div className="flex flex-col gap-4 justify-center">
        <div className="flex justify-center gap-4 mt-24 max-mobile:flex-wrap">

          <PlaceCard placeName={placesNames[0]} placePic={placesPics[0]}/>
          <PlaceCard placeName={placesNames[1]} placePic={placesPics[1]}/>
          
        </div>
        <div className="flex justify-center gap-4 max-mobile:flex-wrap">
          
          <PlaceCard placeName={placesNames[2]} placePic={placesPics[2]}/>
          <PlaceCard placeName={placesNames[3]} placePic={placesPics[3]}/>
          <PlaceCard placeName={placesNames[4]} placePic={placesPics[4]}/>

        </div>
      </div>
      
    </>
  )
}
