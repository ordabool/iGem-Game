import "./GenesInstructionsScene.css";

function GenesInstructionsScene(props) {
	return (
		<>
			<div className="container text-center">
				<h3>Let’s build some genes!</h3>
				<p>
					Assemble the different parts by dragging them to the board
					in order
				</p>
				<button
					type="button"
					className="btn btn-primary"
					onClick={() => props.setActiveScene("genes")}
				>
					Continue
				</button>
			</div>
		</>
	);
}

export default GenesInstructionsScene;
