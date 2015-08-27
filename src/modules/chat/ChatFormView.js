import React from "react";
import Backbone from "backbone";
import ChatFormReactView from "./ChatFormReactView";
import ChatModel from "./ChatModel.js";
export class ChatFormView extends Backbone.View {
    constructor(props) {
        super(props);
    }

    render(){
        React.render(
            React.createElement(ChatFormReactView, {
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

new ChatFormView().render();