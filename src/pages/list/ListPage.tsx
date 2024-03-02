import Navigation from "../../components/navigation/Navigation";
import LikeButton from "../../components/LikeButton/LikeButton";
import ListCard from "../../components/list_card/ListCard";
import ListPageAbstract from "../../components/ListPageAbstract/ListPageAbstract";
import FooterList from "../../components/footer/FooterList";

export default function ListPage() {
    
    return (
        <>
        <Navigation/>
        <ListPageAbstract/>
        <ListCard/>
        <LikeButton/>
        <FooterList/>
        </>
    )
}
