import { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)

    function incrementBy1() {
        setCount((currentCount) => currentCount + 1)
    }

    function incrementBy3() {
        setCount((currentCount) => currentCount + 1)
        setCount((currentCount) => currentCount + 1)
        setCount((currentCount) => currentCount + 1)
    }

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={incrementBy1}> + 1 </button>
            <button onClick={incrementBy3}> + 3 </button>
        </div>
    )
}