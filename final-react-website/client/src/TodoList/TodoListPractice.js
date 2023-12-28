import React, {useState, useEffect} from "react";

function Todo() {
    const [todo, setTodo] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const [count, setCount] = useState(0);
    const [editingIndex, setEditingIndex] = useState(null);
    const [editTodo, setEditTodo] = useState('');

    const addTodo = () => {
        setTodo([...todo, newTodo]);
        setNewTodo('');
        setCount((count) => count + 1);
    };

    const removeTodo = (index) => {
        const updatedTodos = [...todo];
        updatedTodos.splice(index, 1);
        setTodo(updatedTodos);
        setCount((count) => count - 1);
    }

    const startEditing = (index, todo) => {
        setEditingIndex(index);
        setEditTodo(todo);
    }

    const saveEdit = () => {
        const updatedTodos = [...todo];
        updatedTodos[editingIndex] = editTodo;
        setTodo(updatedTodos);
        setEditingIndex(null);
    }

    const cancelEdit = () => {
        setEditingIndex(null);
        setEditTodo('');
    }

    useEffect(() => {
        document.title = `할일 갯수: ${count}`;
    }, [count]);

    return (
        <div>
            <h2>To Do List</h2>
            <div>
                <input type="text" 
                value={newTodo} 
                onChange={(e) => setNewTodo(e.target.value)} 
                />
                <button onClick={addTodo}>추가하기</button>
            </div>
        </div>
    );
}



export default Todo;