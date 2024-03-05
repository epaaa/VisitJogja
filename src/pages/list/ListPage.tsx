import Navigation from "../../components/navigation/Navigation";
import ListCard from "../../components/list_card/ListCard";
import ListPageAbstract from "../../components/ListPageAbstract/ListPageAbstract";
import FooterList from "../../components/footer/FooterList";
import { useEffect } from "react";

export default function ListPage() {
    
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <>
            <Navigation/>
            <ListPageAbstract/>
            <div className="my-10">
                <ListCard/>
            </div>
            <FooterList/>
        </>
    )
}
