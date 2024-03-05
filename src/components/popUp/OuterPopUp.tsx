import { OuterPopUpInterface } from "../../config/Interface";
import FormatDescription from "./FormatDescription";

export default function OuterPopUp(prop:OuterPopUpInterface) {
    
    return (
    <>
        <div>
            <div className="flex z-40 fixed inset-0 bg-brown bg-opacity-50"></div>
            <div className="flex">            
                <div className="flex shrink-0 bg-cream m-5 z-50 fixed inset-0 p-8 rounded-lg shadow-lg overflow-hidden">
                    <button onClick={prop.handlePopUp} className="absolute top-4 right-4 text-brown">
                        <i className="fa-solid fa-xmark fa-xl"></i>
                    </button>

                    <div className="flex flex-col w-full">
                        <div className="h-1/3  bg-brown">
                            <img
                            src={prop.data.image} 
                            alt="image"
                            className="w-full object-cover object-center h-full"
                            />
                        </div>
                        
                        <div className="flex flex-col flex-1 h-2/3 w-full p-5 overflow-auto text-brown text-left ">
                            <h1 className="text-2xl font-bold mb-4">{prop.data.name}</h1>
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
