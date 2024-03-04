import { useContext } from "react"
import { BudgetContext } from "../../config/BudgetContext"

export default function CustomizeBudgetin() {

    const budgetContext = useContext(BudgetContext)

    return (
        <div className="flex flex-col gap-5 max-w-96">
            <div className="text-2xl font-bold text-center">Customize</div>
            <div className="text-center text-xl font-semibold max-mobile:text-sm">Enter your budget and divide it for accommodation, food and tours.</div>
            <input onChange={e => budgetContext.setBudget!(parseInt(e.target.value))} type="number" placeholder="nights to stay" className="bg-white rounded-full border-2 p-3 border-brown hover:bg-brown text-brown hover:text-yellow w-full" />
            <input onChange={e => budgetContext.setAccommodation!(parseInt(e.target.value))} type="number" placeholder="budget for accommodation" className="bg-white rounded-full border-2 p-3 border-brown hover:bg-brown text-brown hover:text-yellow w-full" />
            <input onChange={e => budgetContext.setFood!(parseInt(e.target.value))} type="number" placeholder="budget for food" className="bg-white rounded-full border-2 p-3 border-brown hover:bg-brown text-brown hover:text-yellow w-full" />
            <input onChange={e => budgetContext.setTouring!(parseInt(e.target.value))} type="number" placeholder="budget for touring" className="bg-white rounded-full border-2 p-3 border-brown hover:bg-brown text-brown hover:text-yellow w-full" />
        </div>
    )
}
