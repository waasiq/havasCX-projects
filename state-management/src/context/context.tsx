import React, { createContext, useState } from 'react'

interface ContextProps {
  children: React.ReactNode
}

export class PlayList {
  title: string;
  duration: number;

  constructor(title: string, duration: number) {
    this.title = title;
    this.duration = duration;
  }
}

export interface PlayListType {
  playList: PlayList[];
}

export const PlayListContext = createContext<PlayListType | null>(null)

export const PlayListProvider: any = ({ children }: ContextProps) => {
  const [playList, setPlayList] = useState<PlayList[]>([])

  React.useEffect(() => {
    const fetchPlayList = async () => {
      const data = await fetch('https://jsonplaceholder.typicode.com/albums')
        .then(response => response.json())
        .then(json => { 
            return json.map((item: any) => {
              return new PlayList(item.title, item.id)
            })
         })

        setPlayList(data);
    }
    fetchPlayList()
  }, [])

  return (
    <PlayListContext.Provider value={{ playList }}>
      { children }
    </PlayListContext.Provider>
  )
}