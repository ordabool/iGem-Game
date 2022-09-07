import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";
import AminoAcidsScene from "./components/AminoAcidsScene/AminoAcidsScene";
import StoryScene from "./components/StoryScene/StoryScene";

function App() {
	const [activeScenes, setActiveScenes] = useState({
		StoryScene: true,
		AminoAcidsScene: false,
	});

	return (
		<div className="container">
			<div className="App">
				{activeScenes.StoryScene && (
					<StoryScene setActiveScenes={setActiveScenes} />
				)}
				{activeScenes.AminoAcidsScene && <AminoAcidsScene />}
			</div>
		</div>
	);
}

export default App;
