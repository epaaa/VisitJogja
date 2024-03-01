import FormatDescription from "./FormatDescription";
import { useState } from "react"

export default function OuterPopUp() {
    const imageSrc = '../../../../public/epa/hotelMurah.png';
    const title = "Five luxurious places to stay in Yogyakarta";
    const description = "Yogyakarta's vibrant tapestry offers an accommodation option for every traveler's desire. Dive into five unique lodgings, each catering to different styles and budgets:~~1. Grand Zea: Embrace the essentials at this small and simple lodging. Bask in spacious suites, indulge in traditional dining, and savor stunning window views. Price: Starting from Rp 150,000 per night.~~2. Deep Purple Homestay: Immerse yourself in artistic charm at this vibrant homestay. Relax in colorful rooms, enjoy communal spaces, and explore the trendy Prawirotaman area. Price: Starting from Rp 250,000 per night.~~3. Pondok 71: Experience Javanese hospitality at this family-run homestay. Unwind in cozy rooms, savor home-cooked meals, and connect with local culture. Price: Starting from Rp 180,000 per night.~~4. RO Dormitory: Embrace social vibes at this modern hostel. Enjoy comfortable beds, shared spaces, and a convenient Malioboro location. Price: Starting from Rp 100,000 per night.~~5. Homey Home: Discover modern comfort at this budget-friendly guesthouse. Relax in clean rooms, utilize shared facilities, and explore the lively Sosrowijayan area. Price: Starting from Rp 150,000 per night.~~From luxurious pampering to budget-friendly stays with local flair, Yogyakarta's diverse lodgings cater to every taste. Whether seeking personalized attention, artistic inspiration, or a social atmosphere, find your perfect haven and embark on an unforgettable adventure in the heart of Java's cultural gem.";
    const [isPopupVisible, setPopupVisible] = useState(false);

    const onOpen = () => {
      setPopupVisible(true);
    };
    const onClose = () => {
        setPopupVisible(false);
    };
    
    return (
    <>
        <div className="flex items-center justify-center h-screen">
            <button 
            className="text-brown font-bold py-2 px-4 rounded-full bg-yellow"
            onClick={onOpen}
            >
                Click me
            </button>
        </div>
        {isPopupVisible && 
        <div>
            <div className="z-40 fixed inset-0 bg-brown bg-opacity-50"></div>
            <div className="bg-cream m-20 z-50 fixed inset-0 p-8 rounded-lg shadow-lg overflow-hidden">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-brown"
                >
                {/* Replace this with your close SVG icon */}
                <i className="fa-solid fa-xmark fa-2xl"></i>
                </button>

                <div className=''>
                    <div className="flex flex-col h-screen w-full">
                        <img
                        src={imageSrc} // Replace with the actual link to your picture
                        alt="image"
                        className="w-full object-cover object-center h-[300px]"
                        />
                        
                        <div className="p-12 overflow-auto text-brown text-left">
                            <h1 className="text-4xl font-bold mb-4">{title}</h1>
                            <div className="text-justify">
                            <FormatDescription desc={description}/>
                            </div>            
                        </div>     
                        
                    </div>
                </div>
            </div>

        </div>}
        
    </>
  )
}
