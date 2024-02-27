import Navigation from "../../components/navigation/Navigation";
import HomePageAbstract from "./HomePageAbstract/HomePageAbstract";
import ListCard from "./ListCard/ListCard";
import ListPageAbstract from "./ListPageAbstract/ListPageAbstract";

export default function Johe() {
  return (
    <>
      <Navigation/>
      <ListCard/>
      <HomePageAbstract/>
      <ListPageAbstract/>
    </>
  )
}