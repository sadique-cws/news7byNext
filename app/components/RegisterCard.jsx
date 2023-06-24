"use client"
import React, { useState } from 'react'

const RegisterCard = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        let data = await fetch("http://127.0.0.1:3000/api/user",{
            method:"POST",
            body:JSON.stringify({name,email,password}),
            headers:{
                "Content-Type":"application/json"
            }
        })

        data = await data.json();
        alert(data.msg)

    }

  return (
    <div className='bg-slate-200 rounded px-4 py-8'>
        <form action="" method='post' onSubmit={handleSubmit}>
            <div className="mb-3 flex flex-col">
                <label htmlFor="name">Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} id='name' className="border border-slate-700" />
            </div>
            <div className="mb-3 flex flex-col">
                <label htmlFor="email">email</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} id='email' className="border border-slate-700" />
            </div>
            <div className="mb-3 flex flex-col">
                <label htmlFor="password">password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id='password' className="border border-slate-700" />
            </div>
            <div className="mb-3 flex justify-end">
                <button type='submit' className='bg-teal-500 rounded hover:bg-teal-900 text-white px-3 py-2'>Register</button>
            </div>
        </form>
    </div>
  )
}

export default RegisterCard