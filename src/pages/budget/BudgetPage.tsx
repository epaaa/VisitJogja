import { useContext, useState } from "react";
import BudgetInputContainer from "../../components/BudgetinInput/BudgetInputContainer";
import FooterBudgetin from "../../components/footer/FooterBudgetin";
import Hanoman from "../../components/hanoman/hanoman";
import Navigation from "../../components/navigation/Navigation";
import { BudgetContext } from "../../config/BudgetContext";
import Recommendation from "../../components/recommendation/Recommendation";
import { DataContext } from "../../config/DataContext";
import toast from "react-hot-toast";
import { DataInterface } from "../../config/Interface";
import BudgetinBackdrop from "../../components/Home/BudgetinBackdrop";

export default function BudgetPage() {

  // auto budgetin
  const [budget, setBudget] = useState<number>(0)
  const [night, setNight] = useState<number>(0)

  // customize
  const [accommodation, setAccommodation] = useState<number>(0)
  const [food, setFood] = useState<number>(0)
  const [touring, setTouring] = useState<number>(0)

  const dataContext = useContext(DataContext)
  const accommodationArr = dataContext.places.filter(item => item.navbarChild === 'Accommodation')
  const restaurantArr = dataContext.places.filter(item => item.navbarChild === 'Cuisine')
  const tourismSpotArr = [
      ...dataContext.places.filter(item => item.navbarChild === 'Culture'),
      ...dataContext.places.filter(item => item.navbarChild === 'Landmark')
  ]

  // data storing
  const [accommodationData, setAccommodationData] = useState<DataInterface[]>([])
  const [restaurantData, setRestaurantData] = useState<DataInterface[]>([])
  const [tourismData, setTourismData] = useState<DataInterface[]>([])

  function handleRecommendation() {
    if(night === 0) {
      toast.error("You need to fill total nights!")
      return
    }
    
    const accommodationRatio = 1 * night
    const restaurantRatio = 3 * night
    const tourismRatio = 1 * night
    
    console.log(budget)
    
    // auto budgetin
    if(budget !== 0 && !isNaN(budget)) {
      
      const budgetTotal = 500000 * night
      if(budget < budgetTotal) {
        toast.error(`Budget must be IDR ${budgetTotal} minimum!`)
        return
      }
      
      const pricePercentage = Math.floor(budget * 0.33)
      console.log(pricePercentage)
      
      const accommodationPrice = accommodationArr.filter(item => item.price * accommodationRatio <= pricePercentage)
      const restaurantPrice = restaurantArr.filter(item => item.price * restaurantRatio <= pricePercentage)
      const tourismPrice = tourismSpotArr.filter(item => item.price * tourismRatio <= pricePercentage)
      
      setAccommodationData(accommodationPrice)
      setRestaurantData(restaurantPrice)
      setTourismData(tourismPrice)
      return
    }
    
    // customize
    if(accommodation === 0 || food === 0 || touring === 0) {
      toast.error("All field must be filled!")
      return
    }

    const accommodationPrice = accommodationArr.filter(item => item.price * accommodationRatio <= accommodation)
    const restaurantPrice = restaurantArr.filter(item => item.price * restaurantRatio <= food)
    const tourismPrice = tourismSpotArr.filter(item => item.price * tourismRatio <= touring)

    setAccommodationData(accommodationPrice)
    setRestaurantData(restaurantPrice)
    setTourismData(tourismPrice)
  } 

  console.log(accommodationData)
  console.log(restaurantData)
  console.log(tourismData)

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
    handleRecommendation,
    accommodationData,
    restaurantData,
    tourismData,
  }

  return (
    <>
      <BudgetContext.Provider value={val}>
        <Navigation/>
        <BudgetinBackdrop/>
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
