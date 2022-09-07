import "./StoryScene.css";

function StoryScene(props) {
	return (
		<>
			<div className="text-center">
				<h3 className="lh-lg">
					After 20 years of research the wise scientist is missing and
					left all of his work behind.
				</h3>
				<h4 className="lh-lg">
					The whole scientific community was expecting his new
					engineered bacteria, and now you are the only person that
					can achieve his goals in his absence.
				</h4>
				<button
					type="button"
					class="btn btn-primary"
					onClick={() =>
						props.setActiveScenes({ AminoAcidsScene: true })
					}
				>
					Continue
				</button>
			</div>
		</>
	);
}

export default StoryScene;
