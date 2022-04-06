import { Element } from "react-scroll";
import { FaReact } from "react-icons/fa";
import { GrNode } from "react-icons/gr";
import { MdOutlineTravelExplore } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";

function services() {
    return (
        <Element id='services' name='services'>
            <div className='w-full my-40 h-auto flex flex-col justify-center items-center'>
                <p className='text-sm uppercase text-gray-400'>My Skills</p>
                <h1 className='text-blue-800 text-6xl font-bold text-center'>
                    My Expertise
                </h1>
                <div className='flex justify-items-start items-center mx-40 gap-10 mt-20'>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='flex justify-center items-center cursor-pointer'>
                            <FaReact className='w-10 h-10 bg-blue-400 text-gray-100 m-3 p-1 shadow-xl rounded-md' />
                            <h2 className='text-xl text-blue-500 font-semibold'>
                                Front-end
                            </h2>
                        </div>
                        <p className='md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Similique velit eos corporis doloremque saepe
                            dicta alias ducimus unde consectetur facere aperiam
                            modi natus rerum officiis, quod tempore obcaecati
                            quasi laboriosam.
                        </p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='flex justify-center items-center cursor-pointer'>
                            <GrNode className='w-10 h-10 bg-green-400 text-gray-100 m-3 p-1 shadow-xl rounded-md' />
                            <h2 className='text-xl text-blue-500 font-semibold'>
                                Back-end
                            </h2>
                        </div>
                        <p className='md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Similique velit eos corporis doloremque saepe
                            dicta alias ducimus unde consectetur facere aperiam
                            modi natus rerum officiis, quod tempore obcaecati
                            quasi laboriosam.
                        </p>
                    </div>
                </div>
                <div className='flex justify-items-start items-center mx-40 gap-10 mt-20'>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='flex justify-center items-center cursor-pointer'>
                            <MdOutlineTravelExplore className='w-10 h-10 bg-red-400 text-gray-100 m-3 p-1 shadow-xl rounded-md' />
                            <h2 className='text-xl text-blue-500 font-semibold'>
                                Community Manager
                            </h2>
                        </div>
                        <p className='md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Similique velit eos corporis doloremque saepe
                            dicta alias ducimus unde consectetur facere aperiam
                            modi natus rerum officiis, quod tempore obcaecati
                            quasi laboriosam.
                        </p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='flex justify-center items-center cursor-pointer'>
                            <RiCustomerService2Fill className='w-10 h-10 bg-yellow-400 text-gray-100 m-3 p-1 shadow-xl rounded-md' />
                            <h2 className='text-xl text-blue-500 font-semibold'>
                                Customer Services
                            </h2>
                        </div>
                        <p className='md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Similique velit eos corporis doloremque saepe
                            dicta alias ducimus unde consectetur facere aperiam
                            modi natus rerum officiis, quod tempore obcaecati
                            quasi laboriosam.
                        </p>
                    </div>
                </div>
            </div>
        </Element>
    );
}

export default services;
