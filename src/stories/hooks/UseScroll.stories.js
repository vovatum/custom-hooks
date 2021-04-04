import React, {useRef, useState} from 'react';
import {useScroll} from "./UseScroll";


export default {
    title: 'Hooks/Scroll'
}


export const Scroll = () => {

    const [todos, setTodos] = useState([])
    const [page, setPage] = useState(1)
    const limit = 10
    const parentRef = useRef()
    const childRef = useRef()
    const intersected = useScroll(parentRef, childRef, () => fetchTodos(limit, page))

    function fetchTodos(limit, page) {
        fetch(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${limit}`)
            .then(response => response.json())
            .then(json => {
                setTodos(prev => [...prev, ...json])
                setPage(prev => prev + 1)
            })
    }

    return (
        <div ref={parentRef} style={{height: '80vh', overflow: 'auto'}}>
            {todos.map(todo => <div key={todo.id}
                                    style={{padding: 20, border: '2px solid red'}}>{todo.id}. {todo.title}</div>)}
            <div ref={childRef} style={{height: 20, background: 'pink'}}>
            </div>
        </div>
    )
}