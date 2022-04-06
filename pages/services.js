import { Element } from "react-scroll";
import { GiCardboardBox } from "react-icons/gi";
import { HiColorSwatch } from "react-icons/hi";
import { MdDeveloperBoard } from "react-icons/md";
import { AiOutlineBlock } from "react-icons/ai";

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
                            <GiCardboardBox className='w-10 h-10 bg-yellow-400 text-gray-100 m-3 p-1 shadow-xl rounded-md' />
                            <h2 className='text-xl text-blue-500 font-semibold'>
                                Strategy & Direction
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
                            <HiColorSwatch className='w-10 h-10 bg-red-400 text-gray-100 m-3 p-1 shadow-xl rounded-md' />
                            <h2 className='text-xl text-blue-500 font-semibold'>
                                Branding & Logo
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
                            <AiOutlineBlock className='w-10 h-10 bg-green-400 text-gray-100 m-3 p-1 shadow-xl rounded-md' />
                            <h2 className='text-xl text-blue-500 font-semibold'>
                                Motion & Animation
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
                            <MdDeveloperBoard className='w-10 h-10 bg-blue-400 text-gray-100 m-3 p-1 shadow-xl rounded-md' />
                            <h2 className='text-xl text-blue-500 font-semibold'>
                                Desing & Development
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
