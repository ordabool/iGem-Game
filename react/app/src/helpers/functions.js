export const shuffle = (array) => {
	let currentIndex = array.length,
		randomIndex;

	// While there remain elements to shuffle.
	while (currentIndex !== 0) {
		// Pick a remaining element.
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// And swap it with the current element.
		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex],
			array[currentIndex],
		];
	}

	return array;
};

export const getNextStage = (stage) => {
	let nextStage;
	switch (stage) {
		case "circle":
			nextStage = "cutout";
			break;
		case "cutout":
		case "full":
			nextStage = "full";
			break;
	}

	return nextStage;
};
