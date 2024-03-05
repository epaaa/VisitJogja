import { useEffect, useState } from "react"

export default function useKeyPressed(key:string) {
    const [escapePressed, setEscapePressed] = useState<boolean>(false)

    const handleKeyPress = (event: KeyboardEvent) => {
        if (event.key === key) {
        setEscapePressed(true)
        }
    }

    useEffect(() => {
        const onKeyDown = (event: KeyboardEvent) => {
        handleKeyPress(event)
        }

        window.addEventListener('keydown', onKeyDown)

        return () => {
        window.removeEventListener('keydown', onKeyDown)
        }
    }, []) 

    return escapePressed
}