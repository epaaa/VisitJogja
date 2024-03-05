import { useContext } from "react"
import { DataContext } from "../../config/DataContext"

export default function FooterHome() {

    const dataContext = useContext(DataContext)

    return <>
        <div className="flex flex-col bottom-0">
            <div className="flex justify-center">
                <img
                    src={dataContext.imageDic['tunas1.png']} 
                    alt="footer image"
                    className="w-8"
                />
            </div>
            
            <img
                src={dataContext.imageDic['pattern_diamond.png']} 
                alt="footer image"
                className="w-full object-cover object-center h-20"
            />
        </div>
    </>
  }