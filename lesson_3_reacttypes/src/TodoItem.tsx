import React, { FC } from "react"
import {Task} from './App'

// interface IProps {}
interface TodoItemProps {
    todo: Task;
    onDelete: (id: number) => void;
}

export const TodoItem: FC<TodoItemProps> = ({ todo, onDelete }) => {
    return (
        <li>
            <p>{todo.text}</p>
            <button onClick={() => onDelete(todo.id)}>Delete</button>
        </li>
    )
}