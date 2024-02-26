import landmarks from '../../assets/places_to_go/landmarks.png';
import cuisine from '../../assets/places_to_go/cuisine.png';
import culture from '../../assets/places_to_go/cultures.jpg';
import accommodation from '../../assets/places_to_go/accomodation.png';
import nature from '../../assets/places_to_go/nature.jpg';

export default function PlacesToGo() {
  return (
    <>
      <div className="flex gap-4 justify-center">
        <div className="text-4xl font-bold w-fit mt-6 max-tablet:px-5">PLACES TO DISCOVER</div>
        <i className="fa-solid fa-arrow-right text-3xl mt-7 ml-3"></i>
      </div>

      <div className="flex flex-col gap-4 justify-center">
        <div className="flex justify-center gap-4 mt-24 max-mobile:flex-wrap">
          <div className="flex flex-col">
            <img src={landmarks} className='w-[250px] h-[250px]'></img>
            <div className="text-center font-bold m-auto">LANDMARKS</div>
          </div>
          <div className="flex flex-col">
            <img src={culture} className='w-[250px] h-[250px]'></img>
            <div className="text-center font-bold m-auto">CULTURE</div>
          </div>
        </div>
        <div className="flex justify-center gap-4 max-mobile:flex-wrap">
          <div className="flex flex-col">
            <img src={nature} className='w-[250px] h-[250px]'></img>
            <div className="text-center font-bold m-auto">NATURE</div>
          </div>
          <div className="flex flex-col">
            <img src={cuisine} className='w-[250px] h-[250px]'></img>
            <div className="text-center font-bold  m-auto">CUISINE</div>
          </div>
          <div className="flex flex-col">
            <img src={accommodation} className='w-[250px] h-[250px]'></img>
            <div className="text-center font-bold m-auto">DWELLINGS</div>
          </div>
        </div>
      </div>
      
    </>
  )
}
