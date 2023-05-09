import { SiUpwork, SiMedium } from "react-icons/si";
import { RiGithubLine, RiLinkedinFill } from "react-icons/ri";

export default function Header() {
  return (
    <div className="mx-auto bg-black p-5 text-white rounded-t-lg container">
      <nav className="flex flex-wrap justify-between">
        <div>
          <img src="/favicon.png" alt="logo" width={30} height={30} />
        </div>
        <div>
          <ul className="flex flex-row">
            <li className="text-gray-500 pr-5 text-xl md:text-2xl hover:text-white transition duration-300">
              <a href="https://github.com/ingeniousambivert" target="_blank">
                <RiGithubLine />
              </a>
            </li>
            <li className="text-gray-500 pr-5 text-xl md:text-2xl hover:text-white transition duration-300">
              <a
                href="https://www.linkedin.com/in/monarchmaisuriya/"
                target="_blank"
              >
                <RiLinkedinFill />
              </a>
            </li>
            <li className="text-gray-500 pr-5 text-xl md:text-2xl hover:text-white transition duration-300">
              <a href="https://ingeniousambivert.medium.com/" target="_blank">
                <SiMedium />
              </a>
            </li>
            <li className="text-gray-500 pr-5 text-xl md:text-2xl hover:text-white transition duration-300 ">
              <a
                href="https://www.upwork.com/o/profiles/users/~01434db45df923780a/"
                target="_blank"
              >
                <SiUpwork />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
