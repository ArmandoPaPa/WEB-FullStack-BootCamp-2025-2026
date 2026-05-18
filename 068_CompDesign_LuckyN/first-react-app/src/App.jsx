import './App.css'
import LuckyN from './LuckyN.jsx';
import {sum} from './utils.js';

function lessThan4(dice){
    return sum(dice) < 4;
}

function allSameValue(dice){
    return dice.every(v => v === dice[0]);
}

function App() {

    return (
        <>
            <LuckyN winCheck={lessThan4} title="Roll less than 4"/>
            <LuckyN winCheck={allSameValue} numDice={3} title="All Same Value"/>
        </>
    )
}

export default App
