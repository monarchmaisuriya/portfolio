import { SiUpwork, SiMedium } from "react-icons/si";
import { RiGithubLine, RiLinkedinFill } from "react-icons/ri";

export default function Footer({ quote }) {
	const date = new Date();
	const currentYear = date.getFullYear();
	return (
		<footer className="mx-auto bg-black p-2 text-white rounded-b-lg container border-4 border-white mt-2">
			<div className="container mx-auto px-4 my-3">
				<div className="grid grid-cols-1 gap-4 md:grid-cols-6">
					<div className="md:col-span-4">
						<p className="italic">{quote}</p>
					</div>
					<div className="text-center md:text-right md:col-span-2">
						{/* <p>
							<a
								target="_blank"
								href="https://www.linkedin.com/in/monarchmaisuriya/ "
								className="hover:text-blue-400"
							>
								Connect With Me
							</a>
						</p> */}
						<p>
							<a
								href="mailto:monarchmaisuriya@gmail.com"
								className="hover:text-blue-400"
							>
								monarchmaisuriya@gmail.com
							</a>
						</p>
					</div>
				</div>
			</div>
			{/* <div className="mx-auto mb-2">
				<div className="flex flex-row justify-center items-center gap-3">
					<img src="/favicon.png" alt="logo" width={15} height={15} />
					<span className="font-bold">&copy; {currentYear} </span>
				</div>
			</div> */}
		</footer>
	);
}
