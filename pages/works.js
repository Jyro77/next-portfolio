import { Element } from "react-scroll";
import Image from "next/image";
import One from "../public/img/1.png";
import Two from "../public/img/2.png";
import Three from "../public/img/3.png";
import Four from "../public/img/4.png";
import Five from "../public/img/5.png";
import Six from "../public/img/6.png";

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
                            src={One}
                            alt='One'
                            layout='fill'
                            objectFit='cover'
                            className='p-2 rounded cursor-pointer'
                        />
                    </div>
                    <div className='rounded w-80 h-60 shadow-xl relative'>
                        <Image
                            src={Two}
                            alt='Second'
                            layout='fill'
                            objectFit='cover'
                            className='p-2 rounded cursor-pointer'
                        />
                    </div>
                    <div className='rounded w-80 h-60 shadow-xl relative'>
                        <Image
                            src={Three}
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
                            src={Four}
                            alt='Four'
                            layout='fill'
                            objectFit='cover'
                            className='p-2 rounded cursor-pointer'
                        />
                    </div>
                    <div className='rounded w-80 h-60 shadow-xl relative'>
                        <Image
                            src={Five}
                            alt='Five'
                            layout='fill'
                            objectFit='cover'
                            className='p-2 rounded cursor-pointer'
                        />
                    </div>
                    <div className='rounded w-80 h-60 shadow-xl relative'>
                        <Image
                            src={Six}
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
