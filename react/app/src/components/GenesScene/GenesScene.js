import DraggableItem from "../DraggableItem/DraggableItem";
import { DraggableItemTypes } from "../DraggableItem/DraggableItemTypes.js";
import DropZone from "../DropZone/DropZone";
import "./GenesScene.css";

function GenesScene(props) {
	return (
		<>
			<div className="container text-center">
				<div className="row">
					<div className="col-9">
						<h4>Assemble Genes</h4>
						<DropZone type={DraggableItemTypes.COLOR_GENE} />
					</div>
					<div className="col-3">
						<h4>Tools</h4>
						<DraggableItem type={DraggableItemTypes.COLOR_GENE} />
					</div>
				</div>
			</div>
		</>
	);
}

export default GenesScene;
