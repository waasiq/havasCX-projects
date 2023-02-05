import React, { useContext, useEffect } from 'react';
import { SearchContext, SearchContextType } from '../Context/context';
import axios from 'axios';
import SearchBar from './SearchBar';
import { Card, CardInterface } from './Card';

const Dashboard:React.FC = () => {
    const { isClicked, setClicked } = useContext(SearchContext) as SearchContextType;
    const [cards, setCards] = React.useState<CardInterface[]>([]);

    useEffect(() => {
        if (isClicked) {
            try{
                axios.get('https://jsonplaceholder.typicode.com/posts/')
                    .then((response) => {
                        setCards(response.data);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
            catch (error) {
                console.log(error);
            }
        }
        setClicked(false);
    }, [isClicked]);

    
    return (
        <React.Fragment>
            <div className="dark:bg-gray-900 min-h-screen">
            <SearchBar />
            <div className="flex justify-center py-20 w-full h-16 bg-gray-100 dark:bg-gray-900">
                <div className="grid grid-cols-4 gap-6">
                    {cards.map((card) => {
                        return (
                            <Card key={card.id} userId={card.userId} id={card.id} title={card.title} body={card.body} />
                        )
                    })}

                </div>
            </div>
            </div>
        </React.Fragment>
    )
};

export default Dashboard;