import React from "react";
import { GoDotFill } from "react-icons/go";

function Nav({ list, current }) {
	return (
		<div className="mt-2 flex flex-row justify-center align-middle">
			{Object.keys(list).map((item) => {
				return (
					<div
						key={item}
						className="text-center text-white text-xs flex items-center font-semibold mx-1"
					>
						<div>{list[item] === current ? list[item] : <GoDotFill />}</div>
					</div>
				);
			})}
		</div>
	);
}

export default Nav;
