import { useState } from "react";
import BudgetInputContainer from "../../components/BudgetinInput/BudgetInputContainer";
import FooterBudgetin from "../../components/footer/FooterBudgetin";
import Hanoman from "../../components/hanoman/hanoman";
import Navigation from "../../components/navigation/Navigation";
import { BudgetContext } from "../../config/BudgetContext";
import Recommendation from "../../components/recommendation/Recommendation";

export default function BudgetPage() {

  // auto budgetin
  const [budget, setBudget] = useState<number>(0)
  const [night, setNight] = useState<number>(0)

  // customize
  const [accommodation, setAccommodation] = useState<number>(0)
  const [food, setFood] = useState<number>(0)
  const [touring, setTouring] = useState<number>(0)

  function handleRecommendation() {
    
  }

  const val = {
    budget, 
    setBudget,
    night, 
    setNight,
    accommodation, 
    setAccommodation,
    food, 
    setFood,
    touring, 
    setTouring,
    handleRecommendation
  }

  return (
    <>
      <BudgetContext.Provider value={val}>
        <Navigation/>
        <Hanoman/>
        <div className="mb-10"></div>
        <BudgetInputContainer/>
        <div className="mb-10"></div>
        <Recommendation/>
        <div className="mb-10"></div>
        <FooterBudgetin/>
      </BudgetContext.Provider>
    </>
  )
}
