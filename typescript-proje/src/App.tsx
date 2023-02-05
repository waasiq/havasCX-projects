import React from 'react';
import Dashboard from './Components/Dashboard';
import Button from './Components/Button';
import SearchBar from './Components/SearchBar';
import { SearchContextProvider } from './Context/context';
import './App.css';

const App:React.FC = () => {
  return (
    <SearchContextProvider>
        <Dashboard />
    </SearchContextProvider>
  );
}

export default App;
