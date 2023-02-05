import React, { createContext, useContext, useState } from "react"

type Props = {
  children: React.ReactNode
}

export type SearchContextType = {
  text: string,
  updateText: (text: string) => void,
  isClicked: boolean,
  checkClicked: () => boolean,
  setClicked: (isClicked: boolean) => void
}

export const SearchContext = createContext<SearchContextType | null>(null)

export const SearchContextProvider = ({ children }: Props) => {
  const [text, setText] = useState('')
  const [isClicked, setIsClicked] = useState(false)

  const updateText = (text: string) => setText(text);
  const checkClicked = () =>  { return isClicked };
  const setClicked = (isClicked: boolean) => setIsClicked(isClicked);

  return (
    <SearchContext.Provider value={{ text, updateText, isClicked, setClicked, checkClicked }}>
      { children }
    </SearchContext.Provider>
  )
}
