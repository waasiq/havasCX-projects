import React from 'react'
import Dropdown from './Dropdown'
export interface PostCardInterface {
  id: number
  duration: number
  title: string
  author: string
  src: string
}

const Card: React.FC<PostCardInterface> = (props) => {
  const { id, duration, title, author , src } = props

  return (
    <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <img className="object-cover object-center w-full h-56 mb-6 rounded-lg" src={src} alt="avatar" />
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        <button className="float-right"> <Dropdown id={id} duration={duration} author={author} /> </button>
    </a> 
  )
}

export default Card