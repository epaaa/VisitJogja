import { useContext } from "react"
import { DataContext } from "../../config/DataContext"

export default function FooterBudgetin() {

    const dataContext = useContext(DataContext)
    
    return <>
        <div className="flex flex-col">
            
            <img
                src={dataContext.imageDic['pattern_floral.png']} 
                alt="footer image"
                className="w-full object-cover object-center h-20"
            />
        </div>
    </>
  }