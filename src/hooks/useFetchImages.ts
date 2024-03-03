import { useEffect, useState } from "react"
import getImageURL from "./getImageURL"
import { Dictionary } from "../config/Interface"
import { ImagePath } from "../config/ImagePath"

export default function useFetchImages() {
    
    const [imageDic, setImageDic] = useState<Dictionary<string>>({})
    const [loadingImage, setLoading] = useState<boolean>(false)
    
    const [refresh, setRefresh] = useState<boolean>(false)
    function handleRefresh(){
        setRefresh(!refresh)
    }

    useEffect(() => {
        setLoading(true)
        
        async function fetchAllImage() {

            let imageContDic : Dictionary<string> = {}

            for(const key in ImagePath) {
                if(ImagePath.hasOwnProperty(key)) {
                    const val = ImagePath[key]
                    const imageUrl = await getImageURL(val)
                    imageContDic[key] = imageUrl
                }
            }

            setImageDic(imageContDic)
        }

        fetchAllImage().then(() => setLoading(false))
    },[refresh])

    return {imageDic, loadingImage, handleRefresh}
}
