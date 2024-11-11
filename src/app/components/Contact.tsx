import React from 'react'

const Contact = () => {
  return (
    <div
    className="max-w-[1000px] mx-auto flex flex-col lg:flex-row text-white p-8 
                  rounded-lg space-y-8 lg:space-y-0 lg:space-x-8 border"
    id="contact"
  >
    <div className="flex justify-center items-center ">
      <ul className="space-y-4">
        <li className="flex items-center">

        </li>

        <li className="flex items-center">

        </li>
      </ul>
    </div>
      
      <div className="bg-gray p-6 rounded-xl max-w-[550px]">
      <h2 className="text-5xl font-bold text-blackish mb-4 font-serif">CONTACT US</h2>
      <p className="text-blackish mb-6"> Send me a message and lets schedule a call</p>
      <form className="space-y-4" action="https:getfrom."  method="POST">
        <div className="grid md:grid-cols-2 gap-4">
          <input className="bg-blackish rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-red" placeholder="First Name" type="text" />
          <input className="bg-blackish rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-red" placeholder="Last Name" type="text" />
          <input className="bg-blackish rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-red" placeholder="Email" type="email" />
          <input className="bg-blackish rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-red" placeholder="Phone" type="phone" />
        </div>
        <textarea name="" id="" className="bg-blackish  w-full rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400" placeholder="Your message"/>
        <button className="bg-red hover:bg-sky text-white px-6 py-2 w-full font-semibold text-xl rounded-xl" > Send Message</button>
      </form>
      </div>

  </div>
  )
}

export default Contact 