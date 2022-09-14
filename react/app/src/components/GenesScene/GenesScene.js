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
	const [completedLevel, setCompletedLevel] = useState(false);

	// Initialize genesParts and genes
	useEffect(() => {
		let initialGenesParts = [];
		for (let itemType in DraggableItemTypes) {
			initialGenesParts.push(DraggableItemTypes[itemType]);
		}
		shuffle(initialGenesParts);
		setGenesParts([...initialGenesParts]);
	}, []);

	function placeItem(draggableItem) {
		foundParts.push(draggableItem.name);
		const newGenesParts = [...genesParts].filter(
			(part) => ![...foundParts].includes(part.name)
		);
		setGenesParts([...newGenesParts]);
		if ([...newGenesParts].length === 0) {
			setCompletedLevel(true);
		}
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
						<p>
							Assemble 4 different genes.
							<br />
							Gene = Promotor + Target gene + Terminator).
						</p>
						<p className="text-start">
							<b>Promotor:</b> A region of the DNA that allows
							relevant proteins to bind and begin the expression
							of the gene.
							<br />
							<b>Target gene:</b> what kind of features and
							characteristics our bacteria would have?
							<br />
							<b>Terminator:</b> A region of the DNA that tells
							where we can end the gene expression.
						</p>
						{Object.keys(Genes).map((geneKey) => {
							const gene = Genes[geneKey];
							let numOfCompleteParts = 0;
							return (
								<>
									<div
										className="geneOutline row align-items-center"
										key={gene.name}
									>
										{gene.combination.map((part, i) => {
											const classNameForMargin =
												"margin" + i;
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
											const genePartFound = ![
												...genesParts,
											].includes(part);
											if (genePartFound) {
												numOfCompleteParts++;
											}
											return (
												<div
													className={
														"col " +
														classNameForMargin
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
														isFound={genePartFound}
													/>
												</div>
											);
										})}
									</div>
									{numOfCompleteParts === 3 && (
										<>
											<p>
												<b>{gene.name}</b> found!
												<br />
												The gene {gene.effect}
											</p>
										</>
									)}
								</>
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
						{completedLevel && (
							<>
								<p>
									Congraduations! You just finished assembling
									all the genes!
								</p>
								<button
									type="button"
									className="btn btn-primary"
									onClick={() =>
										props.setActiveScene("aminoAcids")
									}
								>
									Continue
								</button>
							</>
						)}
					</div>
				</div>
			</div>
		</>
	);
}

export default GenesScene;
