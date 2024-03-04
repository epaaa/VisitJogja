import { createContext } from "react";

interface BudgetContextInterface {
    budget:number,
    setBudget?:(e:number)=>void,
    night:number,
    setNight?:(e:number)=>void,
    accommodation:number,
    setAccommodation?:(e:number)=>void,
    food:number,
    setFood?:(e:number)=>void,
    touring:number,
    setTouring?:(e:number)=>void,
    handleRecommendation?:()=>void
}

const DefaultBudgetContext = {
    budget:0,
    night:0,
    accommodation:0,
    food:0,
    touring:0,
}

export const BudgetContext = createContext<BudgetContextInterface>(DefaultBudgetContext)