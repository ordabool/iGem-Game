import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";
import AminoAcidsScene from "./components/AminoAcidsScene/AminoAcidsScene";
import GenesInstructionsScene from "./components/GenesInstructionsScene/GenesInstructionsScene";
import GenesScene from "./components/GenesScene/GenesScene";
import StoryScene from "./components/StoryScene/StoryScene";

function App() {
	const components = {
		story: StoryScene,
		genesInstruction: GenesInstructionsScene,
		genes: GenesScene,
		aminoAcids: AminoAcidsScene,
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
