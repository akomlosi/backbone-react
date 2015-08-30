import Events from "events";
export default class ApplicationController {
    constructor(controllers) {
        this.controllers = controllers;
        this.initialize();
    }

    initialize() {
        app.mediator.on('module.recommender:change', this.onRecommenderChange.bind(this));
    }

    /**
     * Handles the action when the recommender has been changed by a new model selection.
     * @param {Object} ev   Event object
     * @return void
     */
    onRecommenderChange(ev) {
        this.controllers.chat.updateChat.call(this.controllers.chat, ev);
    }
}