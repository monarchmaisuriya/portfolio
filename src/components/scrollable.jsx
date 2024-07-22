import React from "react";
import { cn } from "../utils";
const Scrollable = ({ children, className }) => {
	const containerRef = React.useRef(null);

	React.useEffect(() => {
		const container = containerRef.current;

		let isDown = false;
		let startX;
		let scrollLeft;

		const handleMouseDown = (e) => {
			isDown = true;
			startX = e.pageX - container.offsetLeft;
			scrollLeft = container.scrollLeft;
		};

		const handleMouseLeave = () => {
			isDown = false;
		};

		const handleMouseUp = () => {
			isDown = false;
		};

		const handleMouseMove = (e) => {
			if (!isDown) return;
			e.preventDefault();
			const x = e.pageX - container.offsetLeft;
			const walk = (x - startX) * 3;
			container.scrollLeft = scrollLeft - walk;
		};

		container.addEventListener("mousedown", handleMouseDown);
		container.addEventListener("mouseleave", handleMouseLeave);
		container.addEventListener("mouseup", handleMouseUp);
		container.addEventListener("mousemove", handleMouseMove);

		return () => {
			container.removeEventListener("mousedown", handleMouseDown);
			container.removeEventListener("mouseleave", handleMouseLeave);
			container.removeEventListener("mouseup", handleMouseUp);
			container.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return (
		<div
			ref={containerRef}
			className={cn("h-full overflow-auto no-scrollbar", className)}
		>
			{children}
		</div>
	);
};

export default Scrollable;
