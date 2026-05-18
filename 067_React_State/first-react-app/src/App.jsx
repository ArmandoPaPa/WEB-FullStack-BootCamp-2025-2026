import {useState} from 'react'
import './App.css'
import Counter from './Counter'
import Dumbo from './Dumbo'
import ScoreKeeper from './ScoreKeeper'
import EmojiClicker from './EmojiClicker'


function App() {

    return (
        <>
            <h1>State Demo!</h1>
            <h2>- - - - - - - - - - - - -</h2>
            <Counter />
            <h2>- - - - - - - - - - - - -</h2>
            <Dumbo />
            <h2>- - - - - - - - - - - - -</h2>
            <ScoreKeeper />
            <h2>- - - - - - - - - - - - -</h2>
            <EmojiClicker />
        </>
    )
}

export default App
