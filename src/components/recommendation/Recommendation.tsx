import { useContext } from "react";
import RecommendationCard from "./RecommendationCard";
import { DataContext } from "../../config/DataContext";

export default function Recommendation() {
  
    const dataContext = useContext(DataContext)
    const accommodationArr = dataContext.places.filter(item => item.navbarChild === 'Accommodation')
    const restaurantArr = dataContext.places.filter(item => item.navbarChild === 'Cuisine')
    const tourismSpotArr = [
        ...dataContext.places.filter(item => item.navbarChild === 'Culture'),
        ...dataContext.places.filter(item => item.navbarChild === 'Landmark')
      ];

    return <>
    <div className="flex justify-center p-8">
        <div className="flex flex-col gap-4 mb-8 px-12">
            <p className="text-brown text-3xl font-bold max-mobile:text-lg">
                RECOMMENDATION ↓ ↓
            </p>
            <RecommendationCard recommendation={accommodationArr} />
            <RecommendationCard recommendation={restaurantArr} />
            <RecommendationCard recommendation={tourismSpotArr} />


        </div>

    </div>
        

    </>
  }