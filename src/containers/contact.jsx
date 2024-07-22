import { MdMarkEmailRead } from "react-icons/md";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
	const [state, handleSubmit] = useForm("xrgrenzb");
	if (state.succeeded) {
		return (
			<div
				id="contact"
				className="mx-auto bg-white border-4 border-black container"
			>
				<div className="container mx-auto pt-10 pb-20 text-center">
					<div className="my-6 flex flex-col justify-center items-center">
						<div>
							<MdMarkEmailRead className="h-20 w-20 text-green-600" />
						</div>
						<div>
							<p className="text-3xl font-semibold">
								Thanks for getting in touch!
							</p>
						</div>
						<div>
							<p className="text-sm mt-6">
								Please allow me up to 24 hours to revert back.
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div
				id="contact"
				className="mx-auto bg-white border-4 border-black container"
			>
				<div className="container mx-auto pt-10 pb-20 text-center">
					<div>
						<h1 className="text-2xl white-text-shadow md:text-4xl font-medium">
							All you need to do
						</h1>
						<p className="mt-5 text-sm">Write to me. Let's have a chat</p>
					</div>
					<div className="mx-6 md:mx-0">
						<div className="p-5 md:p-10 mx-auto mt-10 max-w-4xl md:max-w-3xl md:rounded-md text-white">
							<form onSubmit={handleSubmit}>
								<div className="flex justify-evenly">
									<div className="grid grid-rows-2 grid-flow-col md:grid-cols-2 md:grid-rows-1 gap-4 w-full">
										<div className="contact-element gap-2">
											<input
												className="icon-button bg-black placeholder-gray-600 rounded-md p-3 relative w-3/4 md:w-full h-10 md:h-12"
												type="text"
												name="Name"
												placeholder="Your name"
											/>
											<ValidationError
												className="text-gray-300 mt-2"
												prefix="Name"
												field="name"
												errors={state.errors}
											/>
										</div>
										<div className="contact-element gap-2">
											<input
												className="icon-button bg-black placeholder-gray-600 rounded-md p-3 relative w-3/4 md:w-full h-10 md:h-12"
												type="email"
												name="Email"
												placeholder="you@email.com"
											/>
											<ValidationError
												className="text-gray-300 mt-2"
												prefix="Email"
												field="email"
												errors={state.errors}
											/>
										</div>
									</div>
								</div>
								<div className="mt-5">
									<div className="grid grid-cols-1 grid-flow-row">
										<div className="contact-element gap-2">
											<textarea
												rows={3}
												className="icon-button bg-black placeholder-gray-600 rounded-md p-3 w-3/4 md:w-full h-24 md:h-32"
												type="text"
												name="Message"
												placeholder="Your message goes here."
											/>
											<ValidationError
												className="text-gray-300 mt-2"
												prefix="Message"
												field="message"
												errors={state.errors}
											/>
										</div>
									</div>
								</div>
								<div className="flex justify-center mt-5">
									<button
										id="contact-submit"
										type="submit"
										className="w-3/4 md:w-4/12 py-2 px-6 md:px-8 md:text-sm font-bold rounded-md hover:bg-white hover:text-black border-4 bg-black text-gray-200 border-black transition duration-300 text-xs text-center h-10 md:h-12"
									>
										Send
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
