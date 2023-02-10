import { NextPage } from "next";

interface Props { 
    data: any
}

const SSGPage: NextPage<Props> = ({ data }) => {
    console.log(data)
    return (
        <div>
            <h1>Blog</h1>
        </div> 
    )
}

export async function getStaticProps() {
    const res = await fetch('http://localhost:1337/api/data')
    const data = await res.json()

    return {
        props: {
            data,
        },
    }
}
  
export default SSGPage