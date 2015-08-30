import React from "react";

export default class StreamPlayerView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {streamDetails : null};
	}
	render() {
		return (
			//<video src={this.state.streamDetails.src} />
			<video src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4" autoPlay />
		)
	}
}