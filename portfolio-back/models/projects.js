const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const projectSchema = new mongoose.Schema({


    description: {
        type: 'text'

    },

    date: {
        type: 'date',
        default: Date.now()
    },

    _id_skills: [{ type: Schema.Types.ObjectId, ref: 'list' }]

});



module.exports = mongoose.model('project', projectSchema);
