import React from 'react'
import { useRouter } from 'next/router'


const Email = (props) => {
    return (

        <div className="relative overflow-x-auto md:m-8 m-1">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                {/* <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                        </th>
                        <th scope="col" className="px-6 py-3">
                        </th>
                        <th scope="col" className="px-6 py-3">
                        </th>
                        </tr>
                        </thead> */}
                <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 cursor-pointer flex flex-col" >
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Basket Name::
                            {props.data.Name}
                        </th>
                        <td className="px-6 py-4">
                            Email::
                            {props.data.Email}
                        </td>
                        <td className="px-6 py-4">
                            Password::
                            {props.data.Pass}
                        </td>

                    </tr>

                </tbody>

            </table>
        </div>

    )
}


export async function getServerSideProps(context) {

    const { pid } = context.query

    const res = await fetch(`https://getpantry.cloud/apiv1/pantry/0b32f6c1-ae41-4ec1-9faf-71fa0a75a3a6/basket/${pid}`)
    const data = await res.json()
    return {
        props: { data }, // will be passed to the page component as props
    }
}

export default Email