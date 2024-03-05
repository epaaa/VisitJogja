import { useState } from 'react'
import { DataInterface } from '../../config/Interface'

export default function RecommendationCarouselCard({recommendation}: {recommendation: DataInterface}) {

    const [hovered, isHovered] = useState<boolean>(false)
    function handleHover() {
        isHovered(!hovered)
    }

    return (
        <>
            <div onMouseEnter={handleHover} onMouseLeave={handleHover} onClick={handleHover} className="relative carousel-item flex flex-col overflow-hidden">
                <img src={recommendation.image} className="relative rounded-box max-mobile:w-40 max-mobile:h-36 w-48 h-44 object-cover z-0" />

                {
                    !hovered ? null : 
                    <div className="rounded-box absolute top-0 left-0 w-full h-full bg-brown opacity-70 z-10 text-white flex justify-center items-center p-5 text-sm text-center">{recommendation.name}</div>
                }
            </div> 
        </>
    )
}
