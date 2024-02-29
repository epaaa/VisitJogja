import { useParams } from "react-router-dom";
import ListCardItem from "./ListCardItem";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../config/DataContext";
import { DataInterface } from "../../config/Interface";

export default function ListCard() {

  const {nav, navChild} = useParams()
  const dataContext = useContext(DataContext)
  const [data,setData] = useState<DataInterface[]>([])

  useEffect(() => {
      const dataArr = nav === 'placesToGo' ? dataContext.places : dataContext.things
      const dataFilter = dataArr.filter((item:DataInterface) => item.navbarChild === navChild)
      setData(dataFilter)
  },[dataContext.places, dataContext.things, nav, navChild])

  return (
    <div className="p-10 grid justify-center gap-5">
        <div className="grid gap-5 justify-center">
          <div className="text-5xl font-semibold text-center px-10">VISIT JOGJA</div>
          <div className="w-full h-[2px] bg-brown"></div>
        </div>

        <div className="grid justify-center grid-cols-3 max-tablet:grid-cols-2 max-mobile:grid-cols-1 items-center gap-9 w-fit">
          {
            data.map((item:DataInterface, i:number) => (
              <ListCardItem {...item} key={i}/>
            ))
          }
        </div>
    </div>
  )
}
