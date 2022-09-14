import "./StoryScene.css";

function StoryScene(props) {
	return (
		<>
			<div className="container text-center">
				<h4 className="lh-lg">
					After 20 years of research the wise scientist is missing and
					left all of his work behind.
				</h4>
				<h5 className="lh-lg">
					The whole scientific community was expecting his new
					engineered bacteria, and now you are the only person that
					can achieve his goals in his absence.
				</h5>
				<button
					type="button"
					className="btn btn-primary"
					onClick={() => props.setActiveScene("genesInstruction")}
				>
					Continue
				</button>
				<div>
					<div className="scientist float-md-end"></div>
					<div className="clearfix"></div>
				</div>
			</div>
		</>
	);
}

export default StoryScene;
