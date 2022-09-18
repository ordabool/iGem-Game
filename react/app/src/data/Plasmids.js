import PlasmidCircle from "../assets/plasmids/full_plasmid.png";

import ColorCutout from "../assets/plasmids/color_cutout.png";
import ColorFull from "../assets/plasmids/color_full.png";
import ColorGene from "../assets/plasmids/color_gene.png";
import ColorTool from "../assets/plasmids/color_tool.png";

import LightCutout from "../assets/plasmids/light_cutout.png";
import LightFull from "../assets/plasmids/light_full.png";
import LightGene from "../assets/plasmids/light_gene.png";
import LightTool from "../assets/plasmids/light_tool.png";

import PlasticDigestionCutout from "../assets/plasmids/plastic_digestion_cutout.png";
import PlasticDigestionFull from "../assets/plasmids/plastic_digestion_full.png";
import PlasticDigestionGene from "../assets/plasmids/plastic_digestion_gene.png";
import PlasticDigestionTool from "../assets/plasmids/plastic_digestion_tool.png";

import SizeCutout from "../assets/plasmids/size_cutout.png";
import SizeFull from "../assets/plasmids/size_full.png";
import SizeGene from "../assets/plasmids/size_gene.png";
import SizeTool from "../assets/plasmids/size_tool.png";

export const Plasmids = {
	COLOR: {
		circle: {
			name: "Color",
			type: "circle",
			bg: PlasmidCircle,
		},
		cutout: {
			name: "ColorCutout",
			type: "cutout",
			bg: ColorCutout,
		},
		full: { name: "ColorFull", type: "full", bg: ColorFull },
		gene: { name: "ColorGene", type: "gene", bg: ColorGene },
		tool: { name: "ColorTool", type: "tool", bg: ColorTool },
	},
	LIGHT: {
		circle: {
			name: "Light",
			type: "circle",
			bg: PlasmidCircle,
		},
		cutout: {
			name: "LightCutout",
			type: "cutout",
			bg: LightCutout,
		},
		full: { name: "LightFull", type: "full", bg: LightFull },
		gene: { name: "LightGene", type: "gene", bg: LightGene },
		tool: { name: "LightTool", type: "tool", bg: LightTool },
	},
	PLASTIC_DIGESTION: {
		circle: {
			name: "PlasticDigestion",
			type: "circle",
			bg: PlasmidCircle,
		},
		cutout: {
			name: "PlasticDigestionCutout",
			type: "cutout",
			bg: PlasticDigestionCutout,
		},
		full: {
			name: "PlasticDigestionFull",
			type: "full",
			bg: PlasticDigestionFull,
		},
		gene: {
			name: "PlasticDigestionGene",
			type: "gene",
			bg: PlasticDigestionGene,
		},
		tool: {
			name: "PlasticDigestionTool",
			type: "tool",
			bg: PlasticDigestionTool,
		},
	},
	SIZE: {
		circle: {
			name: "Size",
			type: "circle",
			bg: PlasmidCircle,
		},
		cutout: { name: "SizeCutout", type: "cutout", bg: SizeCutout },
		full: { name: "SizeFull", type: "full", bg: SizeFull },
		gene: { name: "SizeGene", type: "gene", bg: SizeGene },
		tool: { name: "SizeTool", type: "tool", bg: SizeTool },
	},
};
