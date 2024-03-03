export default function Hanoman() {
    const hanoman = '../../../../public/budgetin_page/hanoman.jpg';
    const text = "Unlock budget-friendly travel with our Jogja Budget’In";
  
    return <>
        <div className="flex justify-center gap-4 mt-8 md:max-lg:flex-wrap">
            <div className="w-48 h-48 flex flex-col justify-center">
                <img src={hanoman} className='object-cover rounded-lg max-tablet:w-[200px] max-tablet:h-[200px]'></img>
            </div>

            <div className="flex flex-col w-[350px] justify-center">
                <div className="">
                    <h1 className="text-2xl font-bold mb-4 text-left text-brown max-tablet:text-center">{text}</h1>

                </div>
                <div className="flex max-tablet:justify-center">
                    <button className="py-3 px-5 rounded-full bg-green text-brown text-xs font-bold">Budget'in</button>

                </div>
            </div>

        </div>

    </>
  }