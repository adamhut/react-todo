import React, { useState, useReducer } from 'react'

const initialState = {
    count: 0,
}

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };

        case 'decrement':
            return { count: state.count - 1 };

        default:
            return state;
    }
}


export default function About() {

    const [state, dispatch] = useReducer(reducer, initialState)


    return (
        <div className="container mx-auto text-center mt-16">
            This is the about page
            <div>Count :{state.count}</div>
            <div className="mt-4">
                <button className="px-2 py-1 border border-gray-700 rounded mx-2" onClick={() => dispatch({ type: 'increment' })}>increase</button>
                <button className="px-2 py-1 border border-gray-700 rounded mx-2" onClick={() => dispatch({ type: 'decrement' })}>decrease</button>
            </div>
        </div>
    )
    // const [count, setCount] = useState(0);
    // function increment() {
    //     setCount(prevCount => prevCount + 1);
    // }


    // function decrement() {
    //     setCount(prevCount => prevCount - 1);
    // }

    // return (
    //     <div className="container mx-auto text-center mt-16">
    //         This is the about page
    //         <div>Count :{count}</div>
    //         <div class="mt-4">
    //             <button class="px-2 py-1 border border-gray-700 rounded mx-2" onClick={increment}>increase</button>
    //             <button class="px-2 py-1 border border-gray-700 rounded mx-2" onClick={decrement}>decrease</button>
    //         </div>
    //     </div>
    // )

}
