export default function About() {
  return (
    <div id="about" className="bg-black ">
      <div className="container mx-auto p-10">
        <div className="text-white">
          <div className="text-xl md:text-2xl md:ml-2 md:mr-2">
            <p>
              Hello! I am&nbsp;
              <a
                className="text-blue-400 hover:text-blue-500 transition duration-300"
                href="http://about.me/monarchmaisuriya"
                target="_blank"
              >
                Monarch
              </a>
              , a Full-Stack Developer who is passionate about developing and
              delivering user-centric solutions. My expertise ranges from
              front-end to back-end development. Robust structure, clean design
              patterns, and thoughtful interactions are meaningful to me. I
              enjoy every aspect of development and enjoy building websites and
              applications from start to finish. I enjoy creating new features
              and services to support and enhance applications. I collaborate
              with cross-functional teams and individual developers readily, to
              create wonderful software - if you'd like to build something
              together,&nbsp;
              <a
                className="text-blue-400 hover:text-blue-500 transition duration-300"
                href="#contact"
              >
                get in touch
              </a>
              . I like to code things from simple concepts and enjoy bringing
              ideas to life in the browser. I code beautifully simple things,
              and I love what I do.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
              <div>
                <p>
                  Browse my growing portfolio of progressive development. Feel
                  free to drop a line !
                </p>
              </div>
              <div className="flex justify-center md:block">
                <button className="shadow-lg mt-5 md:float-right md:mt-3 text-base border-2 p-2 rounded-md mr-5 hover:bg-white hover:text-black transition duration-300">
                  <a
                    className="ml-2 mr-2"
                    href="https://drive.google.com/file/d/1oJic_lJv-RYMWvMlEGSSEBKmH9ghnVFt/view"
                    target="_blank"
                  >
                    View Resume
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
