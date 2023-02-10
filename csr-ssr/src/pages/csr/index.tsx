// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import React from 'react'

const CSRPage = () => {
    React.useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('http://localhost:1337/api/data')
            const data = await res.json()
            console.log(data);
        }
        fetchData();
    }, [])
    

    return (
        <div>
        <h1>CSR</h1>
        </div>
    )
}

export default CSRPage;
