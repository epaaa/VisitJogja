import FormatDescription from "./FormatDescription";

export default function OuterPopUp() {
    const text = "Yogyakarta's vibrant tapestry offers an accommodation option for every traveler's desire. Dive into five unique lodgings, each catering to different styles and budgets:~~1. Grand Zea: Embrace the essentials at this small and simple lodging. Bask in spacious suites, indulge in traditional dining, and savor stunning window views. Price: Starting from Rp 150,000 per night.~~2. Deep Purple Homestay: Immerse yourself in artistic charm at this vibrant homestay. Relax in colorful rooms, enjoy communal spaces, and explore the trendy Prawirotaman area. Price: Starting from Rp 250,000 per night.~~3. Pondok 71: Experience Javanese hospitality at this family-run homestay. Unwind in cozy rooms, savor home-cooked meals, and connect with local culture. Price: Starting from Rp 180,000 per night.~~4. RO Dormitory: Embrace social vibes at this modern hostel. Enjoy comfortable beds, shared spaces, and a convenient Malioboro location. Price: Starting from Rp 100,000 per night.~~5. Homey Home: Discover modern comfort at this budget-friendly guesthouse. Relax in clean rooms, utilize shared facilities, and explore the lively Sosrowijayan area. Price: Starting from Rp 150,000 per night.~~From luxurious pampering to budget-friendly stays with local flair, Yogyakarta's diverse lodgings cater to every taste. Whether seeking personalized attention, artistic inspiration, or a social atmosphere, find your perfect haven and embark on an unforgettable adventure in the heart of Java's cultural gem.";
  
  return (
    <>
        <div className="z-40 fixed inset-0 bg-brown bg-opacity-50"></div>
        <div className="bg-cream m-5 z-50 fixed inset-0 bg-white p-8 rounded-lg shadow-lg">
            <div className='flex-row'>
                <div className="flex flex-col h-screen w-full overflow-hidden bg-white rounded-lg">
                    <img
                    src='../../../../public/epa/hotelMurah.png'  // Replace with the actual link to your picture
                    alt="Hotel"
                    className="w-full object-cover object-center h-[300px]"
                    />
                    
                    <div className="p-12 overflow-auto bg-fixed text-brown text-left">
                        <h1 className="text-4xl font-bold mb-4">Five luxurious places to stay in Yogyakarta</h1>
                        <div className="text-justify">
                        <FormatDescription desc={text}/>
                        </div>            
                    </div>     
                    
                </div>
            </div>
        </div>
    </>
  )
}
