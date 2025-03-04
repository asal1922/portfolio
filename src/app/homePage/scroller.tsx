const Scroller = () => {

    return (
        <div className='fixed z-50 flex justify-start w-[98%] max-lg:!hidden laptop-hidden'>
            <div className='flex justify-start bg-dark-blue-gradient !max-lg:none rounded-br-md px-7 3xl:text-3xl'>
                <p className='w-full cursor-pointer hover:text-gray-400 transition-all duration-400 ease-in-out text-center p-2 text-sm'>
                    <a href="#skills">Skills</a>
                </p>
                <p className='w-full cursor-pointer hover:text-gray-400 transition-all duration-400 ease-in-out text-center p-2 text-sm'>
                    <a href="#projects">Projects</a>
                </p>
                <p className='w-full cursor-pointer hover:text-gray-400 transition-all duration-400 ease-in-out text-center p-2 text-sm'>
                    <a href="#contact">Contact</a>
                </p>
                <p className='w-full cursor-pointer hover:text-gray-400 transition-all duration-400 ease-in-out text-center p-2 text-sm'>
                    <a href="#portfolio" className='bg-sky-900 rounded-full px-2 py-1'>⇧</a>
                </p>
            </div>
        </div>

    )
}
export default Scroller;