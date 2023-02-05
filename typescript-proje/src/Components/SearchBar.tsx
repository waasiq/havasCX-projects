import React, { useContext, useState } from 'react';
import { SearchContext, SearchContextType } from '../Context/context';   
import Button from './Button';

const SearchBar:React.FC = () => {
    const { text, updateText }= useContext(SearchContext) as SearchContextType;
 
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        updateText(e.target.value);
    }   

    return (
        // search bar is fixed to the top of the page padding from top should be 3 rem
        // onhover search bar should lift up a bit
        <div className="flex justify-center py-20 w-full h-16 bg-gray-100 dark:bg-gray-900">
            <input
                type="text"
                onChange={onChange} 
                className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none hover:border-gray-400 dark:bg-gray-800 dark:text-white dark:border-gray-700"
                placeholder="Search" 
            />
            <Button text={text} />
        </div>
    )
};

export default SearchBar;