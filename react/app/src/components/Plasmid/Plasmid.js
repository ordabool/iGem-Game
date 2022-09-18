import { useState } from "react";
import { getNextStage } from "../../helpers/functions";
import DropZone from "../DropZone/DropZone";
import "./Plasmid.css";

function Plasmid(props) {
	const stage = props.plasmid.stage;
	const plasmid = props.plasmid.plasmid;
	const isFound = stage === "full";
	const nextStage = getNextStage(stage);

	let dropType;
	switch (stage) {
		case "circle":
			dropType = plasmid.tool;
			break;
		case "cutout":
			dropType = plasmid.gene;
			break;
		case "full":
			dropType = { name: "-" };
			break;
	}

	const style = {
		height: "17em",
		width: "17em",
		margin: "2em auto",
		backgroundSize: "contain",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center",
		backgroundImage: `url(${plasmid[stage].bg})`,
	};
	const activeStyle = { backgroundImage: `url(${plasmid[nextStage].bg})` };

	return (
		<>
			{/* <p>
				Plasmid: {plasmid[stage].name} | Stage: {stage} | dropType:
				{dropType.name} | next: {nextStage}
			</p> */}
			<DropZone
				type={dropType}
				style={style}
				activeStyle={activeStyle}
				isFound={isFound}
			/>
		</>
	);
}

export default Plasmid;
