'use client'
import { data } from 'autoprefixer';
import useSWR from 'swr';
import { Fragment, useState, useEffect } from 'react'
import { Listbox } from '@headlessui/react'


const baseURL = "https://0zwhtezm4f.execute-api.ap-south-1.amazonaws.com/TryItFirst"
const api1 = "/brandsofaowner"
const parameter = "?ownerID=1"


const fetcher2 = (url) => fetch(url).then((res) => res.json());

const fetcher = async function JataFetch(param) {
    const response = await fetch(param);
    const data = await response.json();
    return data;

}



function AmrFetch() {



    const [selectedBrand, setSelectedBrand] = useState(null);
    const [selectedCatList, setSelectedCatList] = useState([]);
    const [selectedCat, setSelectedCat] = useState(null);



    const { data, error, isLoading } = useSWR(baseURL + api1 + parameter, fetcher)

    useEffect(() => {
        if (data != null) {
            setSelectedBrand(data.brandList[0]);
            console.log(selectedBrand)

        }
    }, [data]);


    useEffect(() => {
        if (selectedBrand != null) {

            console.log("in selectedBrad UE " + selectedBrand.brandName)
            setSelectedCatList(selectedBrand.categories);
            

        }
    }, [selectedBrand]);

    useEffect(() => {
        if (selectedCatList != null) {

            console.log("in selectedCatList use effect " + selectedCatList.length)
            setSelectedCat(selectedCatList[0]) 

        }
    }, [selectedCatList]);


    useEffect(() => {
        if (selectedCat != null) {

            console.log("in selectedCat use effect " + Object.keys(selectedCat)[0].toString())
            

        }
    }, [selectedCat]);

    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>






    return (
        <div className="p-6">
    
            {selectedBrand && (
                <Listbox as="div" value={selectedBrand} onChange={setSelectedBrand}>
                    <Listbox.Button className="p-2 border rounded-md bg-white hover:bg-gray-100 transition duration-150 ease-in-out">
                        {selectedBrand.brandName}
                    </Listbox.Button>
                    <Listbox.Options className="mt-2 border rounded-md shadow-lg bg-white">
                        {data.brandList.map((brand) => (
                            <Listbox.Option key={brand.brandID} value={brand} className="cursor-pointer select-none relative px-4 py-2 hover:bg-gray-200 transition duration-150 ease-in-out">
                                {brand.brandName}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Listbox>
            )}
    
            {selectedCatList && (
                <Listbox as="div" value={selectedCat} onChange={setSelectedCat} className="mt-4">
                    <Listbox.Button className="p-2 border rounded-md bg-white hover:bg-gray-100 transition duration-150 ease-in-out">
                        {selectedCat? Object.keys(selectedCat)[0].toString() : "Select a category"}
                    </Listbox.Button>
                    <Listbox.Options className="mt-2 border rounded-md shadow-lg bg-white">
                        {selectedCatList.map((categoryObj, idx) => {
                            const categoryName = Object.keys(categoryObj)[0].toString();
                            return (
                                <Listbox.Option key={idx} value={categoryObj} className="cursor-pointer select-none relative px-4 py-2 hover:bg-gray-200 transition duration-150 ease-in-out">
                                    {categoryName}
                                </Listbox.Option>
                            );
                        })}
                    </Listbox.Options>
                </Listbox>
            )}
            <div className="mt-4 text-gray-600">
                hello {data.brandList[0].brandAddress}!
            </div>
        </div>
    )
}





export default AmrFetch