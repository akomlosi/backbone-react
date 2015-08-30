import React from "react";

export default class ChatInputView extends React.Component{
    constructor(props) {
        super(props);
    }

    /**
     * Click event handler
     * @param {Object} ev   Event object
     * @return void
     */
    onClick(ev) {
        ev.preventDefault();
        this.props.handleClick(this.props.index);
    }

    render() {
        return (
            <li>
                <a href="#nogo" onClick={this.onClick.bind(this)}>
                    <img src={this.props.src} alt={this.props.modelName} />
                </a>
            </li>
        );
    }
}