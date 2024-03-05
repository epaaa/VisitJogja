import { OuterPopUpInterface } from "../../config/Interface";
import useKeyPressed from "../../hooks/useKeyPressed";
import FormatDescription from "./FormatDescription";

export default function OuterPopUp(prop:OuterPopUpInterface) {
    
    const escapePressed = useKeyPressed('Escape')
    if(escapePressed) prop.handlePopUp()

    return (
    <>
        <div>
            <div onClick={prop.handlePopUp} className="flex z-40 fixed inset-0 bg-brown bg-opacity-50"></div>
            <div className="flex">            
                <div className="flex shrink-0 bg-cream m-5 z-50 fixed inset-0 rounded-lg shadow-lg overflow-hidden">
                    
                    <button onClick={prop.handlePopUp} className="bg-cream w-8 h-8 rounded-full cursor-pointer hover:opacity-80 absolute top-4 right-4 text-brown">
                        <i className="fa-solid fa-xmark fa-xl"></i>
                    </button>

                    <div className="flex flex-col w-full gap-5">
                        <div className="w-full h-1/3  bg-brown">
                            <img src={prop.data.image} alt={prop.data.profile} className="w-full object-cover object-center h-full"/>
                        </div>
                        
                        <div className="flex flex-col gap-5 flex-1 h-2/3 w-full p-5 overflow-auto scrollbar text-brown text-left">
                            <h1 className="text-2xl font-bold">{prop.data.name}</h1>
    
                            {
                                prop.data.address === '' ? null : 
                                <div className="flex items-center justify-start gap-4">
                                    <i className="fa-solid fa-location-dot"></i>
                                    <div className="truncate">{prop.data.address}</div>
                                </div>
                            }

                            {
                                prop.data.price === 0 ? null :
                                <div className="flex items-center justify-start gap-4">
                                    <i className="fa-solid fa-sack-dollar"></i>
                                    <div className="">IDR {prop.data.price}</div>
                                </div>
                            }
    
                            <div className="text-sm text-justify">
                                <FormatDescription desc={prop.data.description}/>
                            </div>    
                        </div>     
                        
                    </div>
                </div>

            </div>
        </div>

    </>
  )
}
