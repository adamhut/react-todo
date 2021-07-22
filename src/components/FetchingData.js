import React, { useState } from 'react'
import Joke from './Pages/Joke';
import Reddit from './Pages/Reddit';

export default function FetchingData() {

    const [redditVisible, setRedditVisible] = useState();
    const [jokeVisible, setJokeVisible] = useState();

    return (
        <div>
            <div className="buttons space-x-2">
                <button className="border  px-2 py-2 rounded" onClick={() =>  setRedditVisible(prevRedditVisible => !prevRedditVisible)  }>
                    Toggle Reddit
                </button>
                <button className="border  px-2 py-2 rounded"  onClick={() => setJokeVisible(prevJokeVisible => !prevJokeVisible)}>
                    Toggle Joke
                </button>
            </div>
            {redditVisible && <Reddit />}
            {jokeVisible && <Joke />}
        </div>
    )
}
