import { RiReactjsLine, RiGatsbyLine } from "react-icons/ri";
import { DiReact, DiMysql, DiMongodb, DiPython } from "react-icons/di";
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
  SiJest,
  SiPostgresql,
  SiRedis,
  SiGooglecloud,
  SiDocker,
  SiNextdotjs,
  SiStrapi,
  SiAmazonaws,
} from "react-icons/si";

export default function Skills() {
  return (
    <div id="skills" className="text-center mt-10">
      <div className="mx-auto container mb-10">
        <div>
          <h1 className="text-5xl white-text-shadow md:text-6xl ml-2 mr-2">
            All that you need
          </h1>
          <p className="minimal-text-shadow mt-5">I usually work with</p>
        </div>

        <div className="flex flex-wrap justify-evenly">
          <div className="mt-10">
            <div className="grid grid-flow-row grid-cols-2 md:grid-rows-3 md:grid-flow-col gap-2 mt-5 text-white ml-2 mr-2 md:ml-0 md:mr-0 overflow-x-auto">
              <div>
                <button className="bg-black hover:bg-white hover:text-black transition duration-300 rounded-xl p-3 shadow-lg">
                  <a
                    className="flex flex-row"
                    href="https://javascript.info/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
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
                    target="_blank"
                  >
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
                    target="_blank"
                  >
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
                    target="_blank"
                  >
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
                    target="_blank"
                  >
                    <DiPython
                      style={{ fontSize: `1.75rem`, color: `#306998` }}
                    />
                    Python
                  </a>
                </button>
              </div>

              <div>
                <button className="bg-black  text-white hover:bg-white hover:text-black rounded-xl p-3 shadow-lg  ">
                  <a
                    className="flex flex-row"
                    href="https://expressjs.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <SiEtsy
                      style={{
                        fontSize: `1.25rem`,
                        margin: `0.28rem`,
                      }}
                    />
                    Express
                  </a>
                </button>
              </div>

              {/* <div>
                <button className="bg-black hover:bg-white hover:text-black transition duration-300 rounded-xl p-3 shadow-lg  ">
                  <a
                    className="flex flex-row"
                    href="https://reactnative.dev/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <DiReact
                      style={{ fontSize: `1.75rem`, color: `#E67972` }}
                    />
                    Native
                  </a>
                </button>
              </div> */}

              <div>
                <button className="bg-black hover:bg-white hover:text-black transition duration-300 rounded-xl p-3 shadow-lg  ">
                  <a
                    className="flex flex-row"
                    href="https://fastapi.tiangolo.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
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
                    target="_blank"
                  >
                    <SiNextdotjs style={{ fontSize: `1.75rem` }} />
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
                    target="_blank"
                  >
                    <GiChiliPepper style={{ fontSize: `1.75rem` }} />
                    Flask
                  </a>
                </button>
              </div>
              <div className="justify-">
                <button className="bg-black hover:bg-white hover:text-black transition duration-300 rounded-xl p-3 shadow-lg  ">
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
                    &nbsp; Postgres
                  </a>
                </button>
              </div>
              <div>
                <button className="bg-black hover:bg-white hover:text-black transition duration-300 rounded-xl p-3 shadow-lg  ">
                  <a
                    className="flex flex-row"
                    href="https://aws.amazon.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <SiAmazonaws
                      style={{
                        fontSize: `1.75rem`,
                        color: `#ffc107`,
                      }}
                    />
                    &nbsp; AWS
                  </a>
                </button>
              </div>

              {/* <div>
                <button className="bg-black hover:bg-white hover:text-black transition duration-300 rounded-xl p-3 shadow-lg  ">
                  <a
                    className="flex flex-row"
                    href="https://git-scm.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <FiGitPullRequest
                      style={{
                        fontSize: `1.75rem`,
                        color: `#ED4C34`,
                      }}
                    />
                    Git SCM
                  </a>
                </button>
              </div> */}

              <div>
                <button className="bg-black hover:bg-white hover:text-black transition duration-300 rounded-xl p-3 shadow-lg  ">
                  <a
                    className="flex flex-row"
                    href="https://www.mysql.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <DiMysql
                      style={{
                        fontSize: `1.75rem`,
                        color: ` #389fe0`,
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
                    target="_blank"
                  >
                    <DiMongodb
                      style={{
                        fontSize: `1.75rem`,
                        color: `#4A944C`,
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
                    &nbsp; GCP
                  </a>
                </button>
              </div>

              <div>
                <button className="bg-black hover:bg-white hover:text-black rounded-xl p-3 shadow-lg  ">
                  <a
                    className="flex flex-row"
                    href="https://www.docker.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <SiDocker
                      style={{
                        fontSize: `1.75rem`,
                        color: `#06ade5`,
                      }}
                    />
                    &nbsp; Docker
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
