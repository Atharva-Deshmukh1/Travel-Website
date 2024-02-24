import React from 'react'

const Card = (props) => {
    return (
        <div className=''>


            {/* <div class="max-w-sm w-[400px] h-72 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                <img class="rounded-t-lg h-[70%] " src={props.image} alt="" />

                <div class="p-5">

                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.Name} </h5>

                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.desc}</p>
                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        BOOK NOW
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
            </div> */}
            <div className='h-auto bg-gray-500 w-full flex justify-center   rounded-lg'>


                <div className=" h-[250px] w-[22rem]  p-2   rounded-lg ">


                    <img className=" h-[70%] w-full object-fill " src={props.image} alt="" />
                    <div className=''>
                        <p className='font-semibold'>{props.Name}</p>
                        <p className='font-normal'>{props.desc}</p>
                    </div>




                </div>

            </div >
        </div>
    )
}

export default Card
