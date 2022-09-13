import { useEffect, useState } from "react";
import { Genes } from "../../data/Genes";
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
			(part) => part.name !== draggableItem.name
		);
		setGenesParts(newGenesParts);
	}

	const dropZoneStyle = {
		height: "10em",
		width: "7.5em",
		border: "1px solid black",
		margin: "auto",
	};

	const dropZoneActiveStyle = {
		backgroundSize: "contain",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center",
		filter: "opacity(50%) grayscale(100%) blur(3px) drop-shadow(0 0 0.01rem black)",
	};

	return (
		<>
			<div className="container text-center">
				<div className="row">
					<div className="col-9">
						<h4>Assemble Genes</h4>
						{Object.keys(Genes).map((geneKey) => {
							const gene = Genes[geneKey];
							return (
								<div
									className="geneOutline row align-items-center"
									key={gene.name}
								>
									{gene.combination.map((part) => {
										return (
											<div
												className="col"
												key={part.name}
											>
												<DropZone
													type={part}
													key={part.name}
													style={dropZoneStyle}
												/>
											</div>
										);
									})}
								</div>
							);
						})}
					</div>
					<div className="col-3">
						<h4>Tools</h4>
						{genesParts.map((part) => {
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
