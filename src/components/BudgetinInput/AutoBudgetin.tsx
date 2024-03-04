export default function AutoBudgetin() {

    return (
        <div className="flex flex-col gap-5 max-w-96">
            <div className="text-2xl font-bold text-center">Auto Budget'in</div>
            <div className="text-center">Enter your budget and how many days you want to stay. Voila! All the recommendations for your vacation will be shown.</div>
            <input type="number" placeholder="enter your budget" className="bg-white rounded-full border-2 p-3 border-brown hover:bg-brown text-brown hover:text-yellow w-full" />
            <input type="number" placeholder="nights to stay" className="bg-white rounded-full border-2 p-3 border-brown hover:bg-brown text-brown hover:text-yellow w-full" />
        </div>
    )
}
