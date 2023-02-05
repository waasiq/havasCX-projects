import React, { useContext, useEffect } from 'react'
import { SearchContext, type SearchContextType } from '../Context/context'
import axios from 'axios'
import SearchBar from './SearchBar'
import { Card, type CardInterface } from './Card'

const Dashboard: React.FC = () => {
  const { isClicked, setClicked } = useContext(SearchContext) as SearchContextType
  const { text } = useContext(SearchContext) as SearchContextType
  const [cards, setCards] = React.useState<CardInterface[]>([])
  const [resultCount, setResultCount] = React.useState<number>(0)

  const [filteredCards, setFilteredCards] = React.useState<CardInterface[]>([])
  const [filtered, setFiltered] = React.useState<boolean>(false)

  useEffect(() => {
    if (isClicked) {
      if (text.length > 0 && text !== ' ') {
        const filtered = cards.filter((card) => {
          return card.body.toLowerCase().includes(text.toLowerCase())
        })

        if (filtered.length > 0) {
          setFilteredCards(filtered)
          setResultCount(filtered.length)
        } else {
          setFilteredCards([])
          setResultCount(0)
        }
        setFiltered(true)
      } else {
        try {
          setFilteredCards([])
          setFiltered(false)

          axios.get('https://jsonplaceholder.typicode.com/posts/')
            .then((response) => {
              setCards(response.data)
              setResultCount(response.data.length)
            })
            .catch((error) => {
              console.log(error)
            })
        } catch (error) {
          console.log(error)
        }
      }
    }
    setClicked(false)
  }, [isClicked])

  return (
    <React.Fragment>
        <div className="dark:bg-gray-900 min-h-screen">
        <div className="bg-slate-600">
                <SearchBar />
                <p className="text-center text-white ">Results: {resultCount}</p>
            </div>

            <div className="flex justify-center py-20 w-full h-16 bg-gray-100 dark:bg-gray-900">
                <div className="grid grid-cols-4 gap-6">
                    {filtered
                      ? filteredCards.length === 0
                        ? <p className="absolute left-9/20  font-medium  text-xl  text-gray-700 dark:text-gray-400">No Cards Found</p>
                        : filteredCards.map((card) => {
                          return (
                                <Card key={card.id} userId={card.userId} id={card.id} title={card.title} body={card.body} />
                          )
                        })
                      : cards.length > 0 &&
                    cards.map((card) => {
                      return (
                            <Card key={card.id} userId={card.userId} id={card.id} title={card.title} body={card.body} />
                      )
                    })}
                </div>
            </div>
            </div>
        </React.Fragment>
  )
}

export default Dashboard
