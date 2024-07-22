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
						<h1 className="  text-2xl white-text-shadow md:text-4xl md:mx-2">
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
									<button className="bg-black hover:bg-white hover:border-black border-2 hover:text-black transition duration-300 rounded-xl p-4 shadow-lg w-[150px] flex justify-evenly">
										<SiJavascript
											style={{
												fontSize: `1.15rem`,
												margin: `4px 2px 0 0`,
												color: `#f2db30`,
											}}
										/>
										<a
											className="flex flex-row antialiased"
											href="https://en.wikipedia.org/wiki/JavaScript"
											rel="noopener noreferrer"
											target="_blank"
										>
											JavaScript
										</a>
									</button>
								</div>

								<div>
									<button className="bg-black hover:bg-white hover:border-black border-2 hover:text-black transition duration-300 rounded-xl p-4 shadow-lg w-[150px] flex justify-evenly">
										<SiTypescript
											style={{
												color: `#3178C6`,
												fontSize: `1.15rem`,
												margin: `4px 2px 0 0`,
											}}
										/>
										<a
											className="flex flex-row antialiased"
											href="https://www.typescriptlang.org/"
											rel="noopener noreferrer"
											target="_blank"
										>
											TypeScript
										</a>
									</button>
								</div>

								<div>
									<button className="bg-black hover:bg-white hover:border-black border-2 hover:text-black transition duration-300 rounded-xl p-4 shadow-lg w-[150px] flex justify-evenly">
										<FaNodeJs
											style={{ fontSize: `1.5rem`, color: `#43A047` }}
										/>
										<a
											className="flex flex-row antialiased"
											href="https://nodejs.org/en"
											rel="noopener noreferrer"
											target="_blank"
										>
											NodeJS
										</a>
									</button>
								</div>

								<div>
									<button className="bg-black hover:bg-white hover:border-black border-2 hover:text-black transition duration-300 rounded-xl p-4 shadow-lg w-[150px] flex justify-evenly">
										<RiReactjsLine
											style={{ fontSize: `1.5rem`, color: `#56C1DE` }}
										/>
										<a
											className="flex flex-row antialiased"
											href="https://reactjs.org/"
											rel="noopener noreferrer"
											target="_blank"
										>
											React
										</a>
									</button>
								</div>

								<div>
									<button className="bg-black hover:bg-white hover:border-black border-2 hover:text-black transition duration-300 rounded-xl p-4 shadow-lg w-[150px] flex justify-evenly">
										<DiPython
											style={{ fontSize: `1.5rem`, color: `#306998` }}
										/>
										<a
											className="flex flex-row antialiased"
											href="https://www.python.org/"
											rel="noopener noreferrer"
											target="_blank"
										>
											Python
										</a>
									</button>
								</div>

								<div>
									<button className="bg-black hover:bg-white hover:border-black border-2 hover:text-black transition duration-300 rounded-xl p-4 shadow-lg w-[150px] flex justify-evenly">
										<TbBrandGolang
											style={{
												fontSize: `2.15rem`,
												margin: `-4px -8px -8px 0`,
												color: `#3F9586`,
											}}
										/>
										<a
											className="flex flex-row antialiased"
											href="https://go.dev/"
											rel="noopener noreferrer"
											target="_blank"
										>
											Go
										</a>
									</button>
								</div>

								<div>
									<button className="bg-black text-white hover:bg-white hover:border-black border-2 hover:text-black rounded-xl p-4 shadow-lg w-[150px] flex justify-evenly">
										<SiNextdotjs style={{ fontSize: `1.5rem` }} />
										<a
											className="flex flex-row antialiased"
											href="https://nextjs.org/"
											rel="noopener noreferrer"
											target="_blank"
										>
											NextJS
										</a>
									</button>
								</div>

								<div>
									<button className="bg-black hover:bg-white hover:border-black border-2 hover:text-black transition duration-300 rounded-xl p-4 shadow-lg w-[150px] flex justify-evenly">
										<TbBrandReactNative
											style={{ fontSize: `1.5rem`, color: `#E67972` }}
										/>
										<a
											className="flex flex-row antialiased"
											href="https://reactnative.dev/"
											rel="noopener noreferrer"
											target="_blank"
										>
											R-Native
										</a>
									</button>
								</div>

								<div>
									<button className="bg-black hover:bg-white hover:border-black border-2 hover:text-black transition duration-300 rounded-xl p-4 shadow-lg w-[150px] flex justify-evenly">
										<SiAmazonaws
											style={{
												fontSize: `1.5rem`,
												color: `#ffc107`,
											}}
										/>
										<a
											className="flex flex-row antialiased"
											href="https://aws.amazon.com/"
											rel="noopener noreferrer"
											target="_blank"
										>
											AWS
										</a>
									</button>
								</div>

								<div>
									<button className="bg-black hover:bg-white hover:border-black border-2 hover:text-black transition duration-300 rounded-xl p-4 shadow-lg w-[150px] flex justify-evenly">
										<DiMysql
											style={{
												fontSize: `1.5rem`,
												color: ` #389fe0`,
											}}
										/>
										<a
											className="flex flex-row antialiased"
											href="https://www.mysql.com/"
											rel="noopener noreferrer"
											target="_blank"
										>
											MySQL
										</a>
									</button>
								</div>

								<div className="justify-">
									<button className="bg-black hover:bg-white hover:border-black border-2 hover:text-black transition duration-300 rounded-xl p-4 shadow-lg w-[150px] flex justify-evenly">
										<DiMongodb
											style={{
												fontSize: `1.5rem`,
												color: `#4A944C`,
											}}
										/>
										<a
											className="flex flex-row antialiased my-auto"
											href="https://www.mongodb.com/"
											rel="noopener noreferrer"
											target="_blank"
										>
											MongoDB
										</a>
									</button>
								</div>

								<div>
									<button className="bg-black hover:bg-white hover:border-black border-2 hover:text-black transition duration-300 rounded-xl p-4 shadow-lg w-[150px] flex justify-evenly">
										<SiPostgresql
											style={{
												fontSize: `1.5rem`,
												color: `#306998`,
											}}
										/>
										<a
											className="flex flex-row antialiased"
											href="https://www.postgresql.org/"
											rel="noopener noreferrer"
											target="_blank"
										>
											Postgres
										</a>
									</button>
								</div>

								<div>
									<button className="bg-black hover:bg-white hover:border-black border-2 hover:text-black transition duration-300 rounded-xl p-4 shadow-lg w-[150px] flex justify-evenly">
										<SiGooglecloud
											style={{
												fontSize: `1.60rem`,
												margin: `-2px -8px -2px 0`,
												color: `#F5AD42`,
											}}
										/>
										<a
											className="flex flex-row antialiased"
											href="https://cloud.google.com/products"
											rel="noopener noreferrer"
											target="_blank"
										>
											GCP
										</a>
									</button>
								</div>

								<div>
									<button className="bg-black hover:bg-white hover:border-black border-2 hover:text-black rounded-xl p-4 shadow-lg w-[150px] flex justify-evenly">
										<SiDocker
											style={{
												fontSize: `1.5rem`,
												color: `#06ade5`,
											}}
										/>
										<a
											className="flex flex-row antialiased"
											href="https://www.docker.com/"
											rel="noopener noreferrer"
											target="_blank"
										>
											Docker
										</a>
									</button>
								</div>

								<div>
									<button className="bg-black text-white hover:bg-white hover:border-black border-2 hover:text-black rounded-xl p-4 shadow-lg w-[150px] flex justify-evenly">
										<FaGitAlt
											style={{
												fontSize: `1.75rem`,
												margin: `-2px -14px -2px 0`,
												color: `#ED4C34`,
											}}
										/>
										<a
											className="flex flex-row antialiased"
											href="https://git-scm.com/"
											rel="noopener noreferrer"
											target="_blank"
										>
											Git
										</a>
									</button>
								</div>
							</div>
						</div>
					</div>
					<p className="minimal-text-shadow mt-5 mx-10 md:mx-0 text-sm">
						And I can quickly learn and adapt to anything
					</p>
				</div>
			</div>
		</div>
	);
}
