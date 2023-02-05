import React from 'react'
import Dashboard from './Components/Dashboard'
import { SearchContextProvider } from './Context/context'

const App: React.FC = () => {
  return (
    <SearchContextProvider>
        <Dashboard />
    </SearchContextProvider>
  )
}

export default App
