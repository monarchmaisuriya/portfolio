import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const capitalize = (string) => {
	if (typeof string === "string") {
		return string
			.trim()
			.toLowerCase()
			.replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));
	} else {
		return string;
	}
};

function cn(...inputs) {
	return twMerge(clsx(inputs));
}

function randomQuote() {
	const quotes = [
		"We have seen that computer programming is an art, because it applies accumulated knowledge to the world, because it requires skill & ingenuity, & especially because it produces objects of beauty. - Paul Graham",
		"Programming today is a race between software engineers striving to build bigger & better idiot-proof programs, & the Universe trying to produce bigger & better idiots. So far, the Universe is winning. - Rich Cook",
		"A good programmer is someone who always looks both ways before crossing a one-way street. - Keith Weinberg",
		"Computer science education cannot make anybody an expert programmer any more than studying brushes & pigment can make somebody an expert painter. - Eric S. Raymond",
		"Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to code. - Linus Torvalds",
		"You might not think programmers are artists, but programming is extremely creative profession. Its logic-based creativity. - John Romero",
		"Everyone should learn how to program a computer because it teaches you how to think. - Steve Jobs",
		"First solve the problem, then write the code. - John Johnson",
		"The most important property of a program is whether it accomplishes the intention of its user. - C.A.R Hoare",
		"Truth can only be found in one place: the code. - Robert C. Martin",
		"Programming isn't about what you know; it's about what you can figure out. - Chris Pine",
		"The only way to learn a new programming language is by writing programs in it. - Dennis Ritchie",
		"Sometimes it's better to leave something alone, to pause, and that's very true of programming. - Joyce Wheeler",
		"In some ways, programming is like painting. You start with a blank canvas and certain basic raw materials. You use a combination of science, art, and craft to determine what to do with them. - Andrew Hunt",
		"Don't write better error messages, write code that doesn't need them. - Jason C McDonald",
	];

	const randomIndex = Math.floor(Math.random() * quotes.length);
	return quotes[randomIndex];
}

export { randomQuote, capitalize, cn };
