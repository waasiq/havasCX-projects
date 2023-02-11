import { NextPage } from 'next'
import Body from '@/components/Body'
import Navbar from '@/components/Navbar'

interface Props { 
    data: any
}

const SSRPage: NextPage<Props> = ({data}) => {
    return (
        <div>
            <Navbar heading='SSR Page' />
            <div className="mx-auto flex flex-col justify-between w-2/5 gap-5 mt-12">
                <Body title={data[0].title} author={data[0].author} body={data[0].body} />
            </div>
        </div>
    )
}

export async function getServerSideProps() {
    const res = await fetch('http://127.0.0.1:1337/api/data')
    const data = await res.json()

    return { props: { data } }
}

export default SSRPage