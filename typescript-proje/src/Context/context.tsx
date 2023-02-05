import React, { createContext, useState } from 'react'

interface Props {
  children: React.ReactNode
}

export interface SearchContextType {
  text: string
  updateText: (text: string) => void
  isClicked: boolean
  setClicked: (isClicked: boolean) => void
}

export const SearchContext = createContext<SearchContextType | null>(null)

export const SearchContextProvider: any = ({ children }: Props) => {
  const [text, setText] = useState('')
  const [isClicked, setIsClicked] = useState(false)

  const updateText = (text: string): void => { setText(text) }
  const setClicked = (isClicked: boolean): void => { setIsClicked(isClicked) }

  return (
    <SearchContext.Provider value={{ text, updateText, isClicked, setClicked }}>
      { children }
    </SearchContext.Provider>
  )
}
