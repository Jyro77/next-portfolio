import React, { useState } from "react";
import { Transition } from "@headlessui/react"; //for smooth transition b/w elements
import { Link } from "react-scroll"; //for smooth scroll throughout the page

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <nav className='fixed z-20 bg-white w-full'>
                <div className='w-full'>
                    <div className='flex items-center h-20 w-full'>
                        <div className='flex items-center sm:mx-10 md:mx-20 justify-between w-full'>
                            <div className='flex justify-center items-center flex-shrink-0 ml-10 sm:ml-0'>
                                <h1 className='font-bold text-xl cursor-pointer'>
                                    Stream
                                    <span className='text-blue-600'>line</span>
                                </h1>
                            </div>
                            <div className='hidden md:block'>
                                <div className='ml-10 flex items-baseline space-x-4'>
                                    <Link
                                        activeClass='Home'
                                        to='home'
                                        smooth={true}
                                        offset={50}
                                        duration={500}
                                        className='cursor-pointer text-blue-600 px-3 py-2 text-md'>
                                        Home
                                    </Link>
                                    <Link
                                        activeClass='Services'
                                        to='services'
                                        smooth={true}
                                        offset={50}
                                        duration={500}
                                        className='cursor-pointer hover:text-blue-600 px-3 py-2 text-md'>
                                        Services
                                    </Link>
                                    <Link
                                        activeClass='Work'
                                        to='work'
                                        smooth={true}
                                        offset={50}
                                        duration={500}
                                        className='cursor-pointer hover:text-blue-600 px-3 py-2 text-md'>
                                        Projects
                                    </Link>
                                    <Link
                                        activeClass='Clients'
                                        to='clients'
                                        smooth={true}
                                        offset={50}
                                        duration={500}
                                        className='cursor-pointer hover:text-blue-600 px-3 py-2 text-md'>
                                        Clients
                                    </Link>
                                    <Link
                                        activeClass='Contact'
                                        to='contact'
                                        smooth={true}
                                        offset={50}
                                        duration={500}
                                        className='cursor-pointer hover:text-blue-600 px-3 py-2 text-md'>
                                        Contact
                                    </Link>
                                </div>
                            </div>
                            <div className='flex justify-center items-center flex-shrink-0'>
                                <h1 className='font-semibold text-lg cursor-pointer hidden md:block'>
                                    Say<span className='text-blue-600'>Hi</span>
                                </h1>
                            </div>
                        </div>
                        {/* completed the desktop view */}
                        {/* mobile view */}
                        <div className='mr-14 flex md:hidden'>
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type='button'
                                className='bg-blue-600 inline-flex justify-center items-center p-2 rounded-md text-white hover:bg-black focus:outline-none focus:ring-white'
                                aria-controls='mobile-menu'
                                aria-expanded='false'>
                                <span className='sr-only'>Open main menu</span>
                                {/* functionality */}
                                {!isOpen ? (
                                    <svg
                                        className='block h-6 w-6'
                                        xmlns='https://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        stroke='currentColor'
                                        aria-hidden='true'>
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth='2'
                                            d='M4 6h16M4 12h16M4 18h16'
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className='block h-6 w-6'
                                        xmlns='https://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        stroke='currentColor'
                                        aria-hidden='true'>
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth='2'
                                            d='M6 18L18 6M6 6l12 12'
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                {/* small size mobile style */}
                <Transition
                    show={isOpen}
                    enter='transition ease-out duration-100 transform'
                    enterFrom='opacity-0 scale-95'
                    enterTo='opacity-100 scale-100'
                    leave='transition ease-in duration-75 transform'
                    leaveFrom='opacity-100 scale-100'
                    leaveTo='opacity-0 scale-95'>
                    {ref => (
                        <div className='md:hidden' id='mobile-menu'>
                            <div
                                ref={ref}
                                className='bg-white mx-4 mr-20 pt-4 pb-4 space-y-1'>
                                <Link
                                    href='/home'
                                    activeClass='home'
                                    to='home'
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                    className='cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
                                    Home
                                </Link>
                                <Link
                                    href='/services'
                                    activeClass='services'
                                    to='services'
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                    className='cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
                                    Services
                                </Link>
                                <Link
                                    href='/work'
                                    activeClass='work'
                                    to='work'
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                    className='cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
                                    Projects
                                </Link>
                                <Link
                                    href='/clients'
                                    activeClass='clients'
                                    to='clients'
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                    className='cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
                                    Clients
                                </Link>
                                <Link
                                    href='/contacts'
                                    activeClass='contacts'
                                    to='contacts'
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                    className='cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
                                    Contacts
                                </Link>
                                <Link
                                    href='/hi'
                                    activeClass='hi'
                                    to='hi'
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                    className='cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
                                    Say<span className='text-black'>Hi</span>
                                </Link>
                            </div>
                        </div>
                    )}
                </Transition>
            </nav>
        </div>
    );
}

export default Navbar;
