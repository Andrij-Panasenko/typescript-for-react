import { useState, FC, FormEvent, ChangeEvent } from "react"

interface AddTodoFormProps {
    onAdd: (text: string) => void;
}

export const AddTodoFrom: FC<AddTodoFormProps> = ({ onAdd }) => {
    const [newTodo, setNewTodo] = useState<string>("")

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        onAdd(newTodo);
        setNewTodo("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="New todo" 
                value={newTodo} 
                onChange={(e: ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)} />
            <button type="submit">Add</button>
        </form>
    )
}