import { useState } from 'react'

function generateGameBoard(){
    console.log("Generating game board");
    return Array(5000)
}

export default function Dumbo() {
    // const [board, setBoard] = useState(generateGameBoard())
    const [board, setBoard] = useState(generateGameBoard)
    return <button onClick={() => setBoard("hello!")}>Click me to change state</button>
}