export default function Hanoman() {
    const hanoman = '../../../../public/budgetin_page/hanoman.jpg';
    const text = "Unlock budget-friendly travel with our JOGJA BUDGET’IN";
  
    return <>
        <div className="flex justify-center gap-10 mt-12 max-mobile:flex-wrap p-5">
            <div className="max-mobile:w-64 max-mobile:h-56 w-96 h-80 flex flex-col justify-center">
                <img src={hanoman} className='object-cover rounded-lg w-full h-full'></img>
            </div>

            <div className="flex flex-col w-[350px] justify-center">
                <div className="">
                    <h1 className="text-5xl font-bold mb-4 text-left text-brown max-mobile:text-center max-mobile:text-4xl">{text}</h1>

                </div>
            </div>
        </div>

    </>
  }