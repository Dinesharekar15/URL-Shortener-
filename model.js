const mongoose = require("mongoose");

const urlschema = new mongoose.Schema({
    shorturlid: {
        type: String,
        required: true,
        unique: true
    },
    redirecturl: {
        type: String,
        required: true
    },
    visithistory: [{
        timestamp: {
            type: String,
        }
    }]
}, { timestamps: true }
)

const URL = mongoose.model('url',urlschema);

module.exports=URL;
