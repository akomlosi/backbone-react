import React from "react";
import Backbone from "backbone";
import ChatListView from "./ChatListView";

export default class ChatFormView extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			message: null,
			messages : []
		};
	}

	onSubmit(e) {
		e.preventDefault();
		var inputFieldEl = this.refs['chat-field'].getDOMNode();
		if (!this.props.model.validate(inputFieldEl.value)) {
			// call error callback and return to exit
			return this.props.handleError();
		}
		this.setState({ messages : this.state.messages.concat([inputFieldEl.value])});
		inputFieldEl.value = '';
	}

	render() {
		return (
			<div>
				<ul>
					<ChatListView messages={this.state.messages} />
				</ul>
				<form acttion="" id="chat-form">
					<input type="text" placeholder="Type your message here" ref="chat-field" />
					<button type="submit" onClick={this.onSubmit.bind(this)}>
						Submit
					</button>
				</form>
			</div>
		);
	}
}
//React.render(
//	<ChatFormView />,
//	document.getElementById('chat-form-container')
//);