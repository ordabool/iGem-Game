import { useDrag } from "react-dnd";

function DraggableItem({ type, placeItem }) {
	const [{ isDragging }, drag] = useDrag(() => ({
		type: type.name,
		item: { type },
		end: (item, monitor) => {
			const dropResult = monitor.getDropResult();
			if (item && dropResult) {
				// alert(`You dropped ${item.name} into ${dropResult.name}!`);
				placeItem(type);
				console.log("Dropped!");
			}
		},
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
			handlerId: monitor.getHandlerId(),
		}),
	}));

	const style = {
		backgroundImage: `url(${type.bg})`,
		backgroundSize: "contain",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center",
		height: "4em",
		color: "white",
		margin: "0.4em",
	};

	const opacity = isDragging ? 0.4 : 1;
	return (
		<div ref={drag} style={{ ...style, opacity }} data-testid={`box`}>
			{type.name}
		</div>
	);
}

export default DraggableItem;
