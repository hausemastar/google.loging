import React, { useEffect, useState } from 'react'

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
            <p className='w-full text-center bg-blue-300 p-5 font-semibold'>{data}</p>

            <button onClick={CheckPantryId} type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-[4px] text-sm px-7 py-2.5 m-2 ">Check Pantry</button>
            <a target="_blank" href="https://vercel.com/hausemastar/google-loging/settings/environment-variables">

                <button onClick={CheckPantryId} type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-[4px] text-sm px-7 py-2.5 m-2 ">Add Pantry</button>
            </a>


        </>
    )



}
export default Pantry