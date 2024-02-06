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
								Thank you for reaching out!
							</p>
						</div>
						<div>
							<p className="text-md mt-2">
								Please allow me upto 24 hours to revert back.
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
				className="mx-auto bg-white border-4 border-black container "
			>
				<div className="container mx-auto pt-10 pb-20 text-center">
					<div>
						<h1 className="text-3xl white-text-shadow md:text-6xl font-classic">
							Write to me
						</h1>
						<p className="minimal-text-shadow mt-5 text-sm">
							Get in touch. Let's talk
						</p>
					</div>
					<div>
						<div className="md:bg-gradient-to-bottom p-5 md:p-10 md:shadow-md mx-auto mt-10 max-w-4xl md:max-w-3xl md:rounded-md text-white md:border-4 md:border-black">
							<form onSubmit={handleSubmit}>
								<div className="flex justify-evenly">
									<div className="grid grid-rows-2 grid-flow-col md:grid-cols-2 md:grid-rows-1 gap-4 w-full">
										<div className="contact-element gap-2">
											<input
												className="icon-button bg-black placeholder-gray-600 rounded-md p-3 relative w-full lg:w-72 xl:w-81"
												type="text"
												name="Name"
												placeholder="John Doe"
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
												className="icon-button bg-black placeholder-gray-600 rounded-md p-3 relative w-full lg:w-72 xl:w-81"
												type="email"
												name="Email"
												placeholder="john@doe.com"
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
												rows={4}
												className="icon-button bg-black placeholder-gray-600 rounded-md p-3 w-full lg:w-11/12 xl:w-full"
												type="text"
												name="Message"
												placeholder="Languages are your power & variables your slaves."
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
										className="w-auto md:w-2/12 py-2 px-8 md:px-4 text-sm font-bold rounded-md hover:bg-white hover:text-black border-2 bg-black text-white hover:border-black transition duration-300"
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
