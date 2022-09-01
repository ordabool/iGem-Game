import { useState } from "react";
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

	let feedback;
	let isFullCombination =
		combination.base1 && combination.base2 && combination.base3;

	// Build the feedback for the player. There are 2 options:
	// 1 - The bases are a valid acid! show it to the player and (TODO:) display additional info
	// 2 - TODO: The player has already found this amino acid
	if (isFullCombination) {
		let fullComb =
			combination.base1 + combination.base2 + combination.base3;
		for (var acidKey in acids) {
			var value = acids[acidKey];
			if (value.combinations.includes(fullComb)) {
				feedback = (
					<>
						<p>You found {acidKey}!</p>
						<p>
							{value.fullname} ({acidKey})
						</p>
					</>
				);
			}
		}
	}

	return (
		<div className="container text-center">
			<h3>Amino Acids</h3>
			<p> Explanation paragraph</p>

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

			{/* TODO: display a list of the successfully found acids */}
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
