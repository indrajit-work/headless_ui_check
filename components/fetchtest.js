'use client'
import { data } from 'autoprefixer';
import useSWR  from 'swr';


const baseURL = "https://0zwhtezm4f.execute-api.ap-south-1.amazonaws.com/TryItFirst"
const api1 = "/brandsofaowner"
const parameter = "?ownerID=1"


const fetcher2 = (url) => fetch(url).then((res) => res.json());

const fetcher = async function JataFetch(param)
{
    const response = await fetch(param);
    const data = await response.json();
    return data;
    
}

function AmrFetch() {

    const { data, error, isLoading } = useSWR(baseURL+api1+parameter, fetcher)
 
    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>
    return <div>hello {data.brandList[0].brandAddress}!</div>
}





export default AmrFetch