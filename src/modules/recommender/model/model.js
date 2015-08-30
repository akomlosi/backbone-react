import Backbone from "backbone";

export default class ChatModel extends Backbone.Model {
    constructor(config) {
        super(config);
    }

    fetch(url) {
        var result = null;
        if (url === '/get-new-model') {
            result = {
                id : new Date().getTime(),
                modelName: 'newModel-' + new Date().getTime(),
                profilePictureUrl : "http://lorempixel.com/100/100/abstract/?id=" + new Date().getTime()
            };
        }
        else if (url === '/get-list') {
           result = [
                {
                    id: 123,
                    modelName: 'Batman',
                    profilePictureUrl : "http://lorempixel.com/100/100/city/"
                },
                {
                    id: 456,
                    modelName: 'Superman',
                    profilePictureUrl : "http://lorempixel.com/100/100/people/"
                },
                {
                    id: 789,
                    modelName: 'Spiderman',
                    profilePictureUrl : "http://lorempixel.com/100/100/nightlife/"
                },
                {
                    id: 101,
                    modelName: 'Loki',
                    profilePictureUrl : "http://lorempixel.com/100/100/nature/"
                },
                {
                    id: 112,
                    modelName: 'Thor',
                    profilePictureUrl : "http://lorempixel.com/100/100/technics/"
                }
            ]
        }
        return result;
    }
}