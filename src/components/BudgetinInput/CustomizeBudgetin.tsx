export default function CustomizeBudgetin() {

    return (
        <div className="flex flex-col gap-5 max-w-96">
            <div className="text-2xl font-bold text-center">Customize</div>
            <div className="text-center">Enter your budget and divide it for accommodation, food and tours.</div>
            <input type="number" placeholder="nights to stay" className="bg-white rounded-full border-2 p-3 border-brown hover:bg-brown text-brown hover:text-yellow w-full" />
            <input type="number" placeholder="budget for accommodation" className="bg-white rounded-full border-2 p-3 border-brown hover:bg-brown text-brown hover:text-yellow w-full" />
            <input type="number" placeholder="budget for food" className="bg-white rounded-full border-2 p-3 border-brown hover:bg-brown text-brown hover:text-yellow w-full" />
            <input type="number" placeholder="budget for touring" className="bg-white rounded-full border-2 p-3 border-brown hover:bg-brown text-brown hover:text-yellow w-full" />
        </div>
    )
}
