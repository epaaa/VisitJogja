import RecommendationCarousel from "./RecommendationCarousel";

export default function RecommendationCard({ title }: { title: string }) {
    
    return <>
    <div className=" flex flex-col">
                <p className="text-brown text-xl font-semibold max-mobile:text-sm">
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
                        <RecommendationCarousel/>
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