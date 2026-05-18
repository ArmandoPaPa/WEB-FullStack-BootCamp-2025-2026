import { useState } from 'react'

export default function ToggleCounter() {
    const [isOn, setIsOn] = useState(false)
    const [count, setCount] = useState(0)

    function toggle() {
        setIsOn(!isOn)
    }

    function incrementCount() {
        setCount(count + 1)
    }

    return (
        <div>
            <h1>{isOn ? 'ON' : 'OFF'}</h1>
            <button onClick={toggle}>Toggle</button>
            <h2 onClick={incrementCount}>{count} | Press ME to increment +1</h2>
        </div>
    )
}