import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="mx-auto max-w-[1200px] md:max-w-full px-0 md:px-44 ">
      <div className=" flex flex-row h-[5rem] items-center justify-between ">
        {/*  Logo Div   */}
        <div className="">
          <img
            src="/comfy.svg"
            alt="comfy"
            className="w-[175px] hover:cursor-pointer"
          />
        </div>

        {/* Button Div */}
        <div className="flex  items-center justify-between w-1/4 pl-10 pr-10 text-[#324D67]  tracking-wider">
          <Link href="/">
            <a className="cursor-pointer text-[1rem] capitalize border-b-2 border-transparent  hover:border-[#B3907C] hover:border-solid ">
              Home
            </a>
          </Link>
          <Link href="/about">
            <a className="cursor-pointer text-[1rem] capitalize border-b-2 border-transparent  hover:border-[#B3907C] hover:border-solid">
              About
            </a>
          </Link>
          <Link href="/products">
            <a className="cursor-pointer text-[1rem] capitalize border-b-2 border-transparent  hover:border-[#B3907C] hover:border-solid">
              Products
            </a>
          </Link>
        </div>

        {/* Cart and Login Div */}
        <div className="flex items-center justify-between w-1/6   py-4 ">
          {/* Cart Div */}
          <div className="flex items-center justify-center  cursor-pointer">
            {/* Cart text Div */}
            <div className="text-[1.5rem] mr-2  ">Cart</div>

            {/* Cart Logo Div  */}
            <div className="relative ">
              <div className="flex items-center bg-[#AB7A5F] h-5 w-5  rounded-full absolute z-5 -top-1 -right-1 p-0 m-0">
                <span className="text-sm text-white  grid mt-auto mr-auto mb-auto ml-auto place-items-center">
                  2
                </span>
              </div>
              <img src="/cart.png" alt="cart" className="" />
            </div>
          </div>

          {/* Login Div */}
          <div className="flex items-center cursor-pointer">
            <p className="text-[1.5rem] mr-2">Login</p>
            <img src="/login.png" alt="add user" className="h-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
