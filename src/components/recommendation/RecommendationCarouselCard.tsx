import { useState } from 'react'
import { DataInterface } from '../../config/Interface'
import OuterPopUp from '../popUp/OuterPopUp'

export default function RecommendationCarouselCard({recommendation}: {recommendation: DataInterface}) {

    const [hovered, isHovered] = useState<boolean>(false)
    const [popUp, setPopUp] = useState<Boolean>(false)
    
    function handleHover() {
        isHovered(!hovered)
    }

    function handlePopUp() {
        setPopUp(!popUp)
        if (!popUp) {
        document.body.style.overflow = 'hidden'
        } else {
        document.body.style.overflow = 'auto'
        }
    }

    return (
        <>
            {
                !popUp  ? null :
                <OuterPopUp handlePopUp={handlePopUp} data={recommendation} />
            }
            <div onMouseEnter={handleHover} onMouseLeave={handleHover} onClick={handlePopUp} className="cursor-pointer relative carousel-item flex flex-col overflow-hidden">
                <img src={recommendation.image} className="relative rounded-box max-mobile:w-40 max-mobile:h-36 w-48 h-44 object-cover z-0" />

                {
                    !hovered ? null : 
                    <div className="rounded-box absolute top-0 left-0 w-full h-full bg-brown opacity-70 z-10 text-white flex justify-center items-center p-5 text-sm text-center">{recommendation.name}</div>
                }
            </div> 
        </>
    )
}
