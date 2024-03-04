import { useContext } from 'react';
import PlaceCard from './PlaceCard';
import { DataContext } from '../../config/DataContext';

export default function PlacesToGo() {

  const dataContext = useContext(DataContext);
  const placesNames = ["LANDMARKS", "CULTURE", "CUISINE", "NATURE", "DWELLINGS"];

  

  return (
    <>
      <div className="flex gap-2 justify-center pt-32 relative">
        <div className="m-8 text-4xl font-bold mt-6 text-brown max-tablet:px-5 max-mobile:px-2">PLACES TO DISCOVER</div>
        
        <i className="fa-solid fa-arrow-right text-3xl mt-7 text-brown"></i>
      </div>
      
      <div className="flex flex-col gap-4 justify-center">
        <div className="flex justify-center gap-4 mt-8 max-mobile:flex-wrap">

          <PlaceCard placeName={placesNames[0]} placePic={dataContext.imageDic['landmarks.png']} placeURL='/list/placesToGo/Landmarks'/>
          <PlaceCard placeName={placesNames[1]} placePic={dataContext.imageDic['cultures.jpg']} placeURL='/list/placesToGo/Culture'/>
          
        </div>
        <div className="flex justify-center gap-4 max-mobile:flex-wrap ">
          
          <PlaceCard placeName={placesNames[2]} placePic={dataContext.imageDic['cuisine.png']} placeURL='/list/placesToGo/Cuisine'/>
          <PlaceCard placeName={placesNames[3]} placePic={dataContext.imageDic['nature.jpg']} placeURL='/list/placesToGo/Nature'/>
          <PlaceCard placeName={placesNames[4]} placePic={dataContext.imageDic['accomodation.png']} placeURL='/list/placesToGo/Accommodation'/>

        </div>
      </div>
      
    </>
  )
}
