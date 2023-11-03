export default function Footer({ quote }) {
	const date = new Date();
	const currentYear = date.getFullYear();
	return (
		<footer className=" bg-black text-white rounded-b-lg border-4 border-white border-t-0">
			<div className="container mx-auto p-10">
				<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
					<div>
						<p className="italic">{quote}</p>
					</div>
					<div className="text-center md:text-right">
						<p>
							<a
								target="_blank"
								href="https://www.linkedin.com/in/monarchmaisuriya/ "
								className="hover:text-blue-400"
							>
								Connect With Me
							</a>
						</p>
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
			<div className="mx-auto mb-6">
				<div className="flex flex-row justify-center items-center gap-3">
					<img src="/favicon.png" alt="logo" width={15} height={15} />
					<span className="font-bold">&copy; {currentYear} </span>
				</div>
			</div>
		</footer>
	);
}
