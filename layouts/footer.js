export default function Footer({ quote }) {
    return (
        <footer className=" bg-black text-white rounded-b-lg">
            <div className="container mx-auto p-10">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                        <p className="text-3xl md:text-4xl">Inspiration </p>
                        <p className="mt-4 italic">{quote}</p>
                    </div>
                    <div className="text-right md:mt-12">
                        <a
                            href="mailto:monarchmaisuriya7600@gmail.com"
                            className="hover:text-gray-300">
                            monarchmaisuriya7600@gmail.com
                        </a>
                        <p>Made with &#9829;</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
