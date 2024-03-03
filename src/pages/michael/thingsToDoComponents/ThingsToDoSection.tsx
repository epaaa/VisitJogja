import { useEffect, useState } from "react";
import { ThingsToDoSectionImages, ThingsToDoSectionInterface } from "../../../config/Interface";
import { Link } from "react-router-dom"
import "firebase/storage";
import { storage } from "../../../config/Firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";

export default function ThingsToDoSection({activityType, activityDesc, isOutdoor} : ThingsToDoSectionInterface) {

  const [images, setImages] = useState<ThingsToDoSectionImages[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const imagesRef = ref(storage, "thingsToDo/Indoor/Carousel");
        const imageList = await listAll(imagesRef);
        const imageUrls: ThingsToDoSectionImages[] = [];

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

  return (
    <div className="flex gap-1 justify-center pt-4 pr-12 pl-16 m-2 max-mobile:flex-col max-mobile:justify-center">
      <div className="flex-col p-4 basis-1/2 max-mobile:text-center">
        <div className="flex-col gap-0">
          <div className="text-3xl font-bold text-brown mt-2">{activityType}</div>
          <div className="text-3xl font-bold text-brown mt-2">ACTIVITIES</div>
        </div>
        <p className="text-brown">{activityDesc}</p>

        
        <Link to="/" className="flex max-mobile:justify-center">
          <div className="bg-white rounded-full w-32 h-12 mt-2 border-2 p-3 border-brown hover:bg-brown text-brown hover:text-yellow">
            <div className="flex gap-3 items-center justify-between">
              <div className="text-center font-semibold">See all</div>
              <i className="fa-solid fa-arrow-right text-1xl"></i>
            </div>
          </div>
        </Link>
      </div>
      {
        isOutdoor ? (
          <div className="w-[250px] h-[250px] max-mobile:w-full max-mobile:h-full carousel rounded-box">
            {
              images.map((image, index) => (
                
                <div key={index} className="carousel-item w-full h-full">
                  <img src={image.url} alt={image.name} className="w-full h-full object-cover object-center" />
                </div> 

              ))
            }
          </div>
        ) : (
          <div className="w-[250px] h-[250px] max-mobile:w-full max-mobile:h-full carousel rounded-box">
            <div className="carousel-item w-full">
              <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
            </div> 
            <div className="carousel-item w-full">
              <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
            </div> 
            <div className="carousel-item w-full">
              <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
            </div> 
            <div className="carousel-item w-full">
              <img src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
            </div> 
            <div className="carousel-item w-full">
              <img src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
            </div> 
            <div className="carousel-item w-full">
              <img src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
            </div> 
            <div className="carousel-item w-full">
              <img src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
            </div>
          </div>
        )
      }
    </div>
  )
}
