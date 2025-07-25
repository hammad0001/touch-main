'use client';
import useEmail from '@/hooks/useEmail';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
const ContactForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();
	const { sendEmail, loading } = useEmail();
	const router = useRouter();
	// Handle form submission
	const onSubmit = async (data) => {
		console.log('Form Data Submitted:', data);

		const templateParams = {
			customer_name: data?.name,
			customer_email: data?.email,
			contact_number: data?.mobileNumber,
			vehicle: data?.vehicle,
			services: data?.services?.join(','),
			additional_info: data?.additionalInfo,
			reply_to: 'touchandshineautodetailing@gmail.com',
		};

		await sendEmail(
			templateParams,
			process.env.NEXT_PUBLIC_EMAILJS_OWNER_TEMPLATE_ID
		);

		// await sendEmail(
		//   templateParams,
		//   process.env.NEXT_PUBLIC_EMAILJS_CUSTOMER_TEMPLATE_ID
		// );

		reset();
		await router.push('/greeting');
		// toast.success('Order submitted successfully!');
	};

	return (
		<div className="max-w-6xl mx-auto py-16 px-4 md:flex md:space-x-12 bg-white text-black">
			{/* Form Section */}
			<div className="md:w-1/2">
				<h4 className="text-sm font-semibold text-[#2A82AD] uppercase mb-2">
					Contact
				</h4>
				<h2 className="text-3xl font-bold mb-6 text-black">
					Get In Touch Today
				</h2>

				{/* Form Fields */}
				<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
					<div className="md:flex md:space-x-4">
						<div className="flex-1">
							<label className="block font-semibold mb-1 text-black">
								Name
							</label>
							<input
								type="text"
								placeholder="Enter your first and last name"
								{...register('name', { required: 'Name is required' })}
								className="w-full border border-purple-300 p-2 rounded-md outline-none focus:border-[#2A82AD]"
							/>
							{errors.name && (
								<p className="text-red-500 text-sm">{errors.name.message}</p>
							)}
						</div>
						<div className="flex-1">
							<label className="block font-semibold mb-1 text-black">
								Mobile Number
							</label>
							<input
								type="tel"
								placeholder="Enter your mobile number"
								{...register('mobileNumber', {
									required: 'Mobile number is required',
								})}
								className="w-full border border-purple-300 p-2 rounded-md outline-none focus:border-[#2A82AD]"
							/>
							{errors.mobileNumber && (
								<p className="text-red-500 text-sm">
									{errors.mobileNumber.message}
								</p>
							)}
						</div>
					</div>

					<div>
						<label className="block font-semibold mb-1 text-black">Email</label>
						<input
							type="email"
							placeholder="Enter your email address"
							{...register('email', {
								required: 'Email is required',
								pattern: {
									value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
									message: 'Invalid email address',
								},
							})}
							className="w-full border border-purple-300 p-2 rounded-md outline-none focus:border-[#2A82AD]"
						/>
						{errors.email && (
							<p className="text-red-500 text-sm">{errors.email.message}</p>
						)}
					</div>

					<div>
						<label className="block font-semibold mb-1 text-black">
							Vehicle
						</label>
						<input
							type="text"
							placeholder="Enter your vehicle brand and model"
							{...register('vehicle')}
							className="w-full border border-purple-300 p-2 rounded-md outline-none focus:border-[#2A82AD]"
						/>
					</div>

					<div>
						<label className="block font-semibold mb-1 text-black">
							What services are you interested in?
						</label>
						<div className="flex items-center space-x-4 text-black">
							<label className="flex items-center">
								<input
									type="checkbox"
									value="Ceramic Coating"
									{...register('services')}
									className="mr-2"
								/>
								Ceramic Coating
							</label>
							<label className="flex items-center">
								<input
									type="checkbox"
									value="Exterior Detailing"
									{...register('services')}
									className="mr-2"
								/>
								Exterior Detailing
							</label>
							<label className="flex items-center">
								<input
									type="checkbox"
									value="Interior Detailing"
									{...register('services')}
									className="mr-2"
								/>
								Interior Detailing
							</label>
						</div>
					</div>

					<div>
						<label className="block font-semibold mb-1 text-black">
							Additional Information
						</label>
						<textarea
							placeholder="Tell us anything else you think is important"
							{...register('additionalInfo')}
							className="w-full border border-blue-300 p-2 rounded-md outline-none focus:border-[#2A82AD] h-24"
						/>
					</div>

					<button
						type="submit"
						disabled={loading}
						className="mt-4 px-6 py-2 bg-[#2A82AD] text-white font-semibold rounded-md hover:bg-blue-700 transition"
					>
						{loading ? 'Booking your service...' : 'Book Now'}
					</button>
				</form>
			</div>

			{/* Map and Info Section */}
			<div className="md:w-1/2 mt-12 md:mt-0">
				<h2 className="text-xl font-bold mb-4 text-black">
					What Happens After You Click Send
				</h2>
				<p className="text-gray-700 mb-4">
					Once your message is sent, we’ll get back to you within 24 hours to
					discuss the service and guide you through the next steps. We’re always
					here to offer free guidance, helping you make the most informed
					decision.
				</p>
				<p className="font-semibold text-black">
					Monday - Saturday: 9:00am - 5:00pm
				</p>

				<div className="mt-6">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d404163.80966033967!2d-121.3754412!3d37.6837558!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80903d2ca1069a21%3A0x82a8b47560759cf0!2sTouch%20and%20shine%20auto%20detail!5e0!3m2!1sen!2s!4v1732905608983!5m2!1sen!2s"
						width="100%"
						height="300"
						allowFullScreen
						loading="lazy"
						title="Touch and Shine Auto Detail Location"
						className="rounded-lg shadow-md border border-gray-300"
					></iframe>
				</div>
			</div>
		</div>
	);
};

export default ContactForm;
