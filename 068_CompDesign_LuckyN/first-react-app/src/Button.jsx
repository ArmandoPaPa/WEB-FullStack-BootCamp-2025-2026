import "./Button.css";

function Button({clickFunc, label="Re-Roll Dice"}) {
    return <button onClick={clickFunc} className="Button">{label}</button>
}

export default Button;