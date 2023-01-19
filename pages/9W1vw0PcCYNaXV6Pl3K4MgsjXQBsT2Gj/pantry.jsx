import React, { useEffect, useState } from 'react'
import Link from 'next/link'
const Pantry = () => {


    const [data, setData] = useState("Pantry key")


    const CheckPantryId = async () => {


        const res = await fetch(`https://getpantry.cloud/apiv1/pantry/${process.env.NEXT_PUBLIC_PANTRY_KEY}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST,PATCH,OPTIONS'
            },
        })
            .catch((error) => {
                setData(`Fetch failed try again Status:500}`)
                console.error('Error:', error);
            });


        const s = res.status
        if (res.status === 400) {

            setData(`Pantry key ${process.env.NEXT_PUBLIC_PANTRY_KEY} Not found`)
        }

        else {

            const e = await res.json()
            console.log(e)
            setData(`Key available '${e.name}' Status:${s}`)
        }

    }



    return (
        <>
            <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
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
            <p className='w-full text-center bg-blue-300 p-5 font-semibold '>{data}</p>

            <button onClick={CheckPantryId} type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-[4px] text-sm px-7 py-2.5 m-2 ">Check Pantry</button>
            <a target="_blank " rel="noreferrer" href="https://vercel.com/hausemastar/google-loging/settings/environment-variables">

                <button onClick={CheckPantryId} type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-[4px] text-sm px-7 py-2.5 m-2 ">Add Pantry</button>
            </a>

            <a target="_blank" rel="noreferrer" href="https://getpantry.cloud/">

                <button onClick={CheckPantryId} type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-[4px] text-sm px-7 py-2.5 m-2 ">Get Pantry key</button>
            </a>


        </>
    )



}
export default Pantry