const mongoose = require('mongoose');


let skills = new mongoose.Schema({

    name: {
        type: 'string'
    },
    picture: {
        type: 'string'
    }

})
