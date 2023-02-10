import { NextPage } from "next";

interface Props { 
    data: any
}

const SSRPage: NextPage<Props> = ({data}) => {
    console.log(data);
    return (
        <div>
        </div>
    )
}

SSRPage.getInitialProps = async (ctx) => {
    const res = await fetch('http://localhost:1337/api/data')
    const data = await res.json()
    return { data }
}

export default SSRPage