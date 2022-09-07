import { useEffect, useState } from "react";
import acids from "../../data/acids.json";
import { bases } from "../../data/bases.json";
import "./AminoAcidsLevel.css";

const inputIdPrefix = "base";
const minInputNumber = 1;
const maxInputNumber = 3;

function AminoAcidsLevel() {
	const [combination, setCombination] = useState({
		base1: "",
		base2: "",
		base3: "",
	});
	const [discoveredAcids, setDiscoveredAcids] = useState({});
	const [feedback, setFeedback] = useState();
	const [foundOutput, setFoundOutput] = useState();

	// Initialize discoveredAcids as a list of all the acids set to false, and a counter
	useEffect(() => {
		let initialAcidsState = {
			acids: [],
			acidsCount: 0,
			acidsFoundCount: 0,
		};
		let acidsCount = 0;
		for (let acidKey in acids) {
			initialAcidsState.acids[acidKey] = false;
			acidsCount++;
		}
		initialAcidsState.acidsCount = acidsCount;
		setDiscoveredAcids(initialAcidsState);
	}, []);

	useEffect(() => {
		// Build the feedback for the player. There are 2 options:
		// 1 - The bases are a valid acid! show it to the player and display additional info
		// 2 - The player has already found this amino acid
		let isFullCombination =
			combination.base1 && combination.base2 && combination.base3;
		if (isFullCombination) {
			let fullComb =
				combination.base1 + combination.base2 + combination.base3;
			for (let acidKey in acids) {
				let value = acids[acidKey];
				if (value.combinations.includes(fullComb)) {
					let alreadyFound = discoveredAcids.acids[acidKey];
					if (alreadyFound) {
						setFeedback(
							<>
								<p>{acidKey} already found!</p>
							</>
						);
					} else {
						setFeedback(
							<>
								<h5>
									{value.fullname} ({acidKey})
								</h5>
								<p>{value.info}</p>
							</>
						);
						let newDiscoveredAcids = { ...discoveredAcids };
						newDiscoveredAcids.acids[acidKey] = true;
						setDiscoveredAcids(newDiscoveredAcids);
					}
				}
			}
		}

		let acidsFoundCount = 0;
		for (let acidKey in discoveredAcids.acids) {
			if (discoveredAcids.acids[acidKey]) {
				acidsFoundCount++;
			}
		}
		setDiscoveredAcids((discoveredAcids) => ({
			...discoveredAcids,
			acidsFoundCount,
		}));
		// setDiscoveredAcids({ ...discoveredAcids, acidsFoundCount });
	}, [combination]);

	useEffect(() => {
		setFoundOutput(
			<>
				<hr className="resultsSeperator" />
				<h4>
					You found: ({discoveredAcids.acidsFoundCount} /{" "}
					{discoveredAcids.acidsCount})
				</h4>
				<ul>
					{discoveredAcids.acids &&
						Object.keys(discoveredAcids.acids).map((acidKey, i) => {
							if (discoveredAcids.acids[acidKey]) {
								return (
									<li key={i}>{acids[acidKey].fullname}</li>
								);
							}
						})}
				</ul>
			</>
		);
	}, [discoveredAcids]);

	return (
		<div className="container text-center">
			<h2>Amino Acids</h2>
			<p className="explanation">
				For the bacteria to be able to express the genes that we just
				discovered, we need building blocks. In biology these building
				blocks are called amino acids. Use the letters (nucleotides) A,
				U, G, C to find all 21 amino acids.
			</p>

			<input
				id={inputIdPrefix + "1"}
				className="base-input"
				type={"text"}
				onKeyDown={keyPressed}
			></input>
			<input
				id={inputIdPrefix + "2"}
				className="base-input"
				type={"text"}
				onKeyDown={keyPressed}
			></input>
			<input
				id={inputIdPrefix + "3"}
				className="base-input"
				type={"text"}
				onKeyDown={keyPressed}
			></input>

			{feedback}

			{foundOutput}

			<div className="bottomElement"></div>
		</div>
	);

	// Handle the user's keypress. There are 3 cases:
	// 1 - This is a valid base letter (A,C,U,G)
	// 2 - This is a backspace button in order to delete the value
	// 3 - Unsopported keypress
	function keyPressed(e) {
		e.preventDefault();
		e.stopPropagation();
		let currentInputIdNum = parseInt(e.target.id.slice(-1));
		let key = e.key;
		if (key === "Backspace") {
			e.target.value = "";
			if (currentInputIdNum > minInputNumber) {
				let prevInputId = inputIdPrefix + (currentInputIdNum - 1);
				document.getElementById(prevInputId).focus();
			}
		} else if (bases.includes(key.toUpperCase())) {
			e.target.value = key.toUpperCase();
			if (currentInputIdNum < maxInputNumber) {
				let nextInputId = inputIdPrefix + (currentInputIdNum + 1);
				document.getElementById(nextInputId).focus();
			}
		}

		let currentInputId = inputIdPrefix + currentInputIdNum;
		let newCombination = { ...combination };
		newCombination[currentInputId] = e.target.value;
		setCombination(newCombination);
	}
}

export default AminoAcidsLevel;
