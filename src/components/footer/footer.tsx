import React from "react";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoTwitter,
  BiLogoYoutube,
} from "react-icons/bi";

const Footer = () => {
  return (
    <div className=" space-y-8 p-4 font-opensans w-full ">
      <div className="border-b-2 border-khaki w-[95%] mx-auto"></div>
      <div className="grid md:grid-cols-4 grid-cols-2 md:w-[90%] mx-auto  h-auto md:text-base gap-4 text-xs">
        <ul className="space-y-2">
          <li className="font-semibold">Contact us</li>
          <li>221b Notingham Forest - London - UK</li>
          <li>0123 456 789 - 0123 987 654</li>
          <li>info@yourdomain.com</li>
        </ul>
        <ul className="space-y-2">
          <li className="font-semibold">About us</li>
          <li>About us</li>
          <li>Contact</li>
          <li>Official Store</li>
          <li>Join us</li>
        </ul>
        <ul className="space-y-2">
          <li className="font-semibold">Support</li>
          <li>Shipping & Return</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
          <li>F.A.Qs</li>
        </ul>
        <ul className="space-y-2 ">
          <li className="font-semibold">Newsletter</li>
          <li>Make sure that you're always the first who
          receive our latest news and promotions</li>
          <li className="md:flex-row flex flex-col">
            <input
              className="p-2 mr-2 border-b-2 border-Jet "
              type="email"
              placeholder="Enter your email....."/>
            <button className="p-2 bg-wenge text-white md:w-32 w-[70%] mt-2 md:text-base text-sm rounded outline-none hover:scale-105">
              Register
            </button>
          </li>
        </ul>
      </div>
      <div className="flex flex-col justify-between items-center md:text-base text-xs ">
        <ul>
          <li>Copyright © 2022 Velatheme. All Right Reserved.</li>
        </ul>
        <div className="md:w-44 w-32 justify-between flex mt-2 md:text-4xl text-2xl">
          <BiLogoFacebook  />
          <BiLogoInstagram  />
          <BiLogoTwitter  />
          <BiLogoYoutube  />
        </div>
      </div>
    </div>
  );
};

export default Footer;
