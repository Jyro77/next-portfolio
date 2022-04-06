import React from "react";
import { AiTwotoneHeart } from "react-icons/ai";

function Footer() {
    return (
        <div className='w-full h-16 bg-gray-50 flex justify-center items-center'>
            <h1 className='text-xl text-blue-800'>
                Created by{" "}
                <a
                    href='https://truejyro.com'
                    target='_blank'
                    rel='noreferrer'
                    className='cursor-pointer font-semibold text-blue-800 hover:text-black'>
                    TrueJyro
                </a>
            </h1>
        </div>
    );
}

export default Footer;

/* 
    <h1 className='text-xl text-blue-800 mr-2'>Made by</h1>
    <AiTwotoneHeart className='text-black' />
*/
