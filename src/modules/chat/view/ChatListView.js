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
			<p>Chat with {this.props.modelName}
				<ul>
					{messages.map(function(o) {
						return <ChatListItemView key={o.id} message={o.msg} />;
					})}
				</ul>
			</p>
		);
	}
}