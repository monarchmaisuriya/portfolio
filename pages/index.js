import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Meta from "../components/meta";
import Header from "../layouts/header";
import Footer from "../layouts/footer";
import About from "../components/about";
import Skills from "../components/skills";
import Work from "../components/work";
import Nav from "../components/nav";
import Contact from "../components/contact";

import { randomQuote } from "../utils";

export default function Main({ githubData, quote }) {
	const mappings = {
		0: "About",
		1: "Skills",
		2: "Work",
		3: "Contact",
	};
	const [current, setCurrent] = React.useState(mappings[0]);

	return (
		<div>
			<Meta />
			<div className="flex justify-center flex-col min-h-screen bg-gradient-to-bottom font-modern">
				<main className="flex-grow">
					<div className="rounded-lg mx-auto my-6 px-6">
						<Header />
						<Swiper
							spaceBetween={25}
							slidesPerView={1}
							onActiveIndexChange={({ activeIndex }) => {
								setCurrent(mappings[activeIndex]);
							}}
						>
							<SwiperSlide>
								<About />
							</SwiperSlide>
							<SwiperSlide>
								<Skills />
							</SwiperSlide>
							<SwiperSlide>
								<Work githubData={githubData} />
							</SwiperSlide>
							<SwiperSlide>
								<Contact />
							</SwiperSlide>
						</Swiper>
						<Nav list={mappings} current={current} setCurrent={setCurrent} />
						<Footer quote={quote} />
					</div>
				</main>
			</div>
		</div>
	);
}

export async function getServerSideProps() {
	// const response = await fetch(
	// 	`https://api.github.com/users/ingeniousambivert/repos?per_page=300&sort=created:desc&client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}&client_secret=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET}`,
	// 	{
	// 		method: "GET",
	// 		headers: {
	// 			Accept: "application/vnd.github.mercy-preview+json",
	// 		},
	// 	}
	// );
	const githubData = []; //await response.json();
	const quote = randomQuote();

	return {
		props: {
			githubData,
			quote,
		},
	};
}
