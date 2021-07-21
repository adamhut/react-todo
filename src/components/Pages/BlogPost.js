import React from 'react'
import { useParams } from 'react-router-dom'

export default function BlogPost(props) {
    // console.log(props)
    let { id } = useParams()
    return (
        <div className="container mx-auto text-center mt-16">
            This is a blog post { id }
        </div>
    )
}
