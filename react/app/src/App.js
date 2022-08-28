import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";
import Level1 from "./components/Level1/Level1";
import Menu from "./components/Menu/Menu";

function App() {
	return (
		<div className="App">
			<Level1 />
		</div>
	);
}

export default App;
