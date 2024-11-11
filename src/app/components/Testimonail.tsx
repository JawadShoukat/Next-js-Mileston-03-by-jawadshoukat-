import React from 'react'
import Image from 'next/image'

const Testimonail = () => {
  return (
    <div>
       <div className='container pt-16 pb-16 gird-cols-2 bg-white'>
        <h2 className='font-bold text-4xl pb-4'> Owner </h2>
        <div className='gird lg:gird-cols-[300px,1fr] gap-4'>
            <div className='border border-sky rounded-2xl gird place-items-stretch p-6 lg:p-0'>
                <div className='text-center flex flex.col items-center gap-1'>

                  <Image
                  className='rounded-full inline-block'
                  src="/user.jpg"
                  width={200}
                  height={300}
                  alt='dp' 
                  />
                <h2 className='text-gray font-extrabold text-[20px] '><b>(Jawad Shoukat)</b></h2><br></br><br></br>
                  <p className='font-semibold '>Frontend Developer </p>

                 

                  <p className='max-w-[200px] text-blackish font-serif'>
                  I am an IT student currently studying at GIAIC. I have built more than 10 websites, including my portfolio, Countdown Timer App, Weather App, and E-commerce websites. These websites provide users with ease in searching for various items.
                  </p>
                  


                </div>
            </div>



         <div className='bg-red bg-[url(/summer-1.jpg)] bg-cover h-[500px] rounded-2xl gird place-items-center'>
         <div className='bg-sky min-w-[270px] sm:main-w-[300px] md:min-w-[500px] rounded-xl py-8 sm:px-8 px-2
         gird place-items-center gap-3'>
            <button className='bg-blackish text-white p-2 rounded-md'>
                25% DISCOUNT
            </button>
            <h2 className='font-extrabold text-2xl text-[#272727]'>
                Summer Collection
            </h2>
            <p className='text-gray text-[20px]'>
                Starting @ $20 <b>Shop Now</b>
            </p>
         </div>
         </div>





        </div>
       </div>
    </div>
  )
}

export default Testimonail