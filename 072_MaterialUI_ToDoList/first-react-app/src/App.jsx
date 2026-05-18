import CssBaseline from '@mui/material/CssBaseline'
import './App.css'
import TodoList from './TodoList.jsx'
import NavBar from './NavBar.jsx'

function App() {

    return (
        <>
            <CssBaseline/>
            <NavBar/>
            <TodoList />
        </>
    )
}

export default App
