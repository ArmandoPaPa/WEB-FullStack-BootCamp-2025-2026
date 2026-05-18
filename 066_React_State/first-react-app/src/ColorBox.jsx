import { useState } from 'react'

const colors = [
    "#FF6633", "#FFB399", "#FF33FF", "#FFFF99", "#00B3E6",
    "#E6B333", "#3366E6", "#999966", "#99FF99", "#B34D4D",
    "#80B300", "#809900", "#E6B3B3", "#6680B3", "#66991A",
    "#FF99E6", "#CCFF1A", "#FF1A66", "#E6331A", "#33FFCC",
    "#66994D", "#B366CC", "#4D8000", "#B33300", "#CC80CC",
]

export default function ColorBox() {
    const [color, setColor] = useState(colors[0])

    function changeColor() {
        const randomIndex = Math.floor(Math.random() * colors.length)
        setColor(colors[randomIndex])
    }

    return (
        <div style={{ backgroundColor: color, width: '200px', height: '200px' }} onClick={changeColor}>
            <h2 style={{ color: '#fff', textAlign: 'center', paddingTop: '80px' }}>Click me!</h2>
        </div>
    )
}