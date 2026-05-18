import { useState } from 'react'

export default function Toggler() {
    const [isOn, setIsOn] = useState(false)

    function toggle() {
        setIsOn(!isOn)
    }

    return (
        <div>
            <h1>{isOn ? 'ON' : 'OFF'}</h1>
            <button onClick={toggle}>Toggle</button>
        </div>
    )
}