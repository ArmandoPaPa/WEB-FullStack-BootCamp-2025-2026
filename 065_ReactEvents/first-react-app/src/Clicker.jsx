function handleClick() {
    alert("Button Clicked")
}

function handleHover(){
    console.log("HOVERED!")
}

export default function Clicker() {
    return (
        <div>
            <p onMouseOver={handleHover}>Hover Over Me</p>
            <p>Click The Button</p>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}