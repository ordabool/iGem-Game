import { useEffect, useState } from "react";
import { shuffle } from "../../helpers/functions";
import DraggableItem from "../DraggableItem/DraggableItem";
import { DraggableItemTypes } from "../DraggableItem/DraggableItemTypes.js";
import DropZone from "../DropZone/DropZone";
import "./GenesScene.css";

function GenesScene(props) {
	const [genesParts, setGenesParts] = useState([]);

	// Initialize genesParts
	useEffect(() => {
		let initialGenesParts = [];
		for (let itemType in DraggableItemTypes) {
			initialGenesParts.push(DraggableItemTypes[itemType]);
		}
		shuffle(initialGenesParts);
		setGenesParts(initialGenesParts);
	}, []);

	function placeItem(draggableItem) {
		const newGenesParts = genesParts.filter(
			(part) => part.name != draggableItem.name
		);
		setGenesParts(newGenesParts);
	}

	return (
		<>
			<div className="container text-center">
				<div className="row">
					<div className="col-9">
						<h4>Assemble Genes</h4>
						<DropZone type={DraggableItemTypes.COLOR_GENE} />
					</div>
					<div className="col-3">
						<h4>Tools</h4>
						{genesParts.map((part, i) => {
							return (
								<DraggableItem
									key={part.name}
									type={part}
									placeItem={placeItem}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
}

export default GenesScene;
