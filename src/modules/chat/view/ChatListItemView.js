import React from "react";

export default class ChatListItemView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {message : null};
    }
    render() {
        return (
            <li>You: {this.props.message}</li>
        )
    }
}