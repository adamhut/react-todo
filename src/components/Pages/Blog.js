import React from 'react'
import { Link } from "react-router-dom";


export default function Blog() {
    return (
        <div className="container mx-auto text-center mt-16">
            <ul>
                <li>
                    <Link to="/blog/1">Blog one
                    </Link>

                </li>
                <li>
                    <Link to="/blog/2">Blog T
                    </Link>

                </li>
            </ul>
        </div>
    )
}
