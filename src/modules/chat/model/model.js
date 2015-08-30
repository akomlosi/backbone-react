import React from "react";
import Backbone from "backbone";

export default class ChatModel extends Backbone.Model {
    constructor() {
        super();
        this.defaults = {
            modelName : 'unknown'
        }
    }

    getModelName() {
        return this.attributes.modelName;
    }

    validate(val) {
        return val !== '';
    }
}