import React, { useContext } from 'react'
import { SearchContext, type SearchContextType } from '../Context/context'

interface ButtonProps {
  text: string
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  const { isClicked, setClicked } = useContext(SearchContext) as SearchContextType

  const onClick = (): void => {
    setClicked(true)
  }

  return (
    <div className='px-10'>
        <button onClick={onClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Click Me!
        </button>
    </div>
  )
}

export default Button
