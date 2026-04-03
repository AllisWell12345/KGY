import React from 'react'
import { useState } from 'react'

function Todo() {

    const [todo, setTodo] = useState("");
    const [lists, setLists] = useState([]);

    const AddTodo = () => {

        if (todo.trim() === "") return;

        setLists([
            ...lists,
            {
                id: Date.now(),
                text: todo,     
                isDone: false   
            }
        ])

        setTodo('')
    }

    const toggleTodo = (id) => {
        const newList = lists.map((item) =>
            item.id === id ? { 
                ...item, isDone: !item.isDone 
            } : item
        );

        setLists(newList);
    }

    const deleteList = (indexToDelete) => {
        let newList = [];

        lists.forEach((item, index) => {
            if (index !== indexToDelete) {
                newList.push(item);
            }
        });

        setLists(newList);
    }

    return (
        <>
            <h2>할일 목록</h2>
            <input
                type='text'
                placeholder='새 할일'
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button onClick={AddTodo}>추가</button>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {lists.map((list, index) => (
                    <li key={index}>
                        <label>
                            <input 
                                type='checkbox' 
                                checked={list.isDone} 
                                onChange = {() => toggleTodo(list.id)}/>
                            <span style={{ 
                                textDecoration: list.isDone ? 'line-through' : 'none',
                                marginLeft: '5px'
                            }}>{list.text}</span>
                        </label>
                        <button onClick={() => deleteList(index)}>삭제</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Todo
