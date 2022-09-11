import { useDrag } from "react-dnd";
import "./DraggableItem.css";

function DraggableItem({ type }) {
	const [{ isDragging }, drag] = useDrag(() => ({
		type: type,
		item: { type },
		end: (item, monitor) => {
			const dropResult = monitor.getDropResult();
			if (item && dropResult) {
				// alert(`You dropped ${item.name} into ${dropResult.name}!`);
				console.log("Dropped!");
			}
		},
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
			handlerId: monitor.getHandlerId(),
		}),
	}));
	const opacity = isDragging ? 0.4 : 1;
	return (
		<div ref={drag} style={{ opacity }} data-testid={`box`}>
			{type}
		</div>
	);
}

export default DraggableItem;
