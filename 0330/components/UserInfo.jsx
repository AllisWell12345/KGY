import React,{ useState } from 'react'

function UserInfo() {

    // const [name, setName] = useState('');
    // const [age, setAge] = useState('');
    // const [email, setEmail] = useState('');

    const [user, setUser] = useState({
        name: '',
        age: '',
        email: ''
    });


    const handleInputChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }


    return (
        <>
            <>이름: </>
            <input
                type="text"
                name="name"
                placeholder='이름을 입력하세요'
                value={user.name}
                onChange={handleInputChange}
            />
            <br/>
            <>나이: </>
            <input
                type="number"
                name="age"
                placeholder='나이를 입력하세요'
                value={user.age}
                onChange={handleInputChange}
            />
            <br/>
            <>이메일: </>
            <input
                type="text"
                name="email"
                placeholder='이메일을 입력하세요'
                value={user.email}
                onChange={handleInputChange}
            />
            <br/>
            <> {user.name} ({user.age}세)</>
            <br/>
            <>📧 {user.email}</>
        </>
    )
}

export default UserInfo
