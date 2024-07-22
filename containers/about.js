export default function About() {
	return (
		<div
			id="about"
			className=" mx-auto bg-black text-white border-4 container border-black "
		>
			<div className="mx-auto container pt-6 pr-10 pl-10 pb-20 text-xl md:text-2xl md:ml-2 md:mr-2">
				<div className="text-center">
					<h1 className="font-classic text-5xl white-text-shadow md:text-6xl ml-2 mr-2">
						Hello World
					</h1>
					<p className="minimal-text-shadow my-5 text-sm">Glad to see you</p>
				</div>
				<div className="md:mx-10 mt-10 font-medium">
					<p>
						I am&nbsp;
						<a
							className="text-blue-400 hover:text-blue-500 transition duration-300"
							href="https://about.me/monarchmaisuriya"
							target="_blank"
						>
							Monarch
						</a>
						, an adept, driven & self-directed software engineer with a passion
						for creating cutting-edge solutions. I thrive on transforming
						complex ideas into practical code, turning novel concepts into
						reality.
					</p>
					<p>
						My professional journey is defined by my commitment to turning ideas
						into tangible successes. I specialize in leveraging my skills to
						build robust and innovative solutions that meet and exceed
						expectations. Life, for me, is a continuous cycle of experiments and
						experiences, shaping my approach to software engineering and driving
						me to explore new horizons in the ever-evolving tech landscape. And,
						of course, I thoroughly enjoy my work.
					</p>
					<p>
						If you're looking to build something remarkable, I'm just a&nbsp;
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
