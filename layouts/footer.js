export default function Footer({ quote }) {
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
								href="mailto:monarchmaisuriya@gmail.com"
								className="hover:text-gray-300"
							>
								monarchmaisuriya@gmail.com
							</a>
						</p>
						<p>
							<a
								target="_blank"
								href="https://about.me/monarchmaisuriya"
								className="hover:text-gray-300"
							>
								about.me
							</a>
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
