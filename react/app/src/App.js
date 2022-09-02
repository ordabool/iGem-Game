import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AminoAcidsLevel from "./components/AminoAcidsLevel/AminoAcidsLevel";

function App() {
	return (
		<div className="container">
			<div className="App">
				<AminoAcidsLevel />
			</div>
		</div>
	);

	// Used this guide for connectivity with Github Pages
	// https://betterprogramming.pub/how-to-host-your-react-app-on-github-pages-for-free-919ad201a4cb
}

export default App;
