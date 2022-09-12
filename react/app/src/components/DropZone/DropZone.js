import { useState } from "react";
import { useDrop } from "react-dnd";

function DropZone({ type }) {
	const [{ canDrop, isOver }, drop] = useDrop(() => ({
		accept: type.name,
		drop: () => ({ name: type.name }),
		collect: (monitor) => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop(),
		}),
	}));

	const isActive = canDrop && isOver;

	const style = {
		backgroundImage: `url(${type.bg})`,
		backgroundSize: "contain",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center",
		height: "4em",
		color: "white",
	};

	const filter = isActive
		? ""
		: "opacity(50%) grayscale(100%) blur(3px) drop-shadow(0 0 0.01rem black)";

	return (
		<>
			<div
				ref={drop}
				style={{ ...style, filter }}
				data-testid={type.name}
			>
				{isActive && "Release to drop"}
			</div>
		</>
	);
}

export default DropZone;
