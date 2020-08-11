import React, {useState} from 'react'

const TodoForm = (props) => {
    const [inputValue, setValue] = useState('')
    const create = () => {
        props.onCreate(inputValue)
        setValue('')
    }
    return (
        <div>
            <input value={inputValue} onChange={e => setValue(e.target.value)}/>
            <button onClick={create}>create</button>
        </div>
    )
}

export default TodoForm
