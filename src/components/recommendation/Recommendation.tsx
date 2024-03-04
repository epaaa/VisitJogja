import RecommendationCard from "./RecommendationCard";

export default function Recommendation() {
  
    return <>
    <div className="flex justify-center p-8">
        <div className="flex flex-col gap-4 mb-8 px-12">
            <p className="text-brown text-3xl font-bold max-mobile:text-lg">
                RECOMMENDATION ↓ ↓
            </p>
            
            <RecommendationCard title={"Accomodation"}/>
            <RecommendationCard title={"Restaurants"}/>
            <RecommendationCard title={"Tourism Spots"}/>

        </div>

    </div>
        

    </>
  }