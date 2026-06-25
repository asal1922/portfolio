import Image from 'next/image';

const Profile = () => {
    return (
        <div className="relative w-full">
            <h1 className="absolute top-[-550px] max-xl:!top-[-55vh] left-[45%] w-1/2 max-xl:!w-3/4 max-xl:!left-[12%] 3xl:top-[-70vh] top-text">
                <p className="text-gray-400 text-2xl max-xl:text-base max-md:text-sm bg-blur-background border rounded-lg border-sky-500/35 p-9 top-text">
                    Hi, I&apos;m
                    <span className="text-transparent bg-clip-text bg-blue-gradient font-semibold text-4xl max-xl:text-xl px-1 top-text">
                        Asal Razavizadeh
                    </span>
                    , a
                    <span className="text-white font-semibold text-2xl max-xl:text-base max-md:text-sm top-text"> Front-End Developer</span> with
                    <span className="text-white font-semibold text-2xl max-xl:text-base max-md:text-sm top-text"> 2 years</span> at Ferdowsi Cloud
                    and a <span className="text-white font-semibold text-2xl max-xl:text-base max-md:text-sm top-text">1-month full-time internship</span> at
                    <span className="text-white font-semibold text-2xl max-xl:text-base max-md:text-sm top-text"> Neshan</span> routing platform.
                    Computer Engineering student at IAU Mashhad, specializing in
                    <span className="text-white font-semibold text-2xl max-xl:text-base max-md:text-sm top-text"> responsive</span> and
                    <span className="text-white font-semibold text-2xl max-xl:text-base max-md:text-sm top-text"> user-friendly</span> web apps
                    with React, Next.js, and TypeScript.
                </p>
            </h1>
            <div className="absolute top-[-600px] left-[8%] flex max-xl:justify-center w-full max-xl:left-0 max-xl:top-[-90vh] 3xl:top-[-80vh] top-picture top-text-cumputer">
                <Image
                    className="w-1/4 max-md:w-[200px] max-md:h-[200px] max-lg:w-[400px] max-lg:h-[400px]"
                    unoptimized={true}
                    src="https://56272d65c8.imgdist.com/pub/bfra/ude6fbl4/j8g/f93/usb/3D%20Modelling%202.gif"
                    alt="My Animated GIF"
                    width={453}
                    height={453}
                />
            </div>
        </div>
    )
}
export default Profile;