import './App.css'

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AlarmIcon from '@mui/icons-material/Alarm';
import RatingDemo from './RatingDemo';
import TextField from '@mui/material/TextField';

function App() {

    return (
        <>
            <Button variant="text">Contained</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Contained</Button>
            <Button color="success" size="small" variant="contained">Contained</Button>
            <h2>- - - - - - - - - - - - -</h2>
            <IconButton color="secondary" aria-label="add an alarm">
                <AlarmIcon />
            </IconButton>
            <h2>- - - - - - - - - - - - -</h2>
            <RatingDemo />
            <h2>- - - - - - - - - - - - -</h2>
            <TextField id="filled-basic" label="Filled" variant="filled" />
        </>
    )
}

export default App
