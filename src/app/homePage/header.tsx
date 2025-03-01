import { ToastContainer, toast } from 'react-toastify';

const Header = () => {
        const email = 'asalrazavi2002@gmail.com';
        const handleCopyToClipboard = (email: string) => {
            navigator.clipboard.writeText(email);
            toast.success('Copied');
        };
        
    return (
        <div className="flex justify-evenly w-full 3xl:w-full gap-40 items-center pt-12 pb-6 max-lg:hidden laptop-hidden">
            <div className="flex gap-5 items-center justify-end">
                <div className="flex justify-center gap-6 items-center p-4 rounded-full bg-gray-500/20">
                    <p className="text-sm text-white cursor-pointer transition-all duration-400 ease-in-out hover:scale-110 3xl:text-3xl" onClick={() => handleCopyToClipboard(email)}>asalrazavi2002@gmail.com</p>
                    <p className="p-4 rounded-2xl bg-dark-blue-gradient text-sm text-white 3xl:text-3xl cursor-pointer transition-all duration-400 ease-in-out hover:scale-110" onClick={() => handleCopyToClipboard(email)}>copy</p>
                </div>
                <a href="/Resume.pdf" download="Resume.pdf">
                    <p className="p-4 rounded-2xl bg-dark-blue-gradient text-sm text-white">CV</p>
                </a>

            </div>
            
            <div className="flex gap-4 text-white bg-blur-background border rounded-lg border-sky-500/35 p-5 3xl:text-2xl">
                <a className='cursor-pointer hover:text-sky-500 transition-all duration-400 ease-in-out' href='https://t.me/asal1922'>Github</a>
                <a className='cursor-pointer hover:text-sky-500 transition-all duration-400 ease-in-out' href="https://www.linkedin.com/in/asal-razavizadeh" target="_blank">Linkdin</a>
                <a className='cursor-pointer hover:text-sky-500 transition-all duration-400 ease-in-out' href="https://mail.google.com/mail/?view=cm&fs=1&to=asalrazavizadeh2002@gmail.com">Email</a>
                <a className='cursor-pointer hover:text-sky-500 transition-all duration-400 ease-in-out' href='https://t.me/asal1922'>Telegeram</a>
            </div>
          <ToastContainer />
        </div>
    )
}
export default Header;