import React from 'react'
import {BiLogoFacebook,BiLogoInstagram,BiLogoTwitter,BiLogoYoutube} from 'react-icons/bi'

const footer = () => {
  return (
    <div className='bg-dimgray p-4 gap-2 space-y-8'>
    <div className='flex justify-around w-full h-auto'>
        
        <ul className='space-y-4'>
            <li>Contact us</li>
            <li>221b Notingham Forest - London - UK</li>
            <li>0123 456 789 - 0123 987 654</li>
            <li>info@yourdomain.com</li>
        </ul>
        <ul className='space-y-4'>
            <li>About us</li>
            <li>About us</li>
            <li>Contact</li>
            <li>Official Store</li>
            <li>Join us</li>
        </ul>
        <ul className='space-y-4'>
            <li>Support</li>
            <li>Shipping & Return</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>F.A.Qs</li>
        </ul>
        <ul className='space-y-4'>
            <li>Newsletter</li>
            <li>Make sure that you're always the first who </li>
             <li>   receive our latest news and promotions</li>
            <li>
                <input className='rounded-md p-2 mr-2' type='email' placeholder='Enter your email.....'></input>
                <button>Register</button>
            </li>

        </ul>

    </div>
    <div className='flex flex-col justify-between items-center '>
        <ul>
            <li>Copyright © 2022 Velatheme. All Right Reserved.</li>
        </ul>
        <div className='w-44 justify-between flex'>
            <BiLogoFacebook size={28}/>
            <BiLogoInstagram size={28}/>
            <BiLogoTwitter size={28}/>
            <BiLogoYoutube size={28}/>

        </div>
    </div>
    </div>
  )
}

export default footer