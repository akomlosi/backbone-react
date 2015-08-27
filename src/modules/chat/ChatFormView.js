import React from "react";
import Backbone from "backbone";
import ChatFormView from "./ChatFormView.jsx";
import ChatModel from "./ChatModel.js";
export class bbChatFormView extends Backbone.View {
    constructor(props) {
        super(props);
    }

    render(){
        React.render(
            React.createElement(ChatFormView, {
                model: new ChatModel(),
                handleError : this.handleError.bind(this)
            }),
            document.getElementById('chat-form-container')
        )
        return this;
    }

    handleError() {
        console.log('error catched');
    }
}

new bbChatFormView().render();