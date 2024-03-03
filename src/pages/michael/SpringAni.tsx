import { useSpring, animated } from "@react-spring/web";


export default function AnimatedBox() {
  
  const [springs, api] = useSpring(() => ({
    from: { x: 0 },
  }))

  const handleClick = () => {
    api.start({
      from: {
        x: 0,
      },
      to: {
        x: 100,
      },
    })
  }

  return (
    <div className="flex-col">
      <animated.div
        className={"bg-brown w-[80px] h-[80px] absolute"}
        style={{
          ...springs,
        }}
      />
      <button onClick={handleClick} className="bg-blue-500h hover:bg-blue-700 text-white py-2 px-4 rounded-full">CLICK Me</button>
    </div>
  )
}
