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
                id: Date.now(), // 고유한 ID값으로 현재 시간을 사용합니다.
                text: todo,     // 할 일 내용
                isDone: false   // 완료 여부 (처음엔 당연히 안 했으니 false!)
            }
        ])

        setTodo('')
    }

    const toggleTodo = (id) => {
        const newList = lists.map((item) =>
            // id가 같으면 isDone만 뒤집은 새 객체를 만들고, 다르면 원래 객체 그대로 둔다!
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
                                color:'#000',
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
