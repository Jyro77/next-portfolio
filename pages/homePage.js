import React from "react";
import Image from "next/image";
import heroImg from "../public/img/hero-3.png";
import { Element } from "react-scroll";

function homePage() {
    return (
        <Element id='home' name='home'>
            <div>
                <div className='flex justify-between text-center md:mx-20 md:pt-32 pt-28'>
                    <div className='w-1/4 h-96 shadow-xl rounded-full relative px-10 hidden lg:block'>
                        <Image
                            src={heroImg}
                            alt='Jhonny Rodriguez'
                            layout='fill'
                            objectFit='cover'
                            className='rounded-full cursor-pointer hidden lg:block'
                        />
                    </div>
                    <div className='w-5/6 flex flex-col md:ml-20 mx-10 mt-10'>
                        <h1 className='font-bold text-7xl text-left mb-5'>
                            Hello, I am{" "}
                            <span className='text-blue-800'>Jhonny</span>
                        </h1>
                        <p className='text-left font-normal mb-5 flex-wrap'>
                            Focused on problem solving and User Interface (UI)
                            design to provide the best User Experience (UX),
                            implementing a responsive design in all cases.
                        </p>
                        <p className='text-left font-normal mb-5 flex-wrap'>
                            As a vision of applying my knowledge and soft skills
                            to improve the cooperative practices within the
                            development area, sharing and leading changes, tests
                            and situations within the area of development,
                            sharing and leading changes, tests and situations
                            with the highest standards and using emotional
                            intelligence at all times.
                        </p>
                        <p className='text-left font-normal mb-5 flex-wrap'>
                            Since 2019 I started using WordPress, Wix and Adobe
                            Sparks, then in early 2020 I started the
                            {`"`}Bootcamp Web Developer{`"`} which motivated me
                            to continue learning different web technologies.
                            {`"`}Bootcamp Web Developer{`"`} which motivated me
                            to continue learning different technologies for the
                            web.
                        </p>
                        <a
                            href='pdf/Jhonny Rodriguez Resume.docx (1).pdf'
                            download='resume.pdf'
                            rel='noopener noreferrer'
                            target='_blank'
                            className='font-semibold text-white md:mt-10 mt-5 pt-5 bg-blue-800 rounded-md w-60 h-16 text-lg hover:bg-black'>
                            See My Resume!
                        </a>
                    </div>
                </div>
            </div>
        </Element>
    );
}

export default homePage;
