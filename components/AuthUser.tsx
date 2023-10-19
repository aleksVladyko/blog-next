'use client'
import { useStore } from '@nanostores/react'
import { $users, User, addUser } from '@/store/users'
import { useState } from 'react'

const AuthUser = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const allUsers = useStore($users)

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setPassword(event.target.value)
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()

        const user: User = { email, password }
        addUser(user)

        setEmail('')
        setPassword('')
    }

    console.log(allUsers)

    return (
        <div className="d-flex justify-content-center align-items-center flex-column mt-4">
            <form
                // onSubmit={handleSubmit}
                style={{ height: '200px' }}
                className="
               flex-column
               gap-2
               p-2
               align-items-end
                 "
            >
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={email}
                        placeholder="enter @email"
                        onChange={handleEmailChange}
                    />
                </label>
                <label>
                    Pass:
                    <input
                        type="password"
                        name="password"
                        value={password}
                        placeholder="enter pass"
                        onChange={handlePasswordChange}
                    />
                </label>
                <button onClick={handleSubmit}>LogIn</button>
            </form>
            <ul className="d-flex flex-row">
                {allUsers.map(({ email }, i) => (
                    <li key={i}>
                        <h3>Привет: {email}</h3>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default AuthUser
