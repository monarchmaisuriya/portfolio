/* eslint-disable react/prop-types */
import React from "react";
import { cn } from "../utils";

const Scrollable = ({ children, className }) => {
	const containerRef = React.useRef(null);

	React.useEffect(() => {
		const container = containerRef.current;

		let isDown = false;
		let startX;
		let scrollLeft;

		const handleMouseDown = (e) => {
			isDown = true;
			startX = e.pageX - container.offsetLeft;
			scrollLeft = container.scrollLeft;
		};

		const handleMouseLeave = () => {
			isDown = false;
		};

		const handleMouseUp = () => {
			isDown = false;
		};

		const handleMouseMove = (e) => {
			if (!isDown) return;
			e.preventDefault();
			const x = e.pageX - container.offsetLeft;
			const walk = (x - startX) * 3;
			container.scrollLeft = scrollLeft - walk;
		};

		container.addEventListener("mousedown", handleMouseDown);
		container.addEventListener("mouseleave", handleMouseLeave);
		container.addEventListener("mouseup", handleMouseUp);
		container.addEventListener("mousemove", handleMouseMove);

		return () => {
			container.removeEventListener("mousedown", handleMouseDown);
			container.removeEventListener("mouseleave", handleMouseLeave);
			container.removeEventListener("mouseup", handleMouseUp);
			container.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return (
		<div
			ref={containerRef}
			className={cn("h-full overflow-auto no-scrollbar", className)}
		>
			{children}
		</div>
	);
};

export default function Work() {
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
					<Scrollable className="grid grid-row-1 grid-flow-col gap-8 mt-10 md:mx-10 py-4">
						<div className="overflow-auto border-2 border-green-400 max-w-full md:w-120 md:h-auto w-104 h-56 mx-auto rounded-md space-y-1 bg-white shadow-md flex flex-wrap content-evenly p-3">
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

						<div className="overflow-auto border-2 border-indigo-500 max-w-full md:w-120 md:h-auto w-104 h-56 mx-auto rounded-md space-y-1 bg-white shadow-md flex flex-wrap content-evenly p-3">
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

						<div className="overflow-auto border-2 border-indigo-300 max-w-full md:w-120 md:h-auto w-104 h-56 mx-auto rounded-md space-y-1 bg-white shadow-md flex flex-wrap content-evenly p-3">
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

						<div className="overflow-auto border-2 border-red-200 max-w-full md:w-120 md:h-auto w-104 h-56 mx-auto rounded-md space-y-1 bg-white shadow-md flex flex-wrap content-evenly p-3">
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
					</Scrollable>
				</div>

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
