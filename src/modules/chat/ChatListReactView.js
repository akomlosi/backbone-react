import React from "react";
import Backbone from "backbone";
import ChatListItemView from "./ChatListItemReactView";

export default class ChatListView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {message : null};
	}

	render() {
		var messages = this.props.messages;
		return (
			<ul>
				{messages.map(function(o) {
					return <ChatListItemView key={o.id} message={o.msg} />;
				})}
			</ul>
		);
	}
}