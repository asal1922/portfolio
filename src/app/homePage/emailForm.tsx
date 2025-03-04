import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';

const EmailForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data: any) => {
        emailjs.send('service_6ndcgcw', 'template_b2c2xka', data, 'VgGZ4hjmRqEGgw8Vt')
            .then((response) => {
                console.log('Message sent', response);
                      toast.success('sent');
            })
            .catch((err) => {
                console.error('Failed to send message', err);
            });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex justify-center flex-col gap-4 bg-blue-400/10 p-4 rounded-lg shadow-[0_0_28px_rgba(124,158,255,0.12)]">
                <div className="flex justify-around gap-8 items-center max-md:flex-col max-md:justify-start max-md:items-start">
                    <div className="flex gap-4 items-center justify-center max-md:!w-full max-md:flex-col">
                        <label className="font-normal text-lg text-gray-400 max-md:w-full">Your Name:</label>
                        <input
                            className="bg-[#041226] rounded-md border-b border-b-[#676767] p-4 max-md:w-full"
                            {...register("yourName", { required: true })}
                        />
                        {errors.yourName && <span className="text-red-500">Name is required</span>}
                    </div>

                    <div className="flex gap-4 items-center justify-center max-md:!w-full max-md:flex-col max-md:justify-start max-md:items-start">
                        <label className="font-normal text-lg text-gray-400 max-md:w-full">Phone Number:</label>
                        <input
                            className="bg-[#041226] rounded-md border-b border-b-[#676767] p-4 max-md:w-full"
                            {...register("phoneNumber", { required: true })}
                        />
                        {errors.phoneNumber && <span className="text-red-500">Phone is required</span>}
                    </div>
                </div>

                <div className="w-full flex flex-col gap-4">
                    <label className="font-normal text-lg text-gray-400">Email:</label>
                    <input
                        className="bg-[#041226] rounded-md border-b border-b-[#676767] p-4"
                        {...register("Email", { required: true })}
                    />
                    {errors.Email && <span className="text-red-500">Email is required</span>}
                </div>

                <div className="w-full flex flex-col gap-4">
                    <label className="font-normal text-lg text-gray-400">Subject:</label>
                    <input
                        className="bg-[#041226] rounded-md border-b border-b-[#676767] p-4"
                        {...register("Subject")}
                    />
                </div>

                <div className="w-full flex flex-col gap-4">
                    <label className="font-normal text-lg text-gray-400">Your Message:</label>
                    <textarea
                        {...register("description", { required: true })}
                        className="bg-[#041226] rounded-md border-b border-b-[#676767] p-4"
                        rows={4}
                    />
                    {errors.description && <span className="text-red-500">Message is required</span>}
                </div>

                <button type="submit" className="px-6 py-4 text-gray-300 bg-[#041226] rounded-lg w-full hover:bg-blue-950 transition-all duration-[300ms] ease-in-out hover:text-gray-100">
                    Send Message
                </button>
            </div>
          <ToastContainer />

        </form>
    );
};

export default EmailForm;
