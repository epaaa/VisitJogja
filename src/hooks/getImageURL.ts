import { getDownloadURL, ref } from "firebase/storage"
import { storage } from "../config/Firebase"

export default async function getImageURL(location:string) {
    const ImageURL = await getDownloadURL(ref(storage, location))
    return await ImageURL
}