import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";
import AminoAcidsScene from "./components/AminoAcidsScene/AminoAcidsScene";
import GenesInstructionsScene from "./components/GenesInstructionsScene/GenesInstructionsScene";
import GenesScene from "./components/GenesScene/GenesScene";
import PlasmidsInstructionsScene from "./components/PlasmidsInstructionsScene/PlasmidsInstructionsScene";
import PlasmidsScene from "./components/PlasmidsScene/PlasmidsScene";
import StoryScene from "./components/StoryScene/StoryScene";
import Summary from "./components/Summary/Summary";

function App() {
	const components = {
		story: StoryScene,
		genesInstruction: GenesInstructionsScene,
		genes: GenesScene,
		plasmidsInstruction: PlasmidsInstructionsScene,
		plasmids: PlasmidsScene,
		aminoAcids: AminoAcidsScene,
		summary: Summary,
	};

	const [activeScene, setActiveScene] = useState("story");

	const SpecificScene = components[activeScene];
	return (
		<div className="container">
			<div className="App">
				<SpecificScene setActiveScene={setActiveScene} />
			</div>
		</div>
	);
}

export default App;
