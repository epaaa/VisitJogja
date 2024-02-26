
export default function PlacesToGo() {
  return (
    <>
      <div className="grid grid-cols-2 justify-center">
        <div className="text-4xl font-bold ml-56 mt-6 max-mobile:ml-3 max-tablet:ml-3">PLACES TO DISCOVER</div>
        <i className="fa-solid fa-arrow-right text-3xl mt-7 ml-3"></i>
      </div>
      <div className="flex justify-center mt-24">
        <div className="text-center font-bold bg-yellow m-auto">LANDMARKS</div>
        <div className="text-center font-bold bg-green m-auto">CULTURE</div>
      </div>
    </>
  )
}
