import React from "react";
import Backbone from "backbone";

export default class ChatModel extends Backbone.Model {
    constructor(config) {
        super(config);
    }

    validate(val) {
        if (val == '') {
            return false;
        }
        return true;
    }
}