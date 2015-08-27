import React from "react";

export default class ChatListView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {message : null};
	}
	onChatFormSubmit(e) {
		/*DEBUG*/console.log('onChatFormSubmit ', e);/*ENDDEBUG*/
	}

	onMessageSent(e) {
	}

	render() {
		var messages = this.props.messages;
		return (
			<ul>
				{messages.map(function(m) {
					return <li>{m}</li>;
				})}
			</ul>
		);
	}
}