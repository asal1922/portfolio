import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import Image from 'next/image';
import girl from '@/assets/girl.svg';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const ResponsiveMenu = () => {
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const email = 'asalrazavi2002@gmail.com';
    const handleCopyToClipboard = (email: string) => {
        navigator.clipboard.writeText(email);
        toast.success('Copied');
    };

    return (
        <div className="lg:hidden cursor-pointer laptop-show" >
            <div className="p-6 transition-all duration-700 ease-in-out" onClick={() => setOpenMenu((openMenu) => !openMenu)}>
                <FormatListBulletedRoundedIcon />
            </div>
            <div className={`absolute w-2/3 max-[360px]:w-[90%]  bg-blue-900 z-50 rounded-md px-4 transition-all duration-700 ease-in-out ${!openMenu ? 'left-[-100%]' : 'left-0'}`}>
                <div className='w-full flex justify-between items-center flex-row-reverse p-5 mb-24'>
                    <div className='p-2' onClick={() => setOpenMenu(false)}>
                        <CancelRoundedIcon />
                    </div>
                    <Image
                        unoptimized={true}
                        src={girl}
                        alt="My Animated GIF"
                        width={50}
                        height={50}
                    />
                    <a href="/Resume.pdf" download="Resume.pdf">
                        <p className="p-4 rounded-2xl bg-dark-blue-gradient text-sm text-white">CV</p>
                    </a>

                </div>
                <div className="flex flex-col justify-between gap-8 items-center">
                    <p className=' w-full hover:bg-black/50 transition-all duration-400 ease-in-out text-center rounded-md p-3'>
                        <a href="#skills">Skills</a>
                    </p>
                    <p className='w-full hover:bg-black/50 transition-all duration-400 ease-in-out text-center rounded-md p-3'>
                        <a href="#projects">Projects</a>
                    </p>
                    <p className='w-full hover:bg-black/50 transition-all duration-400 ease-in-out text-center rounded-md p-3'>
                        <a href="#contact">Contact</a>
                    </p>
                    <p className='w-full hover:text-gray-500  cursor-pointer hover:bg-black/50 transition-all duration-400 ease-in-out text-center rounded-md p-3'>
                        <a href='https://t.me/asal1922'>Github</a>
                    </p>
                    <p className='w-full hover:text-gray-500  cursor-pointer hover:bg-black/50 transition-all duration-400 ease-in-out text-center rounded-md p-3'>
                        <a href='https://t.me/asal1922'>Telegeram</a>
                    </p>
                    <p className='w-full hover:text-gray-500  cursor-pointer hover:bg-black/50 transition-all duration-400 ease-in-out text-center rounded-md p-3'>
                        <a href="https://www.linkedin.com/in/asal-razavizadeh" target="_blank">LinkedIn</a>
                    </p>

                    <p className='w-full hover:text-gray-500  cursor-pointer hover:bg-black/50 transition-all duration-400 ease-in-out text-center rounded-md p-3'>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=asalrazavizadeh2002@gmail.com">Email</a>
                    </p>
                    <p className="!text-sm text-white bg-black/50 w-full p-4 text-center" onClick={() => handleCopyToClipboard(email)}>asalrazavizadeh2002@gmail.com</p>
                </div>
            </div>
            <ToastContainer />
        </div>

    )
}
export default ResponsiveMenu;