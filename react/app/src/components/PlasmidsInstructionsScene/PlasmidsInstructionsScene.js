import "./PlasmidsInstructionsScene.css";

function PlasmidsInstructionsScene(props) {
	return (
		<>
			<div className="container text-center">
				<h3>Plasmids</h3>
				<p>
					Now that we got the genes, how can we insert them into our
					bacteria?
				</p>
				<p>
					<b>Plasmid</b> is a circular DNA found in bacteria, in which
					we can add into it any desirable gene we want. In the next
					level we will explore the plasmids.
				</p>
				<button
					type="button"
					className="btn btn-primary"
					onClick={() => props.setActiveScene("plasmids")}
				>
					Continue
				</button>
			</div>
		</>
	);
}

export default PlasmidsInstructionsScene;
