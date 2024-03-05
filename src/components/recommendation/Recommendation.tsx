import { useContext } from "react";
import RecommendationCard from "./RecommendationCard";
import { BudgetContext } from "../../config/BudgetContext";

export default function Recommendation() {
  
    const budgetContext = useContext(BudgetContext)

    return <>
        <div className="flex justify-center p-5">
            <div className="flex flex-col gap-4 mb-8 px-12">
                <p className="text-brown text-3xl text-center font-bold max-mobile:text-lg">
                    RECOMMENDATION
                </p>
                <RecommendationCard recommendation={budgetContext.accommodationData} title={"Hotels"} />
                <RecommendationCard recommendation={budgetContext.restaurantData} title={"Restaurants"} />
                <RecommendationCard recommendation={budgetContext.tourismData} title={"Tourism Spots"} />

            </div>
        </div>
    </>
  }