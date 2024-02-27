export default function ListCardItem() {
  return (
    <div className="max-w-96 shadow-xl rounded-xl overflow-hidden">
        <img src="../../../../public/list_card/borobudur.png" alt=""/>
        <div className="p-5 grid gap-3">
            <div className="font-bold text-lg">this is title</div>
            <div className="truncate">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ab fugit nihil quisquam ipsa, inventore quia tempora atque aspernatur quidem sapiente, aut mollitia quas repellendus nemo fugiat nisi itaque magnam natus! Omnis assumenda, eum sunt molestiae voluptatem ipsam, saepe reiciendis reprehenderit repudiandae dolorum aliquam dolore nihil voluptate provident quia alias amet rerum illum? Veniam doloribus dignissimos iste ab facilis porro ea.</div>
            <div className="font-semibold">IDR 10000</div>
  
            <div className="my-5 w-full h-[2px] bg-brown"></div>

            <div className="flex items-center gap-3 justify-end font-semibold">
              <div className="">See more</div>
              <i className="fa-regular fa-circle-right text-2xl"></i>
            </div>
        </div>
    </div>
  )
}
