import React from "react";
import RecommenderView from "../view/RecommenderListView";
import RecommenderModel from "../model/model";
export default class RecommenderController {
    constructor() {
        this.initialize();
    }

    initialize() {
        React.render(
            <RecommenderView model={new RecommenderModel()} />,
            document.getElementById('recommender-container')
        );
    }
}