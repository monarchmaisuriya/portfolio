import Header from "./layouts/header"
import Footer from "./layouts/footer"
import About from "./containers/about"
import Skills from "./containers/skills"
import Work from "./containers/work"
import Contact from "./containers/contact"
import { randomQuote } from "./utils"

export default function App() {
	const quote = randomQuote()
	return (
		<div>
			<div className="flex justify-center flex-col min-h-screen font-modern">
				<main className="flex-grow">
					<div className="mx-auto my-4 md:my-10 px-4 md:px-12">
						<div className="flex justify-center px-4 my-9">
							<a href="https://about.me/monarchmaisuriya" target="_blank">
								<img src="favicon-dark.png" alt="logo" width={20} height={20} />
							</a>
						</div>
						<Header />
						<About />
						<Skills />
						<Work />
						<Contact />
						<Footer quote={quote} />
						<div className="flex justify-center px-4 my-9 text-[10px] md:text-xs font-semibold antialiased">
							By&nbsp;
							<a
								className="hover:text-gray-800"
								href="https://about.me/monarchmaisuriya"
								target="_blank">
								Monarch Maisuriya
							</a>
						</div>
					</div>
				</main>
			</div>
		</div>
	)
}
