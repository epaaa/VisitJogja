import { useState } from "react"
import { DataInterface } from "../../config/Interface"

export default function ListCardItem(prop:DataInterface) {
  
  const [isLike, setIsLike] = useState<Boolean>(false)

  function handleLike(){
    setIsLike(!isLike)
  }

  return (
    <div className="max-w-96 h-[500px] shadow-xl rounded-xl overflow-hidden">

      <img src={prop.image} alt={prop.profile} className="w-full h-40 object-cover object-center"/>
    
      <div className="h-[68%] flex flex-col justify-between p-5">
        <div className="grid gap-3">
          <div className="font-bold text-lg">{prop.name}</div>

          <div className="max-w-full flex items-center justify-start gap-4 truncate">
            <i className="fa-solid fa-note-sticky"></i>
            <div className="truncate">{prop.description}</div>
          </div>

          {
            prop.address === '' ? null : 
            <div className="flex items-center justify-start gap-4 truncate">
              <i className="fa-solid fa-location-dot"></i>
              <div className="truncate">{prop.address}</div>
            </div>
          }

          {
            prop.price === 0 ? null :
            <div className="flex items-center justify-start gap-4">
              <i className="fa-solid fa-sack-dollar"></i>
              <div className="">IDR {prop.price}</div>
            </div>
          }
        </div>

        <div className="grid gap-5">
          <div className="w-full h-[2px] bg-brown"></div>
          <div className="flex items-center justify-between">
            <div className="text-xl hover:bg-opacity-40 hover:bg-yellow flex justify-center items-center cursor-pointer w-10 h-10 bg-cream shadow-lg rounded-full" onClick={handleLike}>
              {
                !isLike ? 
                <i className="fa-regular fa-heart"></i>
                :
                <i className="fa-solid fa-heart"></i>
              }
            </div>

            <div className="flex items-center gap-3 justify-end font-semibold cursor-pointer hover:bg-opacity-40 hover:bg-yellow p-2 rounded-md">
              <div className="">See more</div>
              <i className="fa-regular fa-circle-right text-3xl"></i>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
