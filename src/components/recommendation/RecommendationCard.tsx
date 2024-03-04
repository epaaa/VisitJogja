import { DataInterface } from "../../config/Interface";
import RecommendationCarousel from "./RecommendationCarousel";

export default function RecommendationCard({title, recommendation}: {title: String, recommendation: DataInterface[]}) {
    
    return <>
    <div className=" flex flex-col">
                <p className="text-brown text-xl font-normal max-mobile:text-sm text-center">
                    {title}
                </p>
                <div className="flex gap-2 justify-center">
                    <button
                        onClick={()=>{}}
                        className="text-brown"
                    >
                    
                        <i className="fa-solid fa-caret-left fa-2xl"></i>
                    </button>
                    
                    <div className="flex">
                        <RecommendationCarousel recommendation={recommendation} />
                    </div>
                    <button
                        onClick={()=>{}}
                        className="text-brown"
                    >
                        <i className="fa-solid fa-caret-right fa-2xl"></i>
                    </button>

                </div>


            </div>
    
    
    </>
}