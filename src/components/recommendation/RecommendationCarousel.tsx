import { DataInterface } from "../../config/Interface";
import RecommendationCarouselCard from "./RecommendationCarouselCard";

export default function RecommendationCard({recommendation}: {recommendation: DataInterface[]}) {
 
    return <>
        <div className="carousel carousel-center max-w-xl p-4 space-x-4">
        {recommendation.map(item => (
            <RecommendationCarouselCard recommendation={item}/>
        ))}

            
        </div>

    </>
  }