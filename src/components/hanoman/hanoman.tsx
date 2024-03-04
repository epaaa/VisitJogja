export default function Hanoman() {
    const hanoman = '../../../../public/budgetin_page/hanoman.jpg';
    const text = "Unlock budget-friendly travel with our Jogja Budget’In";
  
    return <>
        <div className="flex justify-center gap-10 mt-8 max-mobile:flex-wrap p-5">
            <div className="max-mobile:w-64 max-mobile:h-56 w-96 h-80 flex flex-col justify-center">
                <img src={hanoman} className='object-cover rounded-lg w-full h-full'></img>
            </div>

            <div className="flex flex-col w-[350px] justify-center">
                <div className="">
                    <h1 className="text-2xl font-bold mb-4 text-left text-brown max-mobile:text-center">{text}</h1>

                </div>
            </div>
        </div>

    </>
  }