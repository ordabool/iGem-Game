import { useEffect, useState } from "react";
import { Plasmids } from "../../data/Plasmids";
import { getNextStage, shuffle } from "../../helpers/functions";
import DraggableItem from "../DraggableItem/DraggableItem";
import Plasmid from "../Plasmid/Plasmid";
import "./PlasmidsScene.css";

function PlasmidsScene(props) {
	const [plasmidParts, setPlasmidParts] = useState([]);
	const [plasmids, setPlasmids] = useState([
		{ plasmid: Plasmids.COLOR, stage: "circle" },
		{ plasmid: Plasmids.LIGHT, stage: "circle" },
		{
			plasmid: Plasmids.PLASTIC_DIGESTION,
			stage: "circle",
		},
		{ plasmid: Plasmids.SIZE, stage: "circle" },
	]);
	const [foundParts, setFoundParts] = useState([]);
	const [completedLevel, setCompletedLevel] = useState(false);

	// Initialize plasmidParts and genes
	useEffect(() => {
		let tempPlasmidParts = [];
		for (const plasmidKey in Plasmids) {
			const plasmid = Plasmids[plasmidKey];
			for (const partKey in plasmid) {
				const part = plasmid[partKey];
				if (["gene", "tool"].includes(part.type)) {
					tempPlasmidParts.push(part);
				}
			}
		}
		shuffle(tempPlasmidParts);
		setPlasmidParts(tempPlasmidParts);
		setPlasmids(shuffle(plasmids));
	}, []);

	function placeItem(part) {
		let i = 0;
		for (const plasmidKey in plasmids) {
			const plasmid = plasmids[plasmidKey];
			if (plasmid.plasmid[part.type].name === part.name) {
				const stage = plasmid.stage;
				const nextStage = getNextStage(stage);
				let newPlasmids = [...plasmids];
				newPlasmids[i].stage = nextStage;
				setPlasmids(newPlasmids);
			}
			i++;
		}

		foundParts.push(part.name);
		const newPlasmidParts = [...plasmidParts].filter(
			(part) => ![...foundParts].includes(part.name)
		);
		setPlasmidParts([...newPlasmidParts]);
		setFoundParts([...foundParts]);

		if ([...newPlasmidParts].length === 0) {
			setCompletedLevel(true);
		}
	}

	return (
		<>
			<div className="container text-center">
				<div className="row">
					<div className="col-9">
						<h4>Plasmids</h4>
						<p>
							Use the scissors (restriction enzymes) to cut the
							plasmids and then insert the genes in their proper
							plasmid.
						</p>
						{plasmids.map((plasmid) => {
							return (
								<Plasmid
									key={plasmid.plasmid.circle.name}
									plasmid={plasmid}
								/>
							);
						})}
					</div>
					<div className="col-3">
						<h4>Tools</h4>
						{plasmidParts.map((part) => {
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
									all the plasmids!
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

export default PlasmidsScene;
