import {useState} from 'react'
import './App.css'
import ShoppingList from './ShoppingList.jsx'

const data = [
    {id: 1, item: 'eggs', quantity: 12, completed: false},
    {id: 2, item: 'milk', quantity: 1, completed: true},
    {id: 3, item: 'bread', quantity: 1, completed: false},
    {id: 4, item: 'butter', quantity: 1, completed: false},
    {id: 5, item: 'cheese', quantity: 1, completed: true},
    {id: 6, item: 'dragonfruit', quantity: 5, completed: true},
    {id: 7, item: 'grapes', quantity: 1, completed: false},
    {id: 8, item: 'beef steak', quantity: 6, completed: true},
];

function App() {

    return (
        <>
            < ShoppingList items={data}/>
        </>
    )
}

export default App
