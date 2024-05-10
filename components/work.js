import { FiExternalLink } from "react-icons/fi";

export default function Work({ githubData }) {
	return (
		<div
			id="work"
			className="mx-auto text-white bg-black border-4 container border-black"
		>
			<div className="container mx-auto p-10 text-center">
				<div>
					<h1 className="text-3xl md:text-6xl">
						<span className="black-text-shadow font-classic">
							All that I've worked on
						</span>
					</h1>
					<p className="minimal-text-shadow mt-5 text-sm">
						Some of my recent projects
					</p>
					<div className="grid grid-row-1 grid-flow-col gap-8 overflow-x-auto mt-10 md:mx-10 py-4">
						<div className="overflow-auto border-5 border-green-400 max-w-full md:w-120 md:h-auto w-104 h-56 mx-auto rounded-md space-y-1 bg-white shadow-md flex flex-wrap content-evenly p-3">
							<div className="work-card-container">
								<img
									src="wagease.webp"
									alt="Wagease"
									className="work-card-image rounded-md object-cover object-center filter "
								/>
								<div className="work-card-overlay">
									<div className="work-card-text overflow-y-auto">
										<p className="text-lg font-semibold mb-2 text-left">
											Wagease
										</p>
										<p className="text-xs md:text-sm my-2 text-left">
											I created and oversee a payroll management Software as a
											Service (SaaS) application. Responsible for its ongoing
											development and maintenance, ensuring effective management
											of employee salaries, taxes, and benefits within a
											cloud-based platform.
										</p>
										<p className="mt-6">
											<a
												href="https://www.wagease.com/"
												target="_blank"
												className="text-xs mt-2 text-white rounded hover:text-black transition duration-300"
											>
												Learn More
											</a>
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="overflow-auto border-5 border-indigo-500 max-w-full md:w-120 md:h-auto w-104 h-56 mx-auto rounded-md space-y-1 bg-white shadow-md flex flex-wrap content-evenly p-3">
							<div className="work-card-container">
								<img
									src="tenacity.webp"
									alt=" Tenacity Writing"
									className="work-card-image rounded object-cover object-center filter "
								/>
								<div className="work-card-overlay">
									<div className="work-card-text overflow-y-auto">
										<p className="text-lg font-semibold mb-2 text-left">
											Tenacity Writing
										</p>
										<p className="text-xs md:text-sm my-2 text-left">
											I created a web application streamlining tasks for a
											writing company. It automates and organizes their
											services, simplifying management. It enhances the
											efficiency of the agency's operations, allowing smoother
											service delivery.
										</p>
										<p className="mt-6">
											<a
												href="https://www.tenacitywriting.com/"
												target="_blank"
												className="text-xs mt-2 text-white rounded hover:text-black transition duration-300"
											>
												Learn More
											</a>
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="overflow-auto border-5 border-indigo-300 max-w-full md:w-120 md:h-auto w-104 h-56 mx-auto rounded-md space-y-1 bg-white shadow-md flex flex-wrap content-evenly p-3">
							<div className="work-card-container">
								<img
									src="attrione.webp"
									alt="AttriOne"
									className="work-card-image rounded object-cover object-center filter "
								/>
								<div className="work-card-overlay">
									<div className="work-card-text overflow-y-auto">
										<p className="text-lg font-semibold mb-2 text-left">
											AttriOne
										</p>
										<p className="text-xs md:text-sm my-2 text-left">
											I created and oversee a micro-SaaS solution simplifying
											UTM link generation and management while offering
											fundamental analytics. This tool efficiently assists in
											creating and tracking links, enhancing marketing
											strategies with user-friendly insights.
										</p>
										<p className="mt-6">
											<a
												href="https://www.attri.one/"
												target="_blank"
												className="text-xs mt-2 text-white rounded hover:text-black transition duration-300"
											>
												Learn More
											</a>
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="overflow-auto border-5 border-red-200 max-w-full md:w-120 md:h-auto w-104 h-56 mx-auto rounded-md space-y-1 bg-white shadow-md flex flex-wrap content-evenly p-3">
							<div className="work-card-container">
								<img
									src="feathers-react-starter.webp"
									alt="Feathers-React Starter"
									className="work-card-image rounded object-cover object-center"
								/>
								<div className="work-card-overlay">
									<div className="work-card-text overflow-y-auto">
										<p className="text-lg font-semibold mb-2 text-left">
											Feathers-React Starter
										</p>
										<p className="text-xs md:text-sm my-2 text-left">
											I created an Application Starter Kit that incorporates
											custom integrations such as payment processing and email
											services. This project involved the development of a
											foundational framework (front-end & back-end) for
											applications, streamlining the inclusion of essential
											functionalities to simplify the development process for
											future projects.
										</p>
										<p className="mt-6">
											<a
												href="https://github.com/ingeniousambivert/Feathers-React-Starter"
												target="_blank"
												className="text-xs mt-2 text-white rounded hover:text-black transition duration-300"
											>
												Learn More
											</a>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* <div>
					<p className="minimal-text-shadow mt-10">Some of my side work</p>
					<div className="grid grid-rows-1 grid-flow-col gap-4 overflow-x-auto mt-10">
						{githubData.map((repo) => {
							if (
								repo.name.search(new RegExp("ingeniousambivert", "i")) &&
								repo.name.search(new RegExp("^v[0-9]+$")) &&
								!repo.name.includes("git") &&
								repo.fork === false
							) {
								return (
									<div
										key={repo.id}
										className="overflow-auto border border-gray-200 h-4/5 px-6 py-5 max-w-full w-72 mx-auto rounded-md space-y-1 bg-white shadow-xl flex flex-wrap content-evenly"
									>
										<p className="font-semibold text-lg text-gray-900 mt-1">
											<a
												className="flex flex-row"
												href={repo.html_url}
												target="_blank"
											>
												{repo.name}&nbsp;
												<FiExternalLink className="mt-2 text-sm text-gray-900 hover:text-black" />
											</a>
										</p>
										<div>
											<p className="truncate text-gray-500">
												{repo.description}
											</p>
										</div>

										<div className="mt-2 mb-2">
											<div className="gap-1 grid grid-rows-1 grid-flow-col mt-2">
												{repo.topics.map((topic) => (
													<span
														key={topic}
														className="bg-black rounded-md p-0.5 shadow-lg no-word-break pl-2 pr-2"
													>
														{topic}
													</span>
												))}
											</div>
										</div>
									</div>
								);
							}
						})}
					</div>
				</div> */}
				<div className="flex justify-center mt-5">
					<a
						className="shadow-lg relative w-auto py-2 px-4 text-sm font-bold rounded-md text-white hover:text-gray-400 transition duration-300"
						href="https://github.com/ingeniousambivert?tab=repositories"
						target="_blank"
					>
						View More
					</a>
				</div>
			</div>
		</div>
	);
}
