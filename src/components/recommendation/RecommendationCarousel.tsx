import { DataInterface } from "../../config/Interface";
import RecommendationCarouselCard from "./RecommendationCarouselCard";

export default function RecommendationCard({recommendation}: {recommendation: DataInterface[]}) {
 
    return <>
        <div className="carousel carousel-center max-w-3xl p-4 space-x-4">
            {recommendation.map((item, key) => (
                <RecommendationCarouselCard key={key} recommendation={item}/>
            ))}
        </div>

    </>
  }