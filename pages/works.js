import { Element } from "react-scroll";
import Image from "next/image";

function works() {
    return (
        <Element id='work' name='work'>
            <div className='w-full my-20 h-auto flex flex-col justify-center items-center'>
                <p className='text-sm uppercase text-gray-400'>Portfolio</p>
                <h1 className='text-blue-800 text-6xl font-bold text-center'>
                    Creative Works
                </h1>
                <div className='md:flex sm:flex-col md:flex-row justify-center items-center md:gap-10 sm:pb-10 mt-10'>
                    <div className='rounded w-80 h-60 shadow-xl relative'>
                        <Image
                            src='/img/1.png'
                            alt='One'
                            layout='fill'
                            objectFit='cover'
                            className='p-2 rounded cursor-pointer'
                        />
                    </div>
                    <div className='rounded w-80 h-60 shadow-xl relative'>
                        <Image
                            src='/img/2.png'
                            alt='Second'
                            layout='fill'
                            objectFit='cover'
                            className='p-2 rounded cursor-pointer'
                        />
                    </div>
                    <div className='rounded w-80 h-60 shadow-xl relative'>
                        <Image
                            src='/img/3.png'
                            alt='Thrith'
                            layout='fill'
                            objectFit='cover'
                            className='p-2 rounded cursor-pointer'
                        />
                    </div>
                </div>
                <div className='md:flex sm:flex-col md:flex-row justify-center items-center md:gap-10 sm:pb-10 mt-10'>
                    <div className='rounded w-80 h-60 shadow-xl relative'>
                        <Image
                            src='/img/4.png'
                            alt='Four'
                            layout='fill'
                            objectFit='cover'
                            className='p-2 rounded cursor-pointer'
                        />
                    </div>
                    <div className='rounded w-80 h-60 shadow-xl relative'>
                        <Image
                            src='/img/5.png'
                            alt='Five'
                            layout='fill'
                            objectFit='cover'
                            className='p-2 rounded cursor-pointer'
                        />
                    </div>
                    <div className='rounded w-80 h-60 shadow-xl relative'>
                        <Image
                            src='/img/6.png'
                            alt='Six'
                            layout='fill'
                            objectFit='cover'
                            className='p-2 rounded cursor-pointer'
                        />
                    </div>
                </div>
            </div>
        </Element>
    );
}

export default works;
