interface Activity {
  activityType: string;
  activityDesc: string;
}

export default function ThingsToDoSection({activityType, activityDesc} : Activity) {
  return (
    <div className="flex flex-row gap-1 justify-center pt-4 pr-12 pl-16 m-2 flex-wrap max-mobile:flex-col">
      <div className="flex-col p-4 basis-1/2">
        <div className="flex-col gap-0">
          <div className="text-3xl font-bold text-brown mt-2">{activityType}</div>
          <div className="text-3xl font-bold text-brown mt-2">ACTIVITIES</div>
        </div>
        <p className="text-brown">{activityDesc}</p>

        
        <a href="">
          <div className="bg-white rounded-full w-32 h-12 mt-2 border-2 p-3 border-brown hover:bg-brown">
            <div className="flex gap-3">
              <div className="text-center text-brown font-semibold">See all</div>
              <i className="fa-solid fa-arrow-right text-1xl mt-1 text-brown"></i>
            </div>
          </div>
        </a>
      </div>

      {/* <div className="w-[250px] h-[250px] bg-green m-4">Placeholder</div> */}
      <div className="w-[250px] h-[250px] carousel rounded-box">
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
    </div>
  )
}