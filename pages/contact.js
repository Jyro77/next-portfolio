import { Element } from "react-scroll";

function contact() {
    return (
        <Element id='contact' name='contact'>
            <div>
                <form
                    action='mailto:true.jhonnyr@gmail.com'
                    method='post'
                    encType='text/plain'>
                    <div className='w-full my-20 h-auto flex flex-col justify-center items-center'>
                        <p className='text-sm uppercase text-gray-400'>
                            Contact
                        </p>
                        <h1 className='text-blue-800 text-6xl font-bold text-center'>
                            Contact
                        </h1>
                        <div className='flex justify-center text-center md:w-1/2 w-full my-5'>
                            <input
                                type='email'
                                name='email-address'
                                id='email-address'
                                autoComplete='email'
                                placeholder='xyz@yourmail.com'
                                className='mt-5 pb-1 pl-8 w-full rounded-tl-lg rounded-bl-lg text-blue-800 text-xl border-2 border-blue-900 h-10'
                            />
                            <button
                                className='mt-5 text-xl w-36 h-10 bg-blue-800 text-white rounded-tr-lg rounded-br-lg hover:bg-black'
                                type='submit'>
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </Element>
    );
}

export default contact;
