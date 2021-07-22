import React, { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch';

export default function Joke() {

    const {
        data: joke,
        isLoading,
        errorMessage
    } = useFetch('https://official-joke-api.appspot.com/jokes/random');

    // const [joke, setJoke] = useState(null);
    // const [isLoading, setIsLoading] = useState(true);
    // const [errorMessage, setErrorMessage] = useState(null);
    // useEffect(() => {
    //     fetch('https://official-joke-api.appspot.com/jokes/random')
    //         .then(response => response.json())
    //         .then(result => {
    //             setJoke(result.setup + ' ' + result.punchline );
    //             setIsLoading(false);
    //         })
    //         .catch(error => {
    //             setIsLoading(false);
    //             setErrorMessage('There is an Error!!!');
    //         })
    // }, [])

    return (
        <div>
            <h2>Joke Api</h2>

            {
                isLoading && (
                    <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                        <div className="animate-pulse flex space-x-4">
                            <div className="rounded-full bg-blue-400 h-12 w-12"></div>
                            <div className="flex-1 space-y-4 py-1">
                                <div className="h-4 bg-blue-400 rounded w-3/4"></div>
                                <div className="space-y-2">
                                    <div className="h-4 bg-blue-400 rounded"></div>
                                    <div className="h-4 bg-blue-400 rounded w-5/6"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

            {
                errorMessage && (
                    <div className="text-red-500 font-bold">
                        {errorMessage}
                    </div>
                )
            }


            {
                !isLoading && joke && (
                    <ul className="space-y-2">
                        <li className="flex items-center">
                            <span>{joke.setup + ' ' + joke.punchline  }</span>
                        </li>
                    </ul>
                )
            }

        </div>
    )
}
