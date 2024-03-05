import PlacesToGo from "../PlacesToGo/PlacesToGo";
import ThingsToDo from "../ThingsToDo/ThingsToDo";
import FooterHome from "../footer/FooterHome";
import Navigation from "../navigation/Navigation";
import HomePageAbstract from "../HomePageAbstract/HomePageAbstract";
import HomeBackdrop from "./HomeBackdrop";
import JogjaBudgetin from "../jogjaBudgetin/JogjaBudgetin";
import { useEffect } from "react";
// import { animated, useSpring } from '@react-spring/web';


export default function HomePage() {
  

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>

    
      <Navigation/>
      <HomeBackdrop/>
      <HomePageAbstract/>
      <PlacesToGo/>
      <ThingsToDo/>
      <JogjaBudgetin/>
      <FooterHome/>
    </>
  )
}
