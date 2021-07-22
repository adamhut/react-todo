import React from 'react'
import useFetch from '../../hooks/useFetch'

export default function Reddit() {

    const {
        data: posts,
        isLoading,
        errorMessage
    } = useFetch('https://www.reddit.com/r/aww.json');



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
                            posts.data.children.map((post,idx) => {
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
