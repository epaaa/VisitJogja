import { useState } from "react";
import AutoBudgetin from "./AutoBudgetin";
import CustomizeBudgetin from "./CustomizeBudgetin";

export default function BudgetInputContainer() {

  const [isAuto, setIsAuto] = useState<boolean>(false)

  function handleToogle(){
    setIsAuto(!isAuto)
  }
  
  return (
    <div className="p-10 flex flex-col justify-center items-center">
      {/* MOBILE VIEW */}
      <div className="max-tablet:flex flex-col items-center hidden">
        <input type="checkbox" className="toggle toggle-warning" checked={isAuto} onClick={handleToogle} />
        <div className="flex justify-center p-5 gap-10">
            {
              isAuto ? 
              <AutoBudgetin/>
              :
              <CustomizeBudgetin/>
            }
        </div>
      </div>

      {/* DESKTOP VIEW */}
      <div className="max-mobile:hidden flex flex-col items-center">
        <div className="flex justify-center p-5 gap-10">
          <AutoBudgetin/>
          <CustomizeBudgetin/>
        </div>
      </div>
      
      <div className="bg-white rounded-full h-12 mt-2 border-2 p-3 border-brown hover:bg-brown text-brown hover:text-yellow">
        <div className="flex gap-3 items-center justify-between">
        <div className="text-center font-semibold">Give me recommendation</div>
        <i className="fa-solid fa-arrow-right text-1xl"></i>
        </div>
      </div>
      
    </div>
)
}
