import { useContext, useEffect } from 'react';
import { PlayListContext, type PlayListType } from '../context/context';
import Card from '../components/Card';

const Async = () => {
    const { playList } = useContext(PlayListContext) as PlayListType;

    return (
        <>  
            <div className="flex justify-center py-20 w-full bg-gray-100 dark:bg-gray-900">
                <div className="grid grid-cols-4 gap-6">
                    {playList.map((pl, index) => (
                        <Card key={index} duration={pl.duration} title={pl.title} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Async;