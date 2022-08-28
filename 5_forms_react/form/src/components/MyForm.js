import React, { useState } from 'react'
import './MyForm.css'

const MyForm = ({user}) => {

    const [name, setName] = useState(user ? user.name : '');
    const [email, setEmail] = useState(user ? user.email : '');
    const [bio, setBio] = useState(user ? user.bio : '');
    const [role, setRole] = useState(user ? user.role : 'user');

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(name, email, bio, role);
        console.log("enviando o formulario...");

        setName("");
        setEmail("");
        setBio("");
        setRole("");
    };

  return (
    <div>
        {/* 1- criacao de forms */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Digite seu nome" 
                    onChange={handleName} 
                    value = {name || ''}/>
            </div>
            {/* label envolvendo input */}
            <label>
                <span>E-mail</span>
                {/* simplificacao de manipulacao de state */}
                <input 
                    type="email" 
                    name="email" 
                    placeholder="digite seu email"
                    onChange={(e) => setEmail(e.target.value)} 
                    value = {email || ''} />
            </label>
            <label >
                <span>bio: </span>
                <textarea 
                    name="bio"
                    placeholder="descrição do usuário"
                    onChange={(e) => setBio(e.target.value)}
                    value={bio}
                >
                </textarea>
            </label>
            <label>
                <span>funcao no sistema:</span>
                <select 
                    name="funcao" 
                    value={role} 
                    onChange={(e) => setRole(e.target.value)}
                >
                    <option value="user">usuario</option>
                    <option value="admin">administrador</option>
                </select>
            </label>
            <input type="submit" value="Enviar"/>
        </form>
    </div>
  )
}

export default MyForm