import { useState } from "react"
import { DataInterface } from "../../config/Interface"
import OuterPopUp from "../popUp/OuterPopUp"

export default function ListCardItem(prop:DataInterface) {
  
  const [popUp, setPopUp] = useState<Boolean>(false)

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
        !popUp ? null :
        <OuterPopUp data={prop} handlePopUp={handlePopUp}/>
      }
      <div className="max-w-96 shadow-xl rounded-xl overflow-hidden">
        <img src={prop.image} alt={prop.profile} className="w-full h-40 object-cover object-center"/>
      
        <div className="h-[68%] flex flex-col justify-between p-5 gap-10">
          <div className="grid gap-3">
            <div className="font-bold text-lg truncate">{prop.name}</div>

            <div className="max-w-full flex items-center justify-start gap-4 truncate">
              <i className="fa-solid fa-note-sticky"></i>
              <div className="truncate">{prop.description}</div>
            </div>

          </div>

          <div className="grid gap-5">
            <div className="w-full h-[2px] bg-brown"></div>
            <div className="flex items-center justify-between">
              <div className=""></div>
              <div onClick={handlePopUp} className="flex items-center gap-3 justify-end font-semibold cursor-pointer hover:bg-opacity-40 hover:bg-yellow p-2 rounded-md">
                <div className="">See more</div>
                <i className="fa-regular fa-circle-right text-3xl"></i>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
