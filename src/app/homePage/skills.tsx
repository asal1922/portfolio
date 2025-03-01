import Image from 'next/image';
import images from '@/assets/images';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
const Skills = () => {
  return (
    <>
      <div className='w-full flex justify-center flex-col items-center mt-20 mix-blend-plus-lighter max-md:hidden'>
        <div className='w-full justify-center items-center'>
          <div className='w-full flex justify-center items-center flex-col gap-6'>
            <p className='text-blue-400 text-lg'>SKILLS</p>
            <p className='text-white font-semibold text-5xl'>TOOLS I USE</p>
            <p className='text-gray-400 text-xl'>primary skills on</p>
          </div>
        </div>
        <div className='flex gap-4 flex-wrap justify-center items-center w-1/2 !z-50 !mix-blend-color-dodge'>

          <div className='flex flex-col justify-center items-center gap-2 !z-50'>
            <Image
              unoptimized={true}
              src={images.html}
              alt="My Animated GIF"
              width={120}
              height={145}
            />
            <p>HTML</p>
            <div className="container w-full border border-blue-600  rounded-3xl bg-html-gradient p-1">
            </div>
          </div>
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image
              unoptimized={true}
              src={images.css}
              alt="My Animated GIF"
              width={120}
              height={145}

            />
            <p>CSS</p>
            <div className="container w-full border border-blue-600 bg-html-gradient p-1 rounded-3xl">
            </div>
          </div>
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image
              unoptimized={true}
              src={images.js}
              alt="My Animated GIF"
              width={120}
              height={145}

            />
            <p>JS</p>
            <div className="container w-full border border-pink-600 bg-js-gradient p-1 rounded-3xl">
            </div>
          </div>
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image
              unoptimized={true}
              src={images.react}
              alt="My Animated GIF"
              width={120}
              height={145}

            />
            <p>REACT</p>
            <div className="container w-full border border-yellow-600 bg-react-gradient rounded-3xl p-1">
            </div>
          </div>
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image
              unoptimized={true}
              src={images.typeScript}
              alt="My Animated GIF"
              width={120}
              height={145}

            />
            <p>TYPESCRIPT</p>
            <div className="container w-full border border-blue-600 rounded-3xl bg-html-gradient p-1">
            </div>
          </div>
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image
              unoptimized={true}
              src={images.tailwind}
              alt="My Animated GIF"
              width={120}
              height={145}
            />
            <p>TAILWIND</p>
            <div className="container w-full border border-blue-600 rounded-3xl bg-tailwind-gradient p-1">
            </div>
          </div>
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image
              unoptimized={true}
              src={images.reactfiber}
              alt="My Animated GIF"
              width={120}
              height={145}

            />
            <p>REACTFIBER</p>
            <div className="container w-full border border-pink-600 rounded-3xl bg-reactfiber-gradient p-1">
            </div>
          </div>
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image
              unoptimized={true}
              src={images.git}
              alt="My Animated GIF"
              width={120}
              height={145}

            />
            <p>GIT</p>
            <div className="container w-full border border-yellow-600 rounded-3xl bg-git-gradient p-1">
            </div>
          </div>
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image
              unoptimized={true}
              src={images.next}
              alt="My Animated GIF"
              width={120}
              height={145}
            />
            <p>NEXT JS</p>
            <div className="container w-full border border-green-600 rounded-3xl bg-next-gradient p-1">
            </div>
          </div>
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image
              unoptimized={true}
              src={images.api}
              alt="My Animated GIF"
              width={120}
              height={145}

            />
            <p>RESTFUL API</p>
            <div className="container w-full border border-blue-600 rounded-3xl bg-html-gradient p-1">
            </div>
          </div>
        </div>

        <Image
          unoptimized={true}
          className=' relative left-0 top-[-550px] !z-20 opacity-45 rotate-90'
          src='https://56272d65c8.imgdist.com/pub/bfra/ude6fbl4/k5g/zs7/b6y/Background%20Pattern%201.gif'
          alt="My Animated GIF"
          width={120}
          height={145}
        />

      </div>
      <div className='md:hidden mx-10'>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={4}
          slidesPerView={1}
          navigation
          pagination={{
            clickable: true,
            bulletClass: "custom-bullet",
            bulletActiveClass: "custom-bullet-active",
          }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}

        >
          <SwiperSlide>
            <div className='flex flex-col justify-center items-center gap-2 !z-50'>
              <Image
                unoptimized={true}
                src={images.html}
                alt="My Animated GIF"
                width={140}
                height={145}
              />
              <p>HTML</p>
              <div className="container w-1/2 border border-blue-600  rounded-3xl bg-html-gradient p-1">
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex flex-col justify-center items-center gap-2'>
              <Image
                unoptimized={true}
                src={images.css}
                alt="My Animated GIF"
                width={120}
                height={145}

              />
              <p>CSS</p>
              <div className="container w-1/2 border border-blue-600 bg-html-gradient p-1 rounded-3xl">
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex flex-col justify-center items-center gap-2'>
              <Image
                unoptimized={true}
                src={images.js}
                alt="My Animated GIF"
                width={120}
                height={145}

              />
              <p>JS</p>
              <div className="container w-1/2 border border-pink-600 bg-js-gradient p-1 rounded-3xl">
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex flex-col justify-center items-center gap-2'>
              <Image
                unoptimized={true}
                src={images.react}
                alt="My Animated GIF"
                width={120}
                height={145}

              />
              <p>REACT</p>
              <div className="container w-1/2 border border-yellow-600 bg-react-gradient rounded-3xl p-1">
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex flex-col justify-center items-center gap-2'>
              <Image
                unoptimized={true}
                src={images.typeScript}
                alt="My Animated GIF"
                width={120}
                height={145}

              />
              <p>TYPESCRIPT</p>
              <div className="container w-1/2 border border-blue-600 rounded-3xl bg-html-gradient p-1">
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex flex-col justify-center items-center gap-2'>
              <Image
                unoptimized={true}
                src={images.tailwind}
                alt="My Animated GIF"
                width={120}
                height={145}
              />
              <p>TAILWIND</p>
              <div className="container w-1/2 border border-blue-600 rounded-3xl bg-tailwind-gradient p-1">
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex flex-col justify-center items-center gap-2'>
              <Image
                unoptimized={true}
                src={images.git}
                alt="My Animated GIF"
                width={120}
                height={145}

              />
              <p>GIT</p>
              <div className="container w-1/2 border border-yellow-600 rounded-3xl bg-git-gradient p-1">
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex flex-col justify-center items-center gap-2'>
              <Image
                unoptimized={true}
                src={images.next}
                alt="My Animated GIF"
                width={120}
                height={145}
              />
              <p>NEXT JS</p>
              <div className="container w-1/2 border border-green-600 rounded-3xl bg-next-gradient p-1">
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex flex-col justify-center items-center gap-2'>
              <Image
                unoptimized={true}
                src={images.api}
                alt="My Animated GIF"
                width={120}
                height={145}

              />
              <p>RESTFUL API</p>
              <div className="container w-1/2 border border-blue-600 rounded-3xl bg-html-gradient p-1">
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

    </>

  )
}
export default Skills;