import { RiReactjsLine } from "react-icons/ri";
import { DiMysql, DiMongodb, DiPython } from "react-icons/di";
import { TbBrandReactNative, TbBrandGolang } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import {
	SiTypescript,
	SiJavascript,
	SiJest,
	SiPostgresql,
	SiRemix,
	SiCypress,
	SiGooglecloud,
	SiDocker,
	SiNextdotjs,
	SiAmazonaws,
} from "react-icons/si";

export default function Skills() {
	return (
		<div className="mx-auto bg-white border-4 container border-black ">
			<div id="skills" className="text-center pt-10 mb-20 ">
				<div className="mx-auto container mb-10">
					<div>
						<h1 className="font-classic text-3xl white-text-shadow md:text-6xl md:mx-2">
							All that you need
						</h1>
						<p className="minimal-text-shadow mt-5 text-sm">
							I usually work with
						</p>
					</div>

					<div className="flex flex-wrap justify-evenly">
						<div className="mt-6">
							<div className="grid grid-flow-row grid-cols-2 md:grid-rows-3 md:grid-flow-col gap-2 mt-5 text-white ml-2 mr-2 md:ml-0 md:mr-0 overflow-x-auto">
								<div>
									<button className="bg-black hover:bg-white hover:border-black border-2 hover:text-black transition duration-300 rounded-xl p-4 shadow-lg ">
										<a
											className="flex flex-row"
											href="https://en.wikipedia.org/wiki/JavaScript"
											rel="noopener noreferrer"
											target="_blank"
										>
											<SiJavascript
												style={{
													fontSize: `1.25rem`,
													margin: `2px 2px 0 0`,
													color: `#f2db30`,
												}}
											/>
											&nbsp;JavaScript
										</a>
									</button>
								</div>

								<div>
									<button className="bg-black hover:bg-white hover:border-black border-2 hover:text-black transition duration-300 rounded-xl p-4 shadow-lg ">
										<a
											className="flex flex-row"
											href="https://www.typescriptlang.org/"
											rel="noopener noreferrer"
											target="_blank"
										>
											<SiTypescript
												style={{
													color: `#3178C6`,
													fontSize: `1.25rem`,
													margin: `2px 2px 0 0`,
												}}
											/>
											&nbsp;TypeScript
										</a>
									</button>
								</div>

								<div>
									<button className="bg-black hover:bg-white hover:border-black border-2 hover:text-black transition duration-300 rounded-xl p-4 shadow-lg">
										<a
											className="flex flex-row"
											href="https://nodejs.org/en"
											rel="noopener noreferrer"
											target="_blank"
										>
											<FaNodeJs
												style={{ fontSize: `1.5rem`, color: `#43A047` }}
											/>
											&nbsp;NodeJS
										</a>
									</button>
								</div>

								<div>
									<button className="bg-black hover:bg-white hover:border-black border-2 hover:text-black transition duration-300 rounded-xl p-4 shadow-lg ">
										<a
											className="flex flex-row"
											href="https://reactjs.org/"
											rel="noopener noreferrer"
											target="_blank"
										>
											<RiReactjsLine
												style={{ fontSize: `1.5rem`, color: `#56C1DE` }}
											/>
											&nbsp;React
										</a>
									</button>
								</div>

								<div>
									<button className="bg-black hover:bg-white hover:border-black border-2 hover:text-black transition duration-300 rounded-xl p-4 shadow-lg">
										<a
											className="flex flex-row"
											href="https://www.python.org/"
											rel="noopener noreferrer"
											target="_blank"
										>
											<DiPython
												style={{ fontSize: `1.5rem`, color: `#306998` }}
											/>
											&nbsp;Python
										</a>
									</button>
								</div>

								<div>
									<button className="bg-black hover:bg-white hover:border-black border-2 hover:text-black transition duration-300 rounded-xl p-4 shadow-lg">
										<a
											className="flex flex-row"
											href="https://remix.run/"
											rel="noopener noreferrer"
											target="_blank"
										>
											<SiRemix
												style={{
													fontSize: `1.25rem`,
												}}
											/>
											&nbsp;Remix
										</a>
									</button>
								</div>

								<div>
									<button className="bg-black hover:bg-white hover:border-black border-2 hover:text-black transition duration-300 rounded-xl p-4 shadow-lg">
										<a
											className="flex flex-row"
											href="https://go.dev/"
											rel="noopener noreferrer"
											target="_blank"
										>
											<TbBrandGolang
												style={{
													fontSize: `2rem`,
													margin: `-3px 2px -6px 0`,
													color: `#3F9586`,
												}}
											/>
											Go
										</a>
									</button>
								</div>

								<div>
									<button className="bg-black text-white hover:bg-white hover:border-black border-2 hover:text-black rounded-xl p-4 shadow-lg  ">
										<a
											className="flex flex-row "
											href="https://nextjs.org/"
											rel="noopener noreferrer"
											target="_blank"
										>
											<SiNextdotjs style={{ fontSize: `1.5rem` }} />
											&nbsp;Next
										</a>
									</button>
								</div>

								<div>
									<button className="bg-black hover:bg-white hover:border-black border-2 hover:text-black transition duration-300 rounded-xl p-4 shadow-lg">
										<a
											className="flex flex-row"
											href="https://reactnative.dev/"
											rel="noopener noreferrer"
											target="_blank"
										>
											<TbBrandReactNative
												style={{ fontSize: `1.5rem`, color: `#E67972` }}
											/>
											&nbsp;Native
										</a>
									</button>
								</div>

								<div>
									<button className="bg-black  text-white hover:bg-white hover:border-black border-2 hover:text-black rounded-xl p-4 shadow-lg  ">
										<a
											className="flex flex-row"
											href="https://www.cypress.io/"
											rel="noopener noreferrer"
											target="_blank"
										>
											<SiCypress
												style={{
													fontSize: `1.25rem`,
													margin: `2px 4px 0 0`,
												}}
											/>
											Cypress
										</a>
									</button>
								</div>

								<div>
									<button className="bg-black hover:bg-white hover:border-black border-2 hover:text-black transition duration-300 rounded-xl p-4 shadow-lg">
										<a
											className="flex flex-row"
											href="https://aws.amazon.com/"
											rel="noopener noreferrer"
											target="_blank"
										>
											<SiAmazonaws
												style={{
													fontSize: `1.5rem`,
													color: `#ffc107`,
												}}
											/>
											&nbsp; AWS
										</a>
									</button>
								</div>

								<div>
									<button className="bg-black hover:bg-white hover:border-black border-2 hover:text-black transition duration-300 rounded-xl p-4 shadow-lg">
										<a
											className="flex flex-row"
											href="https://www.mysql.com/"
											rel="noopener noreferrer"
											target="_blank"
										>
											<DiMysql
												style={{
													fontSize: `1.5rem`,
													color: ` #389fe0`,
												}}
											/>
											&nbsp;MySQL
										</a>
									</button>
								</div>

								<div className="justify-">
									<button className="bg-black hover:bg-white hover:border-black border-2 hover:text-black transition duration-300 rounded-xl p-4 shadow-lg">
										<a
											className="flex flex-row my-auto"
											href="https://www.mongodb.com/"
											rel="noopener noreferrer"
											target="_blank"
										>
											<DiMongodb
												style={{
													fontSize: `1.5rem`,
													color: `#4A944C`,
												}}
											/>
											&nbsp;Mongo
										</a>
									</button>
								</div>

								<div>
									<button className="bg-black hover:bg-white hover:border-black border-2 hover:text-black transition duration-300 rounded-xl p-4 shadow-lg">
										<a
											className="flex flex-row"
											href="https://www.postgresql.org/"
											rel="noopener noreferrer"
											target="_blank"
										>
											<SiPostgresql
												style={{
													fontSize: `1.5rem`,
													color: `#306998`,
												}}
											/>
											&nbsp;Postgres
										</a>
									</button>
								</div>

								<div>
									<button className="bg-black hover:bg-white hover:border-black border-2 hover:text-black transition duration-300 rounded-xl p-4 shadow-lg  ">
										<a
											className="flex flex-row"
											href="https://cloud.google.com/products"
											rel="noopener noreferrer"
											target="_blank"
										>
											<SiGooglecloud
												style={{
													fontSize: `1.60rem`,
													color: `#F5AD42`,
												}}
											/>
											&nbsp;GCP
										</a>
									</button>
								</div>

								<div>
									<button className="bg-black hover:bg-white hover:border-black border-2 hover:text-black transition duration-300 rounded-xl p-4 shadow-lg ">
										<a
											className="flex flex-row"
											href="https://jestjs.io/"
											rel="noopener noreferrer"
											target="_blank"
										>
											<SiJest
												style={{
													fontSize: `1.5rem`,
													color: `#F44336`,
												}}
											/>
											&nbsp;Jest
										</a>
									</button>
								</div>

								<div>
									<button className="bg-black hover:bg-white hover:border-black border-2 hover:text-black rounded-xl p-4 shadow-lg  ">
										<a
											className="flex flex-row"
											href="https://www.docker.com/"
											rel="noopener noreferrer"
											target="_blank"
										>
											<SiDocker
												style={{
													fontSize: `1.5rem`,
													color: `#06ade5`,
												}}
											/>
											&nbsp;Docker
										</a>
									</button>
								</div>

								<div>
									<button className="bg-black text-white hover:bg-white hover:border-black border-2 hover:text-black rounded-xl p-4 shadow-lg">
										<a
											className="flex flex-row"
											href="https://git-scm.com/"
											rel="noopener noreferrer"
											target="_blank"
										>
											<FaGitAlt
												style={{
													fontSize: `1.75rem`,
													margin: `-2px 4px -2px 0`,
													color: `#ED4C34`,
												}}
											/>
											Git
										</a>
									</button>
								</div>
							</div>
						</div>
					</div>
					<p className="minimal-text-shadow mt-5 mx-10 md:mx-0 text-sm">
						And I can quickly adapt & learn anything.
					</p>
				</div>
			</div>
		</div>
	);
}
