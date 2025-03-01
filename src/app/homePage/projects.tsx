import Image from 'next/image';
import images from '@/assets/images';

const Projects = () => {
    return (
        <div className='mb-28'>
            <div className="flex justify-center items-center flex-col gap-8 mb-12">
                <h2 className="text-sky-500 text-lg">projects</h2>
                <h2 className="text-white text-4xl max-md:text-sm font-semibold">
                    here is a sample of projects I've worked on
                </h2>
            </div>
            <div className="flex w-full justify-center items-center gap-8">
                <div className='group relative w-1/4 max-md:w-[300px] max-md:mx-6 max-xl:w-1/2 transition-all duration-300 ease-in-out overflow-hidden rounded-lg shadow-md shadow-blue-500/50'>
                    <Image
                        className="object-cover w-full h-[519px] max-md:h-[500px] max-md:w-[300px] max-xl:h-[600px] 3xl:h-[900px] transform group-hover:scale-110 transition-all duration-300 ease-in-out" // زوم تصویر
                        unoptimized={true}
                        src={images.ferdowsiCloud}
                        alt="my project"
                        width={418}
                        height={519}
                    />
                    <div className="absolute top-0 left-0 w-[60%] h-full bg-black bg-opacity-90 text-gray-300 px-6 text-sm flex flex-col gap-10 justify-center items-start 
                        transform -translate-x-full group-hover:translate-x-0 transition-all duration-300 ease-in-out rounded-l-lg">
                        <p className="text-left max-md!:text-sm 3xl:text-2xl">
                            Ferdowsi Cloud Computing Company affiliated with Pishgaman Ferdowsi Mashhad University Holding was started by a group of faculty members of the Computer Engineering Department of Ferdowsi University of Mashhad with the aim of launching cloud computing services in 2018.                        </p>
                        <button className='bg-blue-500 text-gray-200 hover:bg-blue-600 font-semibold rounded-md py-4 px-6 3xl:text-2xl'>
                            <a href='https://ferdowsi.cloud'>more</a>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Projects;
