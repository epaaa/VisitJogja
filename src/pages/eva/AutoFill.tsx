interface TextFieldProps {
    label: string;
    value: string;
    onChange: (newValue: string) => void;
  } 

export default function AutoFIll({ label, value, onChange } : TextFieldProps) {
    
    return (
        <>
        <div className="flex justify-center gap-4 mt-8 max-mobile: flex-wrap bg-yellow">
            <div className="flex flex-col shrink w-72 justify-start bg-brown">
                <div className="h-24 flex ">
                    <div className="h-full w-64 bg-cream">
                        <p>
                            Enter your budget and how many days you want to stay. Voila! All the recommendations for your vacation will be shown.
                        </p>                    
                    </div>
                </div>
                <div className="h-48 flex ">
                    <div className="h-full w-52 bg-green">
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-1">{label}</label>
                        <input
                            type="text"
                            value={value}
                            onChange={(e) => onChange(e.target.value)}
                            className="w-full border border-gray-300 rounded p-2"
                        />
                        </div>
                    
                    </div>
                    
                </div>
            </div>


        </div>
        </>
    )
}