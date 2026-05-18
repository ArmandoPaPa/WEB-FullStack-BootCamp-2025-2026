import {useState} from 'react'
import './App.css'
import Greeter from './Greeter.jsx'
import Die from './Die.jsx'
import ListPicker from './ListPicker.jsx'
import DoubleDice from './DoubleDice.jsx'
import Heading from './Heading.jsx'
import ColorList from './ColorList.jsx'

function App() {
    return (
        <>
            < Heading text="Welcome to my React App!" color="teal" fontSize="40px"/>
            < Greeter person="Bill" from="California"/>
            < Greeter person="Rosa" from="Texas"/>
            < Greeter/>
            <h2>- - - - - - - - - -</h2>
            < Die numSides={20}/>
            < Die/>
            < Die numSides={10}/>
            <h2>- - - - - - - - - -</h2>
            < ListPicker values={["Apple", "Banana", "Cherry", "Date", "Elderberry"]}/>
            <h2>- - - - - - - - - -</h2>
            {/*< ListPicker values={{a: 1, b: 2, c: 3}}/>*/}

            < DoubleDice/>
            <h2>- - - - - - - - - -</h2>
            < DoubleDice/>
            <h2>- - - - - - - - - -</h2>
            < DoubleDice/>

            <h2>- - - - - - - - - -</h2>
            < ColorList colors={["red", "pink", "purple", "teal"]}/>

        </>
    )
}

export default App
