import Meta from "../components/meta.js";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import About from "../components/about";
import Skills from "../components/skills";
import Work from "../components/work";
import Contact from "../components/contact";

import { randomQuote } from "../utils";

export default function Main({ githubData, quote }) {
    return (
        <div>
            <Meta />
            <div className="flex justify-center flex-col min-h-screen gradient-bg">
                <main className="flex-grow">
                    <div className="px-5 md:px-24">
                        <div className="bg-white container rounded-lg mx-auto my-5 md:my-24">
                            <Header />
                            <About />
                            <Skills />
                            <Work githubData={githubData} />
                            <Contact />
                            <Footer quote={quote} />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export async function getStaticProps() {
    const response = await fetch(
        "https://api.github.com/users/ingeniousambivert/repos?per_page=100&sort=created:desc&client_id=22ea12584240e7a2631f&client_secret=bc2deb37cb23d714f3b16483ba93a4a0e61f93e9",
        {
            method: "GET",
            headers: {
                Accept: "application/vnd.github.mercy-preview+json"
            }
        }
    );
    const githubData = await response.json();
    const quote = randomQuote();

    return {
        props: {
            githubData,
            quote
        }
    };
}
