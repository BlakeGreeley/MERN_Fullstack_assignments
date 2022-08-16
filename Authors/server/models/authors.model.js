const mongoose = require('mongoose');

const AuthorsSchema = {
    name: {
        type: String, 
        required: [true, "name is needed."],
        minLength: [3, "Name must be 3 or more characters."]
    },
};

module.exports = mongoose.model("Author", AuthorsSchema);