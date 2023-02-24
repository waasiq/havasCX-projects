import React, { createContext, useState } from 'react'

interface ContextProps {
  children: React.ReactNode
}

export class Posts {
  id: number;
  title: string;
  author: string;
  duration: number;
  src: string;


  constructor(id: number, title: string, author: string, duration: number, src:string) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.duration = duration;
    this.src = src;
  }
}

export interface PostType {
  posts: Posts[];
  setPosts: React.Dispatch<React.SetStateAction<Posts[]>>;
}

export const PostContext = createContext<PostType | null>(null)

export const PostProvider: any = ({ children }: ContextProps) => {
  const [posts, setPosts] = useState<Posts[]>([])

  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      { children }
    </PostContext.Provider>
  )
}