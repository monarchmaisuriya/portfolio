import { RiReactjsLine, RiFlutterLine, RiGatsbyLine } from "react-icons/ri";
import { DiReact, DiMysql, DiMongodb, DiPython, DiDart, DiSass } from "react-icons/di";
import { MdExplicit } from "react-icons/md";
import { FiGitPullRequest } from "react-icons/fi";
import { TiFlash } from "react-icons/ti";
import { GiFeather, GiChiliPepper } from "react-icons/gi";
import {
    SiPhp,
    SiTypescript,
    SiJavascript,
    SiRedux,
    SiTailwindcss,
    SiEtsy,
    SiCplusplus,
    SiJest,
    SiPostgresql,
    SiRedis,
    SiFirebase,
    SiStorybook,
    SiNextDotJs,
    SiStrapi,
    SiStyledComponents
} from "react-icons/si";

export default function SKills() {
    return (
        <div id="skills" className="text-center mt-10">
            <div className="mx-auto container mb-10">
                <div>
                    <h1 className="text-5xl white-text-shadow md:text-6xl">All that you need</h1>
                    <p className="minimal-text-shadow mt-5">My development skills are versatile</p>
                </div>

                <div className="flex flex-wrap justify-evenly">
                    <div className="mt-10">
                        <p className="minimal-text-shadow">I usually work with</p>
                        <div className="grid grid-flow-row grid-cols-2 md:grid-rows-3 md:grid-flow-col gap-2 mt-5 text-white ml-2 mr-2 md:ml-0 md:mr-0 overflow-x-auto">
                            <div>
                                <button className="bg-black hover:bg-white hover:text-black transition duration-300 rounded-xl p-3 shadow-lg">
                                    <a
                                        className="flex flex-row"
                                        href="https://javascript.info/"
                                        rel="noopener noreferrer"
                                        target="_blank">
                                        <SiJavascript
                                            style={{ fontSize: `1.75rem`, color: `#f2db30` }}
                                        />
                                        &nbsp; JavaScript
                                    </a>
                                </button>
                            </div>

                            <div>
                                <button className="bg-black text-white hover:bg-white hover:text-black rounded-xl p-3 shadow-lg">
                                    <a
                                        className="flex flex-row"
                                        href="https://docs.feathersjs.com/"
                                        rel="noopener noreferrer"
                                        target="_blank">
                                        <GiFeather style={{ fontSize: `1.75rem` }} />
                                        Feathers
                                    </a>
                                </button>
                            </div>

                            <div>
                                <button className="bg-black hover:bg-white hover:text-black transition duration-300 rounded-xl p-3 shadow-lg">
                                    <a
                                        className="flex flex-row"
                                        href="https://www.typescriptlang.org/"
                                        rel="noopener noreferrer"
                                        target="_blank">
                                        <SiTypescript
                                            style={{ fontSize: `1.75rem`, color: `#3178C6` }}
                                        />
                                        &nbsp; TypeScript
                                    </a>
                                </button>
                            </div>

                            <div>
                                <button className="bg-black hover:bg-white hover:text-black transition duration-300 rounded-xl p-3 shadow-lg   ">
                                    <a
                                        className="flex flex-row"
                                        href="https://reactjs.org/"
                                        rel="noopener noreferrer"
                                        target="_blank">
                                        <RiReactjsLine
                                            style={{ fontSize: `1.75rem`, color: `#56C1DE` }}
                                        />
                                        React
                                    </a>
                                </button>
                            </div>

                            <div>
                                <button className="bg-black hover:bg-white hover:text-black transition duration-300 rounded-xl p-3 shadow-lg  ">
                                    <a
                                        className="flex flex-row"
                                        href="https://www.python.org/"
                                        rel="noopener noreferrer"
                                        target="_blank">
                                        <DiPython
                                            style={{ fontSize: `1.75rem`, color: `#306998` }}
                                        />
                                        Python
                                    </a>
                                </button>
                            </div>

                            <div>
                                <button className="bg-black hover:bg-white hover:text-black transition duration-300 rounded-xl p-3 shadow-lg  ">
                                    <a
                                        className="flex flex-row"
                                        href="https://www.php.net/"
                                        rel="noopener noreferrer"
                                        target="_blank">
                                        <SiPhp style={{ fontSize: `1.75rem`, color: `#9589e5` }} />
                                        &nbsp; PHP
                                    </a>
                                </button>
                            </div>

                            <div>
                                <button className="bg-black  text-white hover:bg-white hover:text-black rounded-xl p-3 shadow-lg  ">
                                    <a
                                        className="flex flex-row"
                                        href="https://expressjs.com/"
                                        rel="noopener noreferrer"
                                        target="_blank">
                                        <SiEtsy
                                            style={{
                                                fontSize: `1.25rem`,
                                                margin: `0.28rem`
                                            }}
                                        />
                                        Express
                                    </a>
                                </button>
                            </div>

                            <div>
                                <button className="bg-black hover:bg-white hover:text-black transition duration-300 rounded-xl p-3 shadow-lg  ">
                                    <a
                                        className="flex flex-row"
                                        href="https://reactnative.dev/"
                                        rel="noopener noreferrer"
                                        target="_blank">
                                        <DiReact
                                            style={{ fontSize: `1.75rem`, color: `#E67972` }}
                                        />
                                        Native
                                    </a>
                                </button>
                            </div>

                            <div>
                                <button className="bg-black hover:bg-white hover:text-black transition duration-300 rounded-xl p-3 shadow-lg  ">
                                    <a
                                        className="flex flex-row"
                                        href="https://fastapi.tiangolo.com/"
                                        rel="noopener noreferrer"
                                        target="_blank">
                                        <TiFlash
                                            style={{ fontSize: `1.75rem`, color: `#3F9586` }}
                                        />
                                        FastAPI
                                    </a>
                                </button>
                            </div>

                            <div>
                                <button className="bg-black text-white hover:bg-white hover:text-black rounded-xl p-3 shadow-lg  ">
                                    <a
                                        className="flex flex-row "
                                        href="https://nextjs.org/"
                                        rel="noopener noreferrer"
                                        target="_blank">
                                        <SiNextDotJs style={{ fontSize: `1.75rem` }} />
                                        &nbsp; Next
                                    </a>
                                </button>
                            </div>

                            <div>
                                <button className="bg-black text-white hover:bg-white hover:text-black rounded-xl p-3 shadow-lg  ">
                                    <a
                                        className="flex flex-row"
                                        href="https://flask.palletsprojects.com/en/1.1.x/"
                                        rel="noopener noreferrer"
                                        target="_blank">
                                        <GiChiliPepper style={{ fontSize: `1.75rem` }} />
                                        Flask
                                    </a>
                                </button>
                            </div>

                            <div>
                                <button className="bg-black hover:bg-white hover:text-black transition duration-300 rounded-xl p-3 shadow-lg  ">
                                    <a
                                        className="flex flex-row"
                                        href="https://ejs.co/"
                                        rel="noopener noreferrer"
                                        target="_blank">
                                        <MdExplicit
                                            style={{
                                                fontSize: `1.75rem`,
                                                color: `#B4CA65`
                                            }}
                                        />
                                        EJS
                                    </a>
                                </button>
                            </div>

                            <div>
                                <button className="bg-black text-white hover:bg-white hover:text-black rounded-xl p-3 shadow-lg  ">
                                    <a
                                        className="flex flex-row"
                                        href="https://styled-components.com/"
                                        rel="noopener noreferrer"
                                        target="_blank">
                                        <SiStyledComponents
                                            style={{
                                                fontSize: `1.75rem`
                                            }}
                                        />
                                        &nbsp; Styled
                                    </a>
                                </button>
                            </div>

                            <div>
                                <button className="bg-black hover:bg-white hover:text-black transition duration-300 rounded-xl p-3 shadow-lg  ">
                                    <a
                                        className="flex flex-row"
                                        href="https://firebase.google.com/"
                                        rel="noopener noreferrer"
                                        target="_blank">
                                        <SiFirebase
                                            style={{
                                                fontSize: `1.75rem`,
                                                color: `#F5AD42`
                                            }}
                                        />
                                        Firebase
                                    </a>
                                </button>
                            </div>

                            <div>
                                <button className="bg-black hover:bg-white hover:text-black transition duration-300 rounded-xl p-3 shadow-lg  ">
                                    <a
                                        className="flex flex-row"
                                        href="https://tailwindcss.com/"
                                        rel="noopener noreferrer"
                                        target="_blank">
                                        <SiTailwindcss
                                            style={{
                                                fontSize: `1.75rem`,
                                                color: `#4bb7d5`
                                            }}
                                        />
                                        &nbsp; Tailwind
                                    </a>
                                </button>
                            </div>
                            <div>
                                <button className="bg-black hover:bg-white hover:text-black transition duration-300 rounded-xl p-3 shadow-lg  ">
                                    <a
                                        className="flex flex-row"
                                        href="https://git-scm.com/"
                                        rel="noopener noreferrer"
                                        target="_blank">
                                        <FiGitPullRequest
                                            style={{
                                                fontSize: `1.75rem`,
                                                color: `#ED4C34`
                                            }}
                                        />
                                        Git SCM
                                    </a>
                                </button>
                            </div>

                            <div>
                                <button className="bg-black hover:bg-white hover:text-black transition duration-300 rounded-xl p-3 shadow-lg   ">
                                    <a
                                        className="flex flex-row"
                                        href="https://redux.js.org/"
                                        rel="noopener noreferrer"
                                        target="_blank">
                                        <SiRedux
                                            style={{
                                                fontSize: `1.75rem`,
                                                color: `#764ABC`
                                            }}
                                        />
                                        &nbsp; &nbsp; Redux
                                    </a>
                                </button>
                            </div>

                            <div>
                                <button className="bg-black hover:bg-white hover:text-black transition duration-300 rounded-xl p-3 shadow-lg  ">
                                    <a
                                        className="flex flex-row"
                                        href="https://www.mysql.com/"
                                        rel="noopener noreferrer"
                                        target="_blank">
                                        <DiMysql
                                            style={{
                                                fontSize: `1.75rem`,
                                                color: ` #389fe0`
                                            }}
                                        />
                                        MySQL
                                    </a>
                                </button>
                            </div>

                            <div className="justify-">
                                <button className="bg-black hover:bg-white hover:text-black transition duration-300 rounded-xl p-3 shadow-lg  ">
                                    <a
                                        className="flex flex-row my-auto"
                                        href="https://www.mongodb.com/"
                                        rel="noopener noreferrer"
                                        target="_blank">
                                        <DiMongodb
                                            style={{
                                                fontSize: `1.75rem`,
                                                color: `#4A944C`
                                            }}
                                        />
                                        &nbsp; MongoDB
                                    </a>
                                </button>
                            </div>

                            <div>
                                <button className="bg-black hover:bg-white hover:text-black transition duration-300 rounded-xl p-3 shadow-lg  ">
                                    <a
                                        className="flex flex-row"
                                        href="https://storybook.js.org/"
                                        rel="noopener noreferrer"
                                        target="_blank">
                                        <SiStorybook
                                            style={{
                                                fontSize: `1.75rem`,
                                                color: `#EC4384`
                                            }}
                                        />
                                        StoryBook
                                    </a>
                                </button>
                            </div>

                            <div className="justify-">
                                <button className="bg-black hover:bg-white hover:text-black transition duration-300 rounded-xl p-3 shadow-lg  ">
                                    <a
                                        className="flex flex-row"
                                        href="https://www.postgresql.org/"
                                        rel="noopener noreferrer"
                                        target="_blank">
                                        <SiPostgresql
                                            style={{
                                                fontSize: `1.5rem`,
                                                color: `#306998`
                                            }}
                                        />
                                        &nbsp; PostgreSQL
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="mt-10">
                        <p className="minimal-text-shadow">I am also familiar with</p>
                        <div className="flex justify-evenly">
                            <div className="grid justify-items-stretch grid-cols-2 grid-flow-row gap-2 mt-5 text-white md:grid-rows-1 md:grid-flow-col">
                                <div className="justify-">
                                    <button className="bg-black hover:bg-white hover:text-black transition duration-300 rounded-xl p-3 shadow-lg  ">
                                        <a
                                            className="flex flex-row"
                                            href="https://dart.dev/"
                                            rel="noopener noreferrer"
                                            target="_blank">
                                            <DiDart
                                                style={{ fontSize: `1.75rem`, color: `#47B7F6` }}
                                            />
                                            Dart
                                        </a>
                                    </button>
                                </div>
                                <div className="justify-">
                                    <button className="bg-black hover:bg-white hover:text-black transition duration-300 rounded-xl p-3 shadow-lg  ">
                                        <a
                                            className="flex flex-row"
                                            href="https://flutter.dev/"
                                            rel="noopener noreferrer"
                                            target="_blank">
                                            <RiFlutterLine
                                                style={{ fontSize: `1.75rem`, color: `#5CD1FB` }}
                                            />
                                            Flutter
                                        </a>
                                    </button>
                                </div>

                                <div className="justify-">
                                    <button className="bg-black hover:bg-white hover:text-black transition duration-300 rounded-xl p-3 shadow-lg  ">
                                        <a
                                            className="flex flex-row"
                                            href="https://en.wikipedia.org/wiki/C%2B%2B"
                                            rel="noopener noreferrer"
                                            target="_blank">
                                            <SiCplusplus
                                                style={{
                                                    fontSize: `1.75rem`,
                                                    color: `#306998`
                                                }}
                                            />
                                            &nbsp; C++
                                        </a>
                                    </button>
                                </div>

                                <div className="justify-">
                                    <button className="bg-black text-white hover:bg-white hover:text-black transition duration-300 rounded-xl p-3 shadow-lg  ">
                                        <a
                                            className="flex flex-row"
                                            href="https://jestjs.io/"
                                            rel="noopener noreferrer"
                                            target="_blank">
                                            <SiJest
                                                style={{
                                                    fontSize: `1.5rem`
                                                }}
                                            />
                                            Jest
                                        </a>
                                    </button>
                                </div>
                                <div className="justify-">
                                    <button className="bg-black hover:bg-white hover:text-black transition duration-300 rounded-xl p-3 shadow-lg  ">
                                        <a
                                            className="flex flex-row"
                                            href="https://sass-lang.com/"
                                            rel="noopener noreferrer"
                                            target="_blank">
                                            <DiSass
                                                style={{ fontSize: `1.75rem`, color: `#CF649A` }}
                                            />
                                            &nbsp; Sass
                                        </a>
                                    </button>
                                </div>
                                <div className="justify-">
                                    <button className="bg-black hover:bg-white hover:text-black transition duration-300 rounded-xl p-3 shadow-lg  ">
                                        <a
                                            className="flex flex-row"
                                            href="https://redis.io/"
                                            rel="noopener noreferrer"
                                            target="_blank">
                                            <SiRedis
                                                style={{ fontSize: `1.75rem`, color: `#d6322d` }}
                                            />
                                            &nbsp; Redis
                                        </a>
                                    </button>
                                </div>
                                <div className="justify-">
                                    <button className="bg-black hover:bg-white hover:text-black transition duration-300 rounded-xl p-3 shadow-lg  ">
                                        <a
                                            className="flex flex-row"
                                            href="https://strapi.io/"
                                            rel="noopener noreferrer"
                                            target="_blank">
                                            <SiStrapi
                                                style={{ fontSize: `1.75rem`, color: `#4d3fb3` }}
                                            />
                                            &nbsp; Strapi
                                        </a>
                                    </button>
                                </div>

                                <div>
                                    <button className="bg-black hover:bg-white hover:text-black transition duration-300 rounded-xl p-3 shadow-lg  ">
                                        <a
                                            className="flex flex-row"
                                            href="https://www.gatsbyjs.org/"
                                            rel="noopener noreferrer"
                                            target="_blank">
                                            <RiGatsbyLine
                                                style={{ fontSize: `1.75rem`, color: `#ab30f2` }}
                                            />
                                            &nbsp; Gatsby
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
