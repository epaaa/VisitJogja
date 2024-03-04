import { useContext } from "react"
import { BudgetContext } from "../../config/BudgetContext"

export default function AutoBudgetin() {

    const budgetContext = useContext(BudgetContext)

    return (
        <div className="flex flex-col gap-5 max-w-96">
            <div className="text-2xl font-bold text-center">AUTO BUDGET'IN</div>
            <div className="text-center text-xl font-normal max-mobile:text-sm">Enter your budget and how many days you want to stay. Voila! All the recommendations for your vacation will be shown.</div>
            <input onChange={e => budgetContext.setNight!(parseInt(e.target.value))} type="number" placeholder="nights to stay" className="bg-white rounded-full border-2 p-3 border-brown hover:bg-brown text-brown hover:text-yellow w-full" />
            <input onChange={e => budgetContext.setBudget!(parseInt(e.target.value))} type="number" placeholder="enter your budget" className="bg-white rounded-full border-2 p-3 border-brown hover:bg-brown text-brown hover:text-yellow w-full" />
        </div>
    )
}
