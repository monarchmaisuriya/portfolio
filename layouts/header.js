import { SiUpwork, SiMedium } from "react-icons/si";
import { RiGithubLine, RiLinkedinFill } from "react-icons/ri";

export default function Header() {
	return (
		<div className="mx-auto container bg-black px-4 py-4 text-white rounded-t-lg border-4 border-white mb-4">
			<div className="flex container justify-between">
				<div>
					<img src="/favicon.png" alt="logo" width={25} height={25} />
				</div>
				<div>
					<ul className="flex flex-row">
						<li className=" pr-5 text-xl md:text-2xl hover:text-gray-400 text-white transition duration-300">
							<a href="https://github.com/ingeniousambivert" target="_blank">
								<RiGithubLine />
							</a>
						</li>

						<li className=" pr-5 text-xl md:text-2xl hover:text-gray-400 text-white transition duration-300 mt-0.5 ">
							<a
								href="https://www.upwork.com/o/profiles/users/~01434db45df923780a/"
								target="_blank"
							>
								<SiUpwork />
							</a>
						</li>
						<li className=" pr-5 text-xl md:text-2xl hover:text-gray-400 text-white transition duration-300">
							<a
								href="https://www.linkedin.com/in/monarchmaisuriya/"
								target="_blank"
							>
								<RiLinkedinFill />
							</a>
						</li>
						<li className=" pr-5 text-xl md:text-2xl hover:text-gray-400 text-white transition duration-300">
							<a href="https://ingeniousambivert.medium.com/" target="_blank">
								<SiMedium />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
