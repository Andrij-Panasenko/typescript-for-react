import React, {FC} from "react"

// interface IProps {}
interface TodoItemProps {
    todo: { id: number, text: string };
    onDelete: (id: number) => void;
}



export const TodoItem: FC<TodoItemProps> = ({ todo, onDelete }) => {
    return (
        <li>
            <p>{todo.text}</p>
            <button onClick={onDelete(todo.id)}>Delete</button>
        </li>
    )
}