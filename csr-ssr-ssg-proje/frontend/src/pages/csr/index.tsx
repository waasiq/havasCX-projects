import React from 'react'
import Navbar from '@/components/Navbar'
import Body from '@/components/Body'

interface dataInterface {
    title: string;
    author: string;
    body: string;
}

const CSRPage = () => {
    const [data, setData] = React.useState<dataInterface>({ title: '', author: '', body: '' });

    React.useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('http://localhost:1337/api/data')
            const data = await res.json()
            setData(data[0])
        }
        fetchData();
    }, [])
    

    return (
        <div>
            <Navbar heading='CSR Page' />
            <div className="mx-auto flex flex-col justify-between w-2/5 gap-5 mt-12">
                <Body title={data.title} author={data.author} body={data.body} />
            </div>
        </div>
    )
}

export default CSRPage;
