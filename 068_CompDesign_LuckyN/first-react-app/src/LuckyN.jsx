import {useState} from 'react'
import {getRolls} from './utils.js';
import Dice from "./Dice.jsx";
import Button from "./Button.jsx";

function LuckyN({title="Dice Game", numDice=2, winCheck }){
    const [dice, setDice] = useState(getRolls(numDice));
    const isWinner = winCheck(dice);
    const roll = () => setDice(getRolls(numDice));
    return (
        <main className="LuckyN">
            <h1>{title} {isWinner && "You Win!"}</h1>
            <Dice dice={dice}/>
            {/*<button onClick={roll}>Re-Roll Dice</button>*/}
            < Button clickFunc={roll} label="Re-Roll Dice"/>
        </main>
    );
}

export default LuckyN;