import React from 'react'

import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const HeaderTop = () => {
  return (
    <div className='border-b border-gray-200 hidden sm:block bg-sky'>
      <div className='container py-4'>
        <div className='flex justify-between items-center'>
          <div className="hedden lg:flex gap-1">
            <div className="header_top_icon_wrapper">
              <BsFacebook/>
            </div>
            <div className="header_top_icon_wrapper">
              <BsTwitter/>
            </div>
            <div className="header_top_icon_wrapper">
              <BsInstagram/>
            </div>
            <div className="header_top_icon_wrapper">
              <BsLinkedin/>
            </div>
          </div>



<div className='text-gray-500 text-[12px'>
  <b>FREE SHIPPING</b> THIS WEER ORDER OVER -$55 <br></br>
  <h2 className='text-center font-bold'>JAWAD SHOUKAT</h2>
</div>


<div className='flex gap-4'>
  <select
  className='text-gray-500 text-[12px] w-[70px] bg-sky'
  name="corrency"
  id="currency"
  >
    <option value="USD $">USD $</option>
    <option value="EUR">EUR</option>
    <option value="PKR">PKR</option>
    <option value="Rial">SUI</option>
  </select>

  <select 
  className='text-gray-500 text-[12px] w-[80px] bg-sky'
  name="Language"
  id="Language"
  >
    <option value="English">English</option>
    <option value="French">French</option>
    <option value="Urdu">Urdu</option>  
    <option value="Sindhi">Sindhi</option>  

  </select>
</div>


        </div>
      </div>
    </div>
  )
}

export default HeaderTop