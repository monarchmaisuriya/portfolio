import { FaLinkedin, FaGithub } from "react-icons/fa6";

export default function Header() {
	return (
		<div className="mx-auto container bg-black pt-8  text-white rounded-t-lg border-4 border-black">
			<div className="flex container justify-center">
				<div>
					<a href="https://about.me/monarchmaisuriya" target="_blank">
						<img src="/favicon.png" alt="logo" width={20} height={20} />
					</a>
				</div>
				{/* <div>
					<ul className="flex flex-row">
						<li className=" pr-5 text-xl md:text-2xl hover:text-gray-400 text-white rounded-full transition duration-300">
							<a href="https://github.com/ingeniousambivert" target="_blank">
								<FaGithub />
							</a>
						</li>
						<li className=" pr-5 text-xl md:text-2xl hover:text-gray-400 text-white transition duration-300">
							<a
								href="https://www.linkedin.com/in/monarchmaisuriya/"
								target="_blank"
							>
								<FaLinkedin />
							</a>
						</li>
					</ul>
				</div> */}
			</div>
		</div>
	);
}
