import BudgetinCard from "./BudgetinCard";
import "firebase/storage";
import { storage } from "../../config/Firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { BudgetinCardImages } from "../../config/Interface";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function JogjaBudgetin() {
    const [images, setImages] = useState<BudgetinCardImages[]>([]);
    const text = "Unlock budget-friendly travel with our Jogja Budget’In! Enter your budget, and discover a tailored list of hotels, restaurants, and vacation spots. Enjoy memorable getaways without breaking the bank. Your affordable adventure begins here!";

    useEffect(() => {
        const fetchImages = async () => {
          try {
            const imagesRef = ref(storage, "assets/budgetin");
            const imageList = await listAll(imagesRef);
            const imageUrls: BudgetinCardImages[] = [];
    
            await Promise.all(
              imageList.items.map(
                async (itemRef) => {
                  const url = await getDownloadURL(itemRef);
                  const name = itemRef.name;
                  imageUrls.push({url, name});
                }
              )
            );
    
            setImages(imageUrls)
          } catch (error) {
            console.error("ERROR FETCHING IMAGES: ", error);
          }
        };
    
        fetchImages();
      }, [])
      
    return <>
        <div className="flex justify-center mt-8 p-8">
            <div className="flex flex-col items-center gap-6">
                <div className="flex w-full justify-start">
                    <h1 className="text-5xl font-bold text-brown px-8 max-mobile:text-3xl">JOGJA BUDGET'IN</h1>
                </div>                
                <div className="border-t-2 border-brown flex w-full px-2"></div>
                <div className="justify-center flex gap-4 max-tablet:flex-wrap-reverse max-tablet:px-14 ">
                    <div className="flex flex-col gap-4 ">
                        <div className="flex gap-2 w-64 max-tablet:w-full">
                            <p className="text-sm text-brown max-mobile:text-xs">
                                {text}
                            </p>

                        </div>
                        <div className="flex ">
                            <Link to='/budget' className="py-2 px-4 rounded-full outline outline-1 outline-brown ">
                                <div className="text-brown font-bold text-sm max-mobile:text-xs">
                                    Try now →
                                </div>
                                
                            </Link>
                        </div>

                    </div>
                    <div className="flex gap-4 ">
                        {
                        images.map((image, index) => (
                            
                            <div key={index} className="">
                                <BudgetinCard pic={image.url} title={image.name.slice(0, -4)} />
                            </div> 

                        ))
                        }
                    </div>
                </div>
            </div>         
        </div>
        

    </>
  }