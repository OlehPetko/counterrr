import React from 'react';
import TodoListItem from "./TodoListItem";

const TodoList = (props) => {

    return (
        <div>

            {props.list.map((el, index) => {
                const isElementLast = index === props.list.length - 1
                  return  < TodoListItem
                id = {el.id}
                title = {el.title}
                done = {el.done}
                deleteTodo = {props.deleteTodo}
                editTodo = {props.editTodo}
                markTodo = {props.markTodo}
                moveUp = {props.moveUp}
                index = {index}
                el = {el}
                isElementLast={isElementLast}
                  />
            })}


                </div>
    );
}

export default TodoList
