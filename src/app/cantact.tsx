import Image from 'next/image';
import images from '@/assets/images';
import EmailForm from './homePage/emailForm';

const Cantact = () => {
    return (
        <div className="w-full px-8 !pb-14">
            <style jsx>{`
  @media (min-width: 1023px) and (max-width: 1026px) {
     .laptop-show{
      width:100%;}
.laptop-position{
    margin-left: 203px;
}
  }
`}</style>
            <div className="flex flex-col gap-4 justify-center items-center mb-16">
                <h2 className="text-lg text-blue-500">cantact</h2>
                <h2 className="text-white font-semibold text-5xl max-md:text-2xl">Cantact with me</h2>
            </div>
            <div className="flex max-[1048px]:flex-col  justify-center gap-10 max-lg:flex-col">
                <div className='bg-blue-400/10 max-lg:self-center shadow-[0_0_28px_rgba(124,158,255,0.09)] p-4 rounded-lg flex flex-col justify-center items-center  w-[28%] max-lg:w-full laptop-show  max-[1048px]:w-2/3'>
                    <div className='mb-4 max-lg:mb-28'>
                        <Image
                            unoptimized={true}
                            src={images.cantact}
                            alt="cantact"
                            width={380}
                            height={240}
                        />
                    </div>
                    <div className='flex flex-col gap-8 laptop-position '>
                        <h3 className='text-transparent bg-clip-text bg-blue-gradient font-semibold text-xl max-xl:text-sm'>ASAL RAZAVIZADEH</h3>
                        <h3>front-end developer</h3>
                        <p className='text-gray-400'>im available for freelance work. connect with mevia and callin to my account.</p>
                        <div className='flex gap-2'>
                            <p className='text-gray-400'>Phone:</p>
                            <p>+98-9156115755</p>
                        </div>
                        <div className='flex gap-2'>
                            <p className='text-gray-400'>Email:</p>
                            <p>asalrazavi2002@gmail.com</p>
                        </div>
                    </div>
                </div>
                <EmailForm />
            </div>

        </div>
    )
}
export default Cantact;
