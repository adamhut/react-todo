import React, { useState, useReducer } from 'react'
import fakeLogin from './../fakeLogin';




export default function Contact() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    function handleLogin(e) {
        e.preventDefault();

        setIsLoading(true);
        setError(null);

        fakeLogin(username, password)
            .then(response => {
                alert('Logged in successfully');
                setUsername('');
                setPassword('');
            })
            .catch(error => {
                setError('Sorry! There was an error logging you in.');
                setPassword('');
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    return (
        <div className="container mx-auto text-center mt-16 max-w-3xl">
            <form action="#" method="POST" onSubmit={handleLogin}>
                {error && <p className="error text-red-600 my-2">{error}</p>}
                <div className="form-input my-2">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        className="input"
                        id="username"
                        onChange={e => setUsername(e.target.value)}
                        value={username}
                    />
                </div>
                <div className="form-input">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        className="input"
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                    />
                </div>
                <div className="form-input">
                    <button className="button">Login</button>
                    {isLoading && <span>Loading...</span>}
                </div>
            </form>
        </div>
    )
}
