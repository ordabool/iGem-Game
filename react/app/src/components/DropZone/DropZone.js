import { useState } from "react";
import { useDrop } from "react-dnd";

function DropZone({ type, style, activeStyle }) {
	const [{ canDrop, isOver }, drop] = useDrop(() => ({
		accept: type.name,
		drop: () => ({ name: type.name }),
		collect: (monitor) => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop(),
		}),
	}));

	const isActive = canDrop && isOver;

	const dragStyle = isActive ? activeStyle : {};

	return (
		<>
			<div
				ref={drop}
				style={{ ...style, dragStyle }}
				data-testid={type.name}
			>
				{isActive && "Release to drop"}
			</div>
		</>
	);
}

export default DropZone;
