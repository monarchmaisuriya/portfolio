import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa6"
export default function Footer({ quote }) {
	return (
		<footer className="mx-auto bg-black p-2 text-white rounded-b-md container border-4 border-black ">
			<div className="container mx-auto px-8 md:px-20 my-4">
				<div className="flex flex-col justify-center items-center">
					<div className="mb-6">
						<p className="italic antialiased text-center md:font-medium text-xs md:text-sm">
							{quote}
						</p>
					</div>
					<div>
						<div>
							<ul className="flex flex-row justify-center md:justify-end mb-2 gap-4">
								<li className="text-lg md:text-xl hover:text-gray-400 text-white rounded-full transition duration-300">
									<a
										href="mailto:businesswithmonarch@gmail.com"
										target="_blank">
										<FaEnvelope />
									</a>
								</li>
								<li className="text-lg md:text-xl hover:text-gray-400 text-white rounded-full transition duration-300">
									<a href="https://github.com/monarchmaisuriya" target="_blank">
										<FaGithub />
									</a>
								</li>
								<li className="text-lg md:text-xl hover:text-gray-400 text-white transition duration-300">
									<a
										href="https://www.linkedin.com/in/monarchmaisuriya/"
										target="_blank">
										<FaLinkedin />
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
