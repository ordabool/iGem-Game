import { DraggableItemTypes } from "../components/DraggableItem/DraggableItemTypes";

const parts = DraggableItemTypes;

export const Genes = {
	LIGHT: {
		name: "Light gene",
		effect: "makes the bacteria glow",
		combination: [
			parts.LIGHT_PROMOTOR,
			parts.LIGHT_GENE,
			parts.LIGHT_TERMINATOR,
		],
	},
	COLOR: {
		name: "Color gene",
		effect: "makes the bacteria change colors",
		combination: [
			parts.COLOR_PROMOTOR,
			parts.COLOR_GENE,
			parts.COLOR_TERMINATOR,
		],
	},
	PLASTIC_DIGESTION: {
		name: "Plastic digestion gene",
		effect: "enables the bacteria to digest plastic",
		combination: [
			parts.PLASTIC_DIGESTION_PROMOTOR,
			parts.PLASTIC_DIGESTION_GENE,
			parts.PLASTIC_DIGESTION_TERMINATOR,
		],
	},
	SIZE: {
		name: "Size gene",
		effect: "enlarges the bacteria",
		combination: [
			parts.SIZE_PROMOTOR,
			parts.SIZE_GENE,
			parts.SIZE_TERMINATOR,
		],
	},
};
