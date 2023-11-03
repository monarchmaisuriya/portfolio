export default function About() {
	return (
		<div
			id="about"
			className="bg-black text-white border-4 border-white border-t-0 border-b-0"
		>
			<div className="mx-auto container p-10 pb-20 text-xl md:text-2xl md:ml-2 md:mr-2">
				<div className="text-center">
					<h1 className="font-classic text-5xl white-text-shadow md:text-6xl ml-2 mr-2">
						Hello World
					</h1>
					<p className="minimal-text-shadow my-5 text-sm">Glad to see you</p>
				</div>
				<div className="md:mx-10 mt-10">
					<p>
						I am&nbsp;
						<a
							className="text-blue-400 hover:text-blue-500 transition duration-300"
							href="https://about.me/monarchmaisuriya"
							target="_blank"
						>
							Monarch
						</a>
						, an adept, driven & self-directed software developer. My expertise
						spans the entire realm of development, from the front-end to the
						back-end. I'm all about building robust systems, crafting sleek
						interfaces and writing code that effortlessly solves problems.
						Innovating new features and services to supercharge applications is
						where I thrive. I confidently collaborate with individuals & teams
						who share my energy and drive. I turn innovative ideas into
						functional code, and I love what I do.
					</p>
					<p>
						If you're looking build something remarkable, I'm just a&nbsp;
						<a
							className="text-blue-400 hover:text-blue-500 transition duration-300"
							href="#contact"
						>
							message away.
						</a>
					</p>
				</div>
			</div>
		</div>
	);
}
