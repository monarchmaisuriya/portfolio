import {
    RiReactjsLine,
    RiHtml5Line,
    RiCss3Line,
    RiFlutterLine,
    RiGatsbyLine
} from "react-icons/ri";
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
        <div id="skills" className="text-center">
            <div className="mx-auto container mb-10">
                <div>
                    <h1 className="text-5xl white-text-shadow md:text-6xl">
                        All the need that you want
                    </h1>
                    <p className="minimal-text-shadow mt-5">My development skills are versatile</p>
                </div>

                <div className="flex flex-wrap justify-evenly">
                    <div className="grid justify-items-center grid-cols-1 grid-flow-row gap-x-12 mt-10 md:grid-cols-2 md:grid-row-3">
                        <div className="">
                            <p className="minimal-text-shadow ">Languages</p>
                            <div className="grid grid-rows-2 grid-flow-col gap-2 mt-5 md:grid-rows-2 text-white">
                                <div>
                                    <button className="bg-black rounded-full p-3 shadow-lg icon-button">
                                        <a
                                            className="flex flex-row"
                                            href="https://html.spec.whatwg.org/multipage/"
                                            rel="noopener noreferrer"
                                            target="_blank">
                                            <RiHtml5Line
                                                style={{
                                                    fontSize: `1.75rem`,
                                                    color: `#e28d58`
                                                }}
                                            />
                                            <span className="">HTML</span>
                                        </a>
                                    </button>
                                </div>

                                <div>
                                    <button className="bg-black rounded-full p-3 shadow-lg icon-button self-center">
                                        <a
                                            className="flex flex-row"
                                            href="https://www.w3.org/Style/CSS/Overview.en.html"
                                            rel="noopener noreferrer"
                                            target="_blank">
                                            <RiCss3Line
                                                style={{ fontSize: `1.75rem`, color: `#2373BA` }}
                                            />
                                            CSS
                                        </a>
                                    </button>
                                </div>

                                <div>
                                    <button className="bg-black rounded-full p-3 shadow-lg icon-button self-center">
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
                                    <button className="bg-black rounded-full p-3 shadow-lg icon-button self-center">
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
                                    <button className="bg-black rounded-full p-3 shadow-lg icon-button self-center">
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
                                    <button className="bg-black rounded-full p-3 shadow-lg icon-button self-center">
                                        <a
                                            className="flex flex-row"
                                            href="https://www.php.net/"
                                            rel="noopener noreferrer"
                                            target="_blank">
                                            <SiPhp
                                                style={{ fontSize: `1.75rem`, color: `#9589e5` }}
                                            />
                                            &nbsp; PHP
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="minimal-text-shadow mt-10 md:m-0">Frameworks</p>
                            <div className="grid grid-rows-3 grid-cols-3 md:grid-flow-col gap-2 mt-5 md:grid-rows-2 text-white">
                                <div>
                                    <button className="bg-black rounded-full p-3 shadow-lg icon-button self-center ">
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
                                    <button className="bg-black rounded-full p-3 shadow-lg icon-button self-center">
                                        <a
                                            className="flex flex-row"
                                            href="https://docs.feathersjs.com/"
                                            rel="noopener noreferrer"
                                            target="_blank">
                                            <GiFeather
                                                style={{ fontSize: `1.75rem`, color: `#ffffff` }}
                                            />
                                            Feathers
                                        </a>
                                    </button>
                                </div>

                                <div>
                                    <button className="bg-black rounded-full p-3 shadow-lg icon-button self-center">
                                        <a
                                            className="flex flex-row"
                                            href="https://expressjs.com/"
                                            rel="noopener noreferrer"
                                            target="_blank">
                                            <SiEtsy
                                                style={{
                                                    fontSize: `1.25rem`,
                                                    margin: `0.28rem`,
                                                    color: `#ffffff`
                                                }}
                                            />
                                            Express
                                        </a>
                                    </button>
                                </div>

                                <div>
                                    <button className="bg-black rounded-full p-3 shadow-lg icon-button self-center">
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
                                    <button className="bg-black rounded-full p-3 shadow-lg icon-button self-center">
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
                                    <button className="bg-black rounded-full p-3 shadow-lg icon-button self-center">
                                        <a
                                            className="flex flex-row"
                                            href="https://nextjs.org/"
                                            rel="noopener noreferrer"
                                            target="_blank">
                                            <SiNextDotJs
                                                style={{ fontSize: `1.75rem`, color: `#fff` }}
                                            />
                                            &nbsp; Next
                                        </a>
                                    </button>
                                </div>

                                <div>
                                    <button className="bg-black rounded-full p-3 shadow-lg icon-button self-center">
                                        <a
                                            className="flex flex-row"
                                            href="https://flask.palletsprojects.com/en/1.1.x/"
                                            rel="noopener noreferrer"
                                            target="_blank">
                                            <GiChiliPepper
                                                style={{ fontSize: `1.75rem`, color: `#efefef` }}
                                            />
                                            Flask
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10">
                            <p className="minimal-text-shadow ">Tools</p>
                            <div className="flex justify-center">
                                <div className="grid grid-rows-2 grid-flow-col gap-2 mt-5 text-white">
                                    <div>
                                        <button className="bg-black rounded-full p-3 shadow-lg icon-button self-center ">
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
                                        <button className="bg-black rounded-full p-3 shadow-lg icon-button self-center">
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
                                        <button className="bg-black rounded-full p-3 shadow-lg icon-button self-center">
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
                                        <button className="bg-black rounded-full p-3 shadow-lg icon-button self-center">
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

                                    <div>
                                        <button className="bg-black rounded-full p-3 shadow-lg icon-button self-center">
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
                                        <button className="bg-black rounded-full p-3 shadow-lg icon-button self-center">
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
                                                Git
                                            </a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10">
                            <p className="minimal-text-shadow ">Databases</p>
                            <div className="flex justify-evenly">
                                <div className="grid justify-items-stretch grid-rows-2 grid-flow-col gap-2 mt-5 text-white md:grid-rows-1">
                                    <div className="justify-self-center">
                                        <button className="bg-black rounded-full p-3 shadow-lg icon-button self-center">
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

                                    <div className="justify-self-center">
                                        <button className="bg-black rounded-full p-3 shadow-lg icon-button self-center">
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

                                    <div className="justify-self-center">
                                        <button className="bg-black rounded-full p-3 shadow-lg icon-button self-center">
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="mt-10">
                        <p className="minimal-text-shadow ">Familiar</p>
                        <div className="flex justify-evenly">
                            <div className="grid justify-items-stretch grid-cols-3 grid-flow-row gap-2 mt-5 text-white md:grid-rows-1 md:grid-flow-col">
                                <div className="justify-self-center">
                                    <button className="bg-black rounded-full p-3 shadow-lg icon-button self-center">
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
                                <div className="justify-self-center">
                                    <button className="bg-black rounded-full p-3 shadow-lg icon-button self-center">
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

                                <div className="justify-self-center">
                                    <button className="bg-black rounded-full p-3 shadow-lg icon-button self-center">
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

                                <div className="justify-self-center">
                                    <button className="bg-black rounded-full p-3 shadow-lg icon-button self-center">
                                        <a
                                            className="flex flex-row"
                                            href="https://jestjs.io/"
                                            rel="noopener noreferrer"
                                            target="_blank">
                                            <SiJest
                                                style={{
                                                    fontSize: `1.5rem`,
                                                    color: ` #fff`
                                                }}
                                            />
                                            Jest
                                        </a>
                                    </button>
                                </div>
                                <div className="justify-self-center">
                                    <button className="bg-black rounded-full p-3 shadow-lg icon-button self-center">
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
                                <div className="justify-self-center">
                                    <button className="bg-black rounded-full p-3 shadow-lg icon-button self-center">
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
                                <div className="justify-self-center">
                                    <button className="bg-black rounded-full p-3 shadow-lg icon-button self-center">
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
                                    <button className="bg-black rounded-full p-3 shadow-lg icon-button self-center">
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
                                <div>
                                    <button className="bg-black rounded-full p-3 shadow-lg icon-button self-center">
                                        <a
                                            className="flex flex-row"
                                            href="https://styled-components.com/"
                                            rel="noopener noreferrer"
                                            target="_blank">
                                            <SiStyledComponents
                                                style={{
                                                    fontSize: `1.75rem`,
                                                    color: `#ffffff`
                                                }}
                                            />
                                            &nbsp; Styled
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
