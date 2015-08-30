import React from "react";
import Events from "events";
import RecommenderItemView from "./RecommenderItemView"

export default class ChatInputView extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            modelDetails : this.props.model.fetch("/get-list")
        };
    }

    /**
     * Handles a click event on the recommender. Updates the state with the new model and emits an event
     * about the selected one.
     * @param {number} index   Index of the selected model in the list
     * @return void
     */
    handleClick(index) {
        var newModel      = this.props.model.fetch("/get-new-model"),
            state         = this.state.modelDetails,
            selectedModel = state[index];
        state[index] = newModel;
        this.setState({ modelDetails : state });
        app.mediator.emit('module.recommender:change', {selectedModel : selectedModel});
    }

    render() {
        var modelDetails = this.state.modelDetails,
            self         = this;
        return (
            <ul>
                {modelDetails.map(function(model, i) {
                    return <RecommenderItemView
                        index={i}
                        handleClick={self.handleClick.bind(self)}
                        key={model.id}
                        id={model.id}
                        modelName={model.modelName}
                        src={model.profilePictureUrl}
                    />
                })}
            </ul>
        );
    }
}