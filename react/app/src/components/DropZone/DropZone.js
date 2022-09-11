import { useDrop } from "react-dnd";

function DropZone({ type }) {
	const [{ canDrop, isOver }, drop] = useDrop(() => ({
		accept: type,
		drop: () => ({ name: type }),
		collect: (monitor) => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop(),
		}),
	}));

	const isActive = canDrop && isOver;

	return (
		<>
			<div ref={drop} data-testid={type}>
				{isActive ? "Release to drop" : "Drag a " + type + " here"}
			</div>
		</>
	);
}

export default DropZone;
