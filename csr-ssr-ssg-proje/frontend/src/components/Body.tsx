import React from 'react'

interface BodyProps {
    title: string;
    author: string;
    body: string;
}

const Body = ({ title, author, body }:BodyProps) => {
    return (
        <React.Fragment>
            <h2 className="text-6xl font-bold mb-4">{title}</h2>
            <p className="text-xl italic">{author}</p>
            <p className="text-2l text-justify">{body}</p>
        </React.Fragment>
    )
}

export default Body