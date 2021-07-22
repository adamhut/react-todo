import React, { useEffect, useState } from 'react'

export default function Reddit() {

    const [posts, setPosts] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {

        fetch('https://www.reddit.com/r/aww.json')
            .then(response => response.json())
            .then(result => {
                setPosts(result.data.children);
                setIsLoading(false);
            })
            .catch(error => {
                setIsLoading(false);
                setErrorMessage('There is an Error!!!');
            })

    }, [])



    return (
        <div>
            <h2>Reddit Api</h2>

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
                       { errorMessage }
                    </div>
                )
            }


            {
                !isLoading && posts && (
                    <ul className="space-y-2">
                        {
                            posts.map((post,idx) => {
                                return (
                                    <li key={post.data.id} className="flex items-center">
                                        <img src={post.data.thumbnail} alt="" className="w-8 h-8 rounded-full object-cover" />
                                        <a className="ml-8" href={`https://www.reddit.com/${post.data.permalink}`}>{ post.data.title }</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                )
            }

        </div>
    )
}
