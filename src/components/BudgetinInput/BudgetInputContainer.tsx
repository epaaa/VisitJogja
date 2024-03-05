import { useContext, useState } from "react";
import AutoBudgetin from "./AutoBudgetin";
import CustomizeBudgetin from "./CustomizeBudgetin";
import { BudgetContext } from "../../config/BudgetContext";

export default function BudgetInputContainer() {

  const [isAuto, setIsAuto] = useState<boolean>(true)

  function handleToogle(){
    setIsAuto(!isAuto)
  }

  const budgetContext = useContext(BudgetContext)
  
  return (
    <div className="p-5 flex flex-col justify-center items-center">
      {/* MOBILE VIEW */}
      <div className="max-tablet:flex flex-col items-center hidden gap-5">
        <input type="checkbox" className="toggle toggle-warning" checked={isAuto} onChange={handleToogle} />
        <div className="flex justify-center gap-10">
            {
              isAuto ? 
              <AutoBudgetin/>
              :
              <CustomizeBudgetin/>
            }
        </div>
      </div>

      {/* DESKTOP VIEW */}
      <div className="max-tablet:hidden flex flex-col items-center">
        <div className="flex justify-center gap-10">
          <AutoBudgetin/>
          <div className="h-[100] border-l-2 border-gray-500"></div>
          <CustomizeBudgetin/>
        </div>
      </div>
      
      <div onClick={budgetContext.handleRecommendation!} className="bg-cream rounded-full border-2 px-5 py-3 mt-8 border-brown hover:bg-green text-brown hover:text-cream">
        <div className="flex gap-3 items-center justify-between">
        <div className="text-center">Give me recommendation</div>
        <i className="fa-solid fa-arrow-right text-1xl"></i>
        </div>
      </div>

    </div>
)
}
