'use client'
import useSWR  from 'swr';


const baseURL = "https://0zwhtezm4f.execute-api.ap-south-1.amazonaws.com/TryItFirst"
const api1 = "/brandsofaowner"
const parameter = "?ownerID=1"


const fetcher = (url) => fetch(url).then((res) => res.json());

function AmrFetch() {

    const { data, error, isLoading } = useSWR(baseURL+api1+parameter, fetcher)
 
    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>
    return <div>hello {data.brandList[0].brandAddress}!</div>
}





export default AmrFetch