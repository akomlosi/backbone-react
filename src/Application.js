import Backbone from "backbone";
import ChatController from "./modules/chat/controller/controller";
import RecommenderController from "./modules/recommender/controller/controller";
import ApplicationController from "./ApplicationController";
import Events from "events";

export default class Application {
    constructor() {
        window.app = this;
        this.mediator = new Events.EventEmitter();
        this.router = new Backbone.Router({
            app         : this,
            controllers : this.controllers
        });
        this.controllers = {
            chat        : new ChatController(),
            recommender : new RecommenderController()
        };
        this.applicationController = new ApplicationController(this.controllers);
    }
};