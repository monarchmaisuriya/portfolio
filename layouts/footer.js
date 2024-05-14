import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa6";
export default function Footer({ quote }) {
	return (
		<footer className="mx-auto bg-black p-2 text-white rounded-b-md container border-4 border-black ">
			<div className="container mx-auto px-4 my-3">
				<div className="grid grid-cols-1 content-center gap-4 md:grid-cols-6">
					<div className="md:col-span-4">
						<p className="italic">{quote}</p>
					</div>
					<div className="text-center md:text-right md:col-span-2">
						<div>
							<ul className="flex flex-row justify-center md:justify-end mb-2 gap-4">
								<li className="text-lg md:text-xl hover:text-gray-400 text-white rounded-full transition duration-300">
									<a href="mailto:monarchmaisuriya@gmail.com" target="_blank">
										<FaEnvelope />
									</a>
								</li>
								<li className="text-lg md:text-xl hover:text-gray-400 text-white rounded-full transition duration-300">
									<a
										href="https://github.com/ingeniousambivert"
										target="_blank"
									>
										<FaGithub />
									</a>
								</li>
								<li className="text-lg md:text-xl hover:text-gray-400 text-white transition duration-300">
									<a
										href="https://www.linkedin.com/in/monarchmaisuriya/"
										target="_blank"
									>
										<FaLinkedin />
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="flex justify-center mt-8">
					<a href="https://about.me/monarchmaisuriya" target="_blank">
						<img src="/favicon.png" alt="logo" width={20} height={20} />
					</a>
				</div>
			</div>
		</footer>
	);
}
