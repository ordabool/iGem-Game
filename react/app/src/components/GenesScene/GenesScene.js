import { useEffect, useState } from "react";
import { Genes } from "../../data/Genes";
import { shuffle } from "../../helpers/functions";
import DraggableItem from "../DraggableItem/DraggableItem";
import { DraggableItemTypes } from "../DraggableItem/DraggableItemTypes.js";
import DropZone from "../DropZone/DropZone";
import "./GenesScene.css";
function GenesScene(props) {
	const [genesParts, setGenesParts] = useState([]);
	const [foundParts, setFoundParts] = useState([]);

	// Initialize genesParts and genes
	useEffect(() => {
		let initialGenesParts = [];
		for (let itemType in DraggableItemTypes) {
			initialGenesParts.push(DraggableItemTypes[itemType]);
		}
		shuffle(initialGenesParts);
		setGenesParts([...initialGenesParts]);
	}, []);

	// const tooltipTriggerList = document.querySelectorAll(
	// 	'[data-bs-toggle="tooltip"]'
	// );
	// const tooltipList = [...tooltipTriggerList].map(
	// 	(tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
	// );

	function placeItem(draggableItem) {
		foundParts.push(draggableItem.name);
		const newGenesParts = [...genesParts].filter(
			(part) => ![...foundParts].includes(part.name)
		);
		setGenesParts([...newGenesParts]);
		if ([...newGenesParts].length === 0) {
			completedLevel();
		}
	}

	function completedLevel() {
		console.log("completed level!");
	}

	const dropZoneStyle = {
		height: "10em",
	};

	const dropZoneActiveStyle = {
		backgroundSize: "contain",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center",
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
									{gene.combination.map((part, i) => {
										const classNameForMargin = "margin" + i;
										let width;
										switch (i) {
											case 0:
												width = "10.2em";
												break;
											case 1:
												width = "8.7em";
												break;
											case 2:
												width = "10.5em";
												break;
										}
										const backgroundImage = `url(${part.bg})`;
										return (
											<div
												className={
													"col " + classNameForMargin
												}
												key={part.name}
											>
												<DropZone
													type={part}
													key={part.name}
													style={{
														...dropZoneStyle,
														width,
													}}
													activeStyle={{
														...dropZoneActiveStyle,
														backgroundImage,
													}}
													isFound={
														![
															...genesParts,
														].includes(part)
													}
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
						{[...genesParts].map((part) => {
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
