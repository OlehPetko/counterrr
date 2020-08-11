import React, {useState} from 'react'

const TodoListItem = (props) => {

    const [editTitle, setEditTitle] = useState(props.title)
    const [editMode, setEditMode] = useState(false)
    const style = props.done === true ? {'textDecoration': 'line-through'} : null

    const editButtonHandler = () => {
        props.editTodo(editTitle, props.id)
        setEditMode(false)
        setEditTitle('')
    }
    const changeEditMode = () => {
        setEditMode(!editMode)
    }

    return (
        <ul>
            <li style={style}>
                <input type="checkbox" checked={props.done} onClick={() =>props.markTodo(props.id)}/>
                {props.title}
                <button onClick={() => props.deleteTodo(props.id)}>✖</button>
                {editMode && (
                    <>
                        <input value={editTitle} onChange={e => setEditTitle(e.target.value)}/>
                        <button onClick={editButtonHandler}>save</button>
                    </>
                )}
                <button onClick={changeEditMode}>✎</button>
                <button  onClick={() =>props.markTodo(props.id)} >☕</button>
                <button onClick={() => props.moveUp(props.index, props.index - 1)} disabled={!props.index}>⬆</button>
                <button onClick={() => props.moveUp(props.index, props.index + 1)} disabled={props.isElementLast}  >⬇</button>
            </li>
        </ul>
    )
}

export default TodoListItem
