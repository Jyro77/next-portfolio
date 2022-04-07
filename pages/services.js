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
                <div className='flex justify-items-start items-center mx-40 gap-10 mt-20 content-start'>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='flex justify-center items-center cursor-pointer'>
                            <FaReact className='w-10 h-10 bg-blue-400 text-gray-100 m-3 p-1 shadow-xl rounded-md' />
                            <h2 className='text-xl text-blue-500 font-semibold'>
                                Front-end
                            </h2>
                        </div>
                        <p className='md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm'>
                            My greatest current strength is in this area. You
                            can see in my portfolio some of the work I have
                            done. For this I use various technologies of which
                            are: {`"`}Front vanilla (HTML5, CSS3 and JS), CMS
                            (Wordpress, Wix, etc.), React, Tailwindcss,
                            Boostrap, Bulma, NextJS, among others{`"`}.
                            <span className='text-white md:hidden block'>
                                I am interested in adding to my stack the
                                languages {`"`}TypeScript, Python, Go, among
                                others
                                {`"`}
                            </span>
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
                            I have done several works in Back-end, among them
                            fixes and optimizations in applications and
                            authentication. SQL and NoSQL database management. I
                            have also worked with REST API and GraphQL. Ranked
                            5% out of 1.2M in the JS test on LinkedIn (
                            <a
                                href='https://bit.ly/3LPm6kc'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='cursor-pointer underline text-blue-500 text-sm'>
                                click
                            </a>
                            ). I am interested in adding to my stack the
                            languages {`"`}TypeScript, Python, Go, among others
                            {`"`}.
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
                            Social media management, consulting, marketing and
                            other services such as Community Manager to enhance
                            the growth and sales of your business, looking for
                            the most efficient way possible.
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
                            With more than 10 years of customer service,
                            implementing my knowledge and experience in each
                            place, since human treatment is one of the most
                            valuable things required for the growth of any
                            business.
                        </p>
                    </div>
                </div>
            </div>
        </Element>
    );
}

export default services;
