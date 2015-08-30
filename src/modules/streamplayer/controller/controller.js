import React from "react";
import StreamPlayerView from "../view/StreamPlayerView";
export default class StreamPlayerController {
	constructor() {
	}

	/**
	 * Starts to play a stream by the given params
	 * @param {Object} performerDetails
	 */
	play(performerDetails) {
		React.unmountComponentAtNode(document.getElementById('stream-player-container'));
		this.renderView();
	}

	renderView() {
		React.render(
			<StreamPlayerView />,
			document.getElementById('stream-player-container')
		);
	}
}