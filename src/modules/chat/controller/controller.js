import React from "react";
import ChatView from "./../view/ChatInputView";
import ChatModel from "./../model/model.js";

export default class ChatController {
    constructor() {
        this.chatModel = new ChatModel();
        this.renderView();
    }

    updateChat(params) {
        React.unmountComponentAtNode(document.getElementById('chat-form-container'));
        this.chatModel.set({modelName : params.selectedModel.modelName});
        this.renderView();
    }

    renderView() {
        React.render(
            <ChatView model={this.chatModel} />,
            document.getElementById('chat-form-container')
        );
    }
}