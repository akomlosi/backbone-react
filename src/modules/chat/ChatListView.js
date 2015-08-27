import React from "react";
import ChatListItemView from "./ChatListItemView";

export default class ChatListView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {message : null};
	}

	render() {
		var messages = this.props.messages;
		return (
			<ul>
				{messages.map(function(m) {
					return <ChatListItemView key={m} message={m} />;
				})}
			</ul>
		);
	}
}