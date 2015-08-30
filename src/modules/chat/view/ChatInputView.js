import React from "react";
import ChatListView from "./ChatListView";

export default class ChatInputView extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			message: null,
			messages : []
		};
	}

	/**
	 * Eventhandler when the form has been submitted. Validates the field and sets the new state if it is valid.
	 * @param {Object} ev   Event object
	 * @return {Function|void}   Returns the error function if the field is not valid
	 */
	onSubmit(ev) {
		ev.preventDefault();
		var inputFieldEl = this.refs['chat-field'].getDOMNode();
		if (!this.props.model.validate(inputFieldEl.value)) {
			// call error callback and return to exit
			return this.props.handleError();
		}
		this.setState({ messages : this.state.messages.concat([{msg: inputFieldEl.value, id: new Date().getTime()}])});
		inputFieldEl.value = '';
	}

	render() {
		return (
			<div>
				<ChatListView
					messages={this.state.messages}
					modelName={this.props.model.getModelName()}
				/>
				<form acttion="" id="chat-form">
					<input type="text" placeholder="Type your message here" ref="chat-field" />
					<button type="submit" onClick={this.onSubmit.bind(this)}>
						Send
					</button>
				</form>
			</div>
		);
	}
}