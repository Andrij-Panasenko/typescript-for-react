import React, { FC } from "react"
import { Task } from './redux/todoSlice'

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