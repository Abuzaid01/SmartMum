import React from 'react'
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { AiOutlineMessage } from "react-icons/ai";
import { MdOutlineDateRange } from "react-icons/md";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { RiChatPrivateLine } from "react-icons/ri";

const Services = () => {
  return (
    <div className="my-10">
      <div className="flex flex-col md:grid md:grid-cols-3 md:gap-2 md:m-10 md:justify-evenly md:px-10 justify-center items-center text-center gap-7">
        <div className=" flex flex-col justify-center items-center text-center rounded-2xl border bg-white mx-10 p-5 border-none shadow-2xl overflow-hidden ">
          <div className="flex flex-row relative justify-center text-center items-center mx-auto">
            
          <div className=" flex justify-center align-center text-center w-23 h-23 absolute sm:-top-13 -top-13 sm:-right-50 -right-40 bg-green-700 opacity-90 rounded-full "><FaArrowUpRightFromSquare className="flex absolute left-5 bottom-6 size-5 text-white text-center justify-center align-center " /></div>
          <div className="flex justify-center items-center text-center mx-auto text-green-700">
          <AiOutlineMessage className="flex justify-center align-center text-center size-11" />
           </div>
          </div>
          <h1 className=" text-2xl mb-2">Instant expert answers</h1>
          <p className="text-lg tracking-wide opacity-70">Get reliable information whether day or night, SmartMum Africa is just a message away  offering guidance</p>

        </div>
        <div className=" flex flex-col justify-center items-center text-center rounded-2xl border bg-white mx-10 p-5 border-none shadow-2xl overflow-hidden ">
          <div className="flex flex-row relative justify-center text-center items-center mx-auto">
            
          <div className=" flex justify-center align-center text-center w-23 h-23 absolute sm:-top-13 -top-13 sm:-right-50 -right-40 bg-green-700 opacity-90 rounded-full "><FaArrowUpRightFromSquare className="flex absolute left-5 bottom-6 size-5 text-white text-center justify-center align-center " /></div>
          <div className="flex justify-center items-center text-center mx-auto text-green-700">
          <MdOutlineCalendarMonth className="flex justify-center align-center text-center size-11" />
           </div>
          </div>
          <h1 className=" text-2xl mb-2">Personalized Guidance</h1>
          <p className="text-lg tracking-wide opacity-70">Get reliable information Whether day or night, SmartMum Africa is just a message away </p>

        </div>
        <div className=" flex flex-col justify-center items-center text-center rounded-2xl border bg-white mx-10 p-5 border-none shadow-2xl overflow-hidden ">
          <div className="flex flex-row relative justify-center text-center items-center mx-auto">
            
          <div className=" flex justify-center align-center text-center w-23 h-23 absolute sm:-top-13 -top-13 sm:-right-50 -right-40 bg-green-700 opacity-90 rounded-full "><FaArrowUpRightFromSquare className="flex absolute left-5 bottom-6 size-5 text-white text-center justify-center align-center " /></div>
          <div className="flex justify-center items-center text-center mx-auto text-green-700">
          <RiChatPrivateLine className="flex justify-center align-center text-center size-11" />
           </div>
          </div>
          <h1 className=" text-2xl mb-2">Completely private & Secure</h1>
          <p className="text-lg tracking-wide opacity-70">Get reliable informationWhether day or night, SmartMum Africa is just a message away  offering guidance</p>

        </div>

      </div>
    </div>
  )
}

export default Services