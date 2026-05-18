import {useState} from 'react'
import './App.css'
import Counter from './Counter.jsx'
import Toggler from './Toggler.jsx'
import ToggleCounter from './ToggleCounter.jsx'
import ColorBox from './ColorBox.jsx'
import ColorBoxes from './ColorBoxes.jsx'


function App() {

    return (
        <>
            <Counter/>
            <div>- - - - - - - - - - - - -</div>
            <Toggler/>
            <div>- - - - - - - - - - - - -</div>
            <ToggleCounter/>
            <div>- - - - - - - - - - - - -</div>
            {/*<ColorBox/>*/}
            <ColorBoxes/>
        </>
    )
}

export default App
