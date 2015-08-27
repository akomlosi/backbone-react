import React from "react";
import Backbone from "backbone";

export default class ChatModel extends Backbone.Model {
    constructor(config) {
        super(config);
    }

    static validate(val) {
        return val !== '';
    }
}