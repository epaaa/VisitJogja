import { BudgetinCardInterface } from "../../config/Interface";

export default function BudgetinCard({pic, title} : BudgetinCardInterface) {
  
    return <>
        <div className="flex justify-center flex-col gap-4 max-mobile:flex-wrap">
            <div className="w-32 h-40 flex justify-center gap-4  max-mobile:w-24 max-mobile:h-32">
                <img src={pic} className='object-cover rounded-lg object-center w-full h-full'></img>
            </div>

            <div className="flex justify-center">
                    <h1 className="text-sm font-bold mb-4 text-left text-brown max-tablet:text-center">{title}</h1>
                </div>
        </div>

    </>
  }