import React, {useState} from 'react'
import TodoList from "./TodoList"
import TodoForm from "./TodoForm"

const initialState = [
    {id: 1, title: 'One', done: true},
    {id: 2, title: 'Two', done: true},
    {id: 3, title: 'Three', done: false},
    {id: 4, title: 'Four', done: true},
    {id: 5, title: 'Five', done: true}
]
const App = (props) => {
    const [list, setList] = useState(initialState)

    const moveUp = (currentElementIndex, previousElement) => {
        if (previousElement < 0 || previousElement >= list.length) return
        const newList = list.map((el, i) => {
            if (currentElementIndex === i) return list[previousElement]
            if (previousElement === i) return list[currentElementIndex]
            return el
        })
        setList(newList)
    }

    const markTodo = (id) => {
        const newList = list.map(el => {
            if (el.id === id) return {...el, done: !el.done}
            return el
        })
        setList(newList)
    }

    const onCreate = (title) => {
        setList([...list, {id: Math.random() * 10, title, done: false}])
    }

    const deleteTodo = (id) => {
        const newList = [...list].filter(el => el.id !== id)
        setList(newList)
    }

    const editTodo = (id, newTitle) => {
        const newList = list.map(el => {
            if (el.id === id) return {...el, title: newTitle}
            return el
        })
        setList(newList)
    }

    return (
        <div>
            <TodoList list={list}
                      deleteTodo={deleteTodo}
                      editTodo={editTodo}
                      markTodo={markTodo}
                      moveUp={moveUp}/>
            <TodoForm onCreate={onCreate}/>
        </div>
    )
}

export default App
