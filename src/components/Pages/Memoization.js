import React, { useState, useMemo } from 'react'



export default function Memoization(props) {

    const [count, setCount] = useState(0);
    const [arr, setArr] = useState([1, 2, 3]);

    console.log('I am renderingn');

    function increment() {
        setCount(prevCount => prevCount + 1)
    }

    function addNumber() {
        console.log('I take long to complete');
        for (let index = 0; index < 200000000; index++) { }//simlate slowness
        return arr.reduce((a, b) => a + b, 0);
    }


    const memoizedAddNumbers = useMemo(addNumber, [arr]);

    function changeArr() {
        setArr([1, 2, 3, 4])
    }

    return (
        <div>
            <div className="container mx-auto text-center mt-16">
                This is the Memoization page
                <div>Count :{count}</div>
                <div className="mt-4">
                    <button className="px-2 py-1 border border-gray-700 rounded mx-2" onClick={increment}>increase</button>
                </div>

                <div className="mt-5">
                    <button className="px-2 py-1 border border-gray-700 rounded mx-2" onClick={changeArr}>Change Array</button>
                    <div>
                        Expensive Computation: {memoizedAddNumbers}
                    </div>
                </div>
            </div>
        </div>
    )
}
