'use client'

import { use, useState } from 'react'

export default function SingIn() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return <div>

        <div className='signin-container'>
            <div className='signin-box'>
                <h1 className='text-2xl font-bold mb-4'>Sign In</h1>
                <div>Username</div>
                <input type="text" placeholder='Username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} />
                <div>Password</div>
                <input type="password" placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                <button className='bg-blue-500 text-white px-4 py-2 rounded mt-4'>
                    Sign In
                </button>
            </div>


        </div>
    </div>
}