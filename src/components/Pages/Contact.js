import React, { useState, useReducer } from 'react'
import fakeLogin from './../fakeLogin';


const initialState = {
    username: '',
    password: '',
    isLoading: false,
    error: null,
}


function reducer(state, action) {
    switch (action.type) {
        case 'beforeLogin':
            return {
                ...state,
                isLoading: true,
                error: null,
            };

        case 'success':
            return {
                ...state,
                username: '',
                password: '',
            };
        case 'error':
            return {
                ...state,
                password: '',
                error: 'Sorry! There was an error logging you in.',
            };
        case 'notLoading':
            return {
                ...state,
                isLoading: false,
            };

        case 'updateField':
            return {
                ...state,
                [action.field]: action.value,
            };
        default:
            return state;
    }
}


export default function Contact() {
    const [state, dispatch] = useReducer(reducer, initialState)

    function handleLogin(e) {
        e.preventDefault();

        dispatch({ type: 'beforeLogin' });

        fakeLogin(state.username, state.password)
            .then(response => {
                alert('Logged in successfully');
                dispatch({ type: 'success' });
            })
            .catch(error => {

                dispatch({ type: 'error' });

            })
            .finally(() => {
                dispatch({ type: 'notLoading' });
            });
    }

    return (
        <div className="container mx-auto text-center mt-16 max-w-3xl">
            <form action="#" method="POST" onSubmit={handleLogin}>
                {state.error && <p className="error text-red-600 my-2">{state.error}</p>}
                <div className="form-input my-2">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        className="input"
                        id="username"
                        onChange={e =>
                            dispatch({
                                type: 'updateField',
                                field: 'username',
                                value: e.target.value
                            })
                        }
                        value={state.username}
                    />
                </div>
                <div className="form-input">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        className="input"
                        onChange={e => dispatch({ type: 'updateField', field: 'password', value: e.target.value })}
                        value={state.password}
                    />
                </div>
                <div className="form-input">
                    <button className="button">Login</button>
                    {state.isLoading && <span>Loading...</span>}
                </div>
            </form>
        </div>
    )
}
