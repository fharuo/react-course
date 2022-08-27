import React from 'react'
import { useState } from 'react'

const ListRender = () => {

    const [list] = useState(["fabricio", "ana", "thiago"]);

    const [users, setUsers] = useState([
        {id: 0, name: "thiago", age: 4},
        {id: 1, name: "fabricio", age: 27},
        {id: 2, name: "ana", age: 31},
        {id: 3, name: "giovanni", age: 27}
    ]);

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);
        console.log(randomNumber);
        console.log(users);

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id);
        })
    }

    return (
        <div>
            <ul>
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name} - {user.age}</li>
                ))}
            </ul>
            <button onClick={deleteRandom}>Delete Random User</button>
        </div>
    )
}

export default ListRender;