import React from 'react'
import { RiNumber1 } from "react-icons/ri";
import { RiNumber2 } from "react-icons/ri";
import { RiNumber3 } from "react-icons/ri";
import { GoSquareFill } from "react-icons/go";
import { GoDotFill } from "react-icons/go";

const HowItWorks = () => {
  return (
    <div>
      <div className='flex flex-col text-center' >
        <h1 className='font-semibold text-xl opacity-90'>How it works</h1>
        <p className='font-semibold text-2xl opacity-90 mb-5' >Get Started in 3 simple steps</p>
        <ol className='flex flex-col md:flex-row md:mx-auto md:gap-30 justify-start ml-10 list-none opacity-70 text'>
          <li className='flex mt-5 mb-5'> <div className='flex flex-row justify-center text-center text-orange-700'><RiNumber1 className='flex  size-10 text-center justify-center align-center -mt-3'/><GoSquareFill className='flex size-4 mt-3 -ml-3 mr-4 ' /></div>Click on “Chat on WhatsApp” button</li>
          <div className='hidden sm:block w-1 h-20 align-center bg-gray-500'></div>
          <li className='flex mt-5 mb-5'> <div className='flex flex-row justify-center text-center text-orange-700'><RiNumber2 className='flex  size-10 text-center justify-center align-center -mt-3'/><GoSquareFill className='flex size-4 mt-3 -ml-3 mr-4 ' /></div>Ask specific questions</li>
          <div className='hidden sm:block w-1 h-20 align-center bg-gray-500'></div>
          <li className='flex mt-5 mb-5'> <div className='flex flex-row justify-center text-center text-orange-700'><RiNumber3 className='flex  size-10 text-center justify-center align-center -mt-3'/><GoSquareFill className='flex size-4 mt-3 -ml-3 mr-4 ' /></div>Get guidance/support</li>
        </ol>
      </div>
      <div className='justify-center my-20  '>
        <h1 className='text-xl font-semibold text-center '>Who we work with</h1>
        <ul className='list-none ml-10 md:mx-auto text-center md:flex md:flex-row-2 md:gap-15 md:px-15 mt-10 '>
          <li className='text-lg opacity-70 flex align-center'><GoDotFill className='flex mt-1 mr-2 align-center text-green-700 opacity-90' />Government</li>
          <li className='text-lg opacity-70 flex align-center'><GoDotFill className='flex mt-1 mr-2 align-center text-green-700 opacity-90' />Primary healthcare facilities</li>
          <li className='text-lg  opacity-70 flex align-center'><GoDotFill className='flex mt-1 mr-2 align-center text-green-700 opacity-90' />Non-governmental Organisation</li>

          <li className='text-lg  opacity-70 flex align-center'><GoDotFill className='flex mt-1 mr-2 align-center text-green-700 opacity-90' />Digital Health Companies</li>
          <li className='text-lg  opacity-70 flex align-center'><GoDotFill className='flex mt-1 mr-2 align-center text-green-700 opacity-90' />Health Ministries and Agencies</li>
          <li className='text-lg  opacity-70 flex align-center'><GoDotFill className='flex mt-1 mr-2 align-center text-green-700 opacity-90' />Community-based Organisations</li>
        </ul>
      </div>
      <div>
        <h1 className='flex text-center md:justify-center md:px-120 px-20 md:text-2xl font-semibold my-10 md:mt-10'>Complies with the highest standards of quality and data security</h1>
        <p className='flex text-center justify-center text-lg opacity-70 mx-auto my-5'>Please Note: Your data is confidential and secured by: </p>
        <img src="../public/images/ndpcLogo.png" alt="NDPC logo" className='mx-auto w-50 h-50 my-7' />
        <h1 className='text-xl text-center font-semibold mb-5'>NDPC</h1>
      </div>
      <footer className='bg-green-900 text-white p-10 md:flex md:flex-row md:justify-evenly md:py-20 md:align-center'>
        <div className='justify-items-start '>
          <h1 className='text-xl text-black-700 font-bold  inline-block'>
              <img
                className='w-20 h-20 object-contain inline-block bg-black mr-3 mb-3 rounded-full'
                src='/images/logo1.png '
                alt='logo'
              />
              SmartMum Africa
          </h1>
        </div>
        <div className='flex flex-col-2 md:flex-row md:justify-evenly md:gap-20 md:align-center justify-between my-10 md:my-0'>
          <div className=''>
            <h1 className='text-lg font-semibold opacity-80' >Solutions</h1>
            <ul className='list-none '>
              <li className='opacity-70'>Virtual Triage</li>
              <li className='opacity-70'>Enhanced patient flow</li>
              <li className='opacity-70'>Optimize Capacity Management</li>
           </ul>
          </div>
          <div className=''>
            <h1 className='text-lg font-semibold opacity-80' >Company</h1>
            <ul className='list-none '>
              <li className='opacity-70'>About us</li>
              <li className='opacity-70'>How it works</li>
              <li className='opacity-70'>FAQ</li>
           </ul>
          </div>
        </div>
        <div className='flex flex-col-2 md:flex-row md:justify-evenly md:gap-20 md:align-center justify-between my-10 md:my-0'>
          <div className=''>
            <h1 className='text-lg font-semibold opacity-80' >Security</h1>
            <ul className='list-none '>
              <li className='opacity-70'>Privacy</li>
              <li className='opacity-70'>Terms</li>
              <li className='opacity-70'>Support</li>
           </ul>
          </div>
          <div className=''>
            <h1 className='text-lg font-semibold opacity-80' >Contact us</h1>
            <ul className='list-none '>
              <li className='opacity-70'>email: smartmumafrica@gmail.com</li>
              <li className='opacity-70'>address: Lumilab Tech Hub,</li>
              <li className='opacity-70'>opposite new life bakery, Katsina</li>
           </ul>
          </div>
        </div>
      </footer>
    </div>

  )
}

export default HowItWorks