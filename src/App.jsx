import Header from "./layouts/header";
import Footer from "./layouts/footer";
import About from "./containers/about";
import Skills from "./containers/skills";
import Work from "./containers/work";
import Contact from "./containers/contact";
import { randomQuote } from "./utils";

export default function App() {
	const quote = randomQuote();
	return (
		<div>
			<div className="flex justify-center flex-col min-h-screen font-modern">
				<main className="flex-grow">
					<div className="mx-auto my-4 md:my-10 px-4 md:px-12">
						<Header />
						<About />
						<Skills />
						<Work />
						<Contact />
						<Footer quote={quote} />
					</div>
				</main>
			</div>
		</div>
	);
}
