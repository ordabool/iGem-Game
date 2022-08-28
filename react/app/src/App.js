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

	// Used this guide for connectivity with Github Pages
	// https://betterprogramming.pub/how-to-host-your-react-app-on-github-pages-for-free-919ad201a4cb
}

export default App;
