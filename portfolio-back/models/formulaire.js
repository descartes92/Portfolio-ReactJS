const mongoose = require('mongoose');
// const Schema = mongoose.Schema;


let messageSchema = new mongoose.Schema({

    name: {

        type: 'spring',
        required: 'You need to specifie a name'

    },
    mail: {

        type: 'string',
        required: 'You need to specifie a email',
        unique: true

    },
    text: {

        type: 'sring'

    }

})

module.exports = mongoose.model('message', messageSchema);