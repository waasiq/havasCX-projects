import React from 'react'

export interface CardInterface {
  title: string
  body: string
  userId: number
  id: number
}

export const Card: React.FC<CardInterface> = ({ userId, id, title, body }) => {
  return (
        <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
            <p className="font-normal text-justify text-gray-700 dark:text-gray-400">{body}</p>

            {/* userid and id will have separate color background box */}
            <div className="flex justify-between mt-4 ">
                <div className="bg-slate-300 p-2 rounded-md">
                    <p className="text-sm ">userID: {userId}</p>
                </div>
                <div className="bg-slate-300 p-2 rounded-md">
                    <p className="text-sm">ID: {id}</p>
                </div>
            </div>
        </a>
  )
}
