import ListCardItem from "./ListCardItem";

export default function ListCard() {
  return (
    <div className="p-10 grid justify-center gap-5">
        <div className="grid gap-5 justify-center">
            <div className="text-5xl font-semibold text-center">VISIT JOGJA</div>
        </div>

        <div className="w-full h-[2px] bg-brown"></div>

        <div className="grid justify-center grid-cols-3 max-tablet:grid-cols-2 max-mobile:grid-cols-1 items-center gap-9 w-fit">
            <ListCardItem/>        
            <ListCardItem/>        
            <ListCardItem/>        
            <ListCardItem/>        
            <ListCardItem/>        
            <ListCardItem/>        
            <ListCardItem/>        
            <ListCardItem/>        
            <ListCardItem/>        
        </div>
    </div>
  )
}
