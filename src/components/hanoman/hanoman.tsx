export default function Hanoman() {
    const hanoman = '../../../../public/budgetin_page/hanoman.jpg';
    const text = "Unlock budget-friendly travel with our Jogja Budget’In";
  
    return <>
        <div className="flex justify-center gap-10 mt-8 max-mobile:flex-wrap p-5">
            <div className="w-48 h-48 flex flex-col justify-center">
                <img src={hanoman} className='object-cover rounded-lg max-tablet:w-[200px] max-tablet:h-[200px]'></img>
            </div>

            <div className="flex flex-col w-[350px] justify-center">
                <div className="">
                    <h1 className="text-2xl font-bold mb-4 text-left text-brown max-mobile:text-center">{text}</h1>

                </div>
            </div>
        </div>

    </>
  }