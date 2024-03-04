import BudgetInputContainer from "../../components/BudgetinInput/BudgetInputContainer";
import FooterBudgetin from "../../components/footer/FooterBudgetin";
import Hanoman from "../../components/hanoman/hanoman";
import Navigation from "../../components/navigation/Navigation";

export default function BudgetPage() {
  return (
    <>
        <Navigation/>
        <Hanoman/>
        <BudgetInputContainer/>
        <FooterBudgetin/>
    </>
  )
}
