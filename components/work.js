import { FiExternalLink } from "react-icons/fi";

export default function Work({ githubData }) {
    return (
        <div id="work" className="text-white">
            <div className="container mx-auto p-10 text-center">
                <div>
                    <h1 className="text-5xl md:text-6xl">
                        <span className="black-text-shadow">All that I've worked on</span>
                    </h1>
                    <p className="minimal-text-shadow mt-5">Some of my recent projects</p>
                    <div className="grid grid-rows-1 grid-flow-col gap-4 overflow-x-auto mt-10 py-4">
                        <div className="overflow-auto border-4 border-white max-w-full md:w-120 md:h-auto w-104 h-56 mx-auto rounded-md space-y-1 bg-white shadow-md flex flex-wrap content-evenly">
                            <div className="work-card-container">
                                <img
                                    src="audiencely.webp"
                                    alt="Audiencely"
                                    className="work-card-image rounded object-cover object-center filter "
                                />
                                <div className="work-card-overlay">
                                    <div className="work-card-text">
                                        <p className="text-lg font-semibold mb-2">Audiencely</p>
                                        <p className="text-sm my-2">
                                            Developed landing page. Collaborated for SEO
                                            Optimization.
                                        </p>
                                        <p className="mt-6">
                                            <a
                                                href="https://www.audiencelyhq.com/"
                                                target="_blank"
                                                className="text-xs mt-2 text-white rounded hover:text-black transition duration-300">
                                                Learn More
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="overflow-auto border-4 border-white max-w-full md:w-120 md:h-auto w-104 h-56 mx-auto rounded-md space-y-1 bg-white shadow-md flex flex-wrap content-evenly">
                            <div className="work-card-container">
                                <img
                                    src="feathers-react-starter.webp"
                                    alt="Feathers-React Starter"
                                    className="work-card-image rounded object-cover object-center"
                                />
                                <div className="work-card-overlay">
                                    <div className="work-card-text">
                                        <p className="text-lg font-semibold mb-2">
                                            Feathers-React Starter
                                        </p>
                                        <p className="text-sm my-2">
                                            Developed a B2B Application Starter Kit.
                                        </p>
                                        <p className="mt-6">
                                            <a
                                                href="https://github.com/ingeniousambivert/Feathers-React-Starter"
                                                target="_blank"
                                                className="text-xs mt-2 text-white rounded hover:text-black transition duration-300">
                                                Learn More
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <p className="minimal-text-shadow mt-10">Some of my side work</p>
                    <div className="grid grid-rows-1 grid-flow-col gap-4 overflow-x-auto mt-10">
                        {githubData.map((repo) => {
                            if (
                                repo.name.search(new RegExp("ingeniousambivert", "i")) &&
                                repo.name.search(new RegExp("^v[0-9]+$")) &&
                                !repo.name.includes("git")
                            ) {
                                return (
                                    <div
                                        key={repo.id}
                                        className="overflow-auto border border-gray-200 h-4/5 px-6 py-5 max-w-full w-72 mx-auto rounded-md space-y-1 bg-white shadow-xl flex flex-wrap content-evenly">
                                        <p className="font-semibold text-lg text-gray-900 mt-1">
                                            <a
                                                className="flex flex-row"
                                                href={repo.html_url}
                                                target="_blank">
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
                                                        className="bg-black rounded-md p-0.5 shadow-lg no-word-break pl-2 pr-2">
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
                </div>
                <div className="flex justify-center mt-5">
                    <button className="shadow-lg relative w-auto py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:text-black hover:bg-white transition duration-300">
                        <a
                            href="https://github.com/ingeniousambivert?tab=repositories"
                            target="_blank">
                            View More
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );
}
