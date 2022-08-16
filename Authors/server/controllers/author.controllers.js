const Author = require("../models/author.model");

//creating a new author:

const createNewAuthor = (req, res) => {
    Author.create(req.body)
        .then((newAuthor) => {
            res.json({newAuthor});
        })
        .catch((err) => {res.status(400).json({err});
    });
};

// finding one author:

const getOneAuthor = (req, res) => {
    Author.findOne({
        _id: req.params.id
    })
        .then((searchedAuthor) => {
            res.json(searchedAuthor);
        })
        .catch((err) => {res.status(400).json({err});
    });
};

// finding all authors:

const getAllAuthors = (req, res) => {
    Author.find()
        .then((allAuthors) => {
            res.json(allAuthors);
        })
        .catch((err) => {res.status(400).json({err});
    });
};

// updating one author:

const updateAuthor = (req, res) => {
    Author.findOneAndUpdate({
        _id: req.params.id }, req.body, {
            new: true,
            runValidators: true,
        })
        .then((updatedAuthor) => {
            res.json({updateAuthor});
        })
        .catch((err) => {res.status(400).json({err});
    });
};

// deleting an author:

const deleteAuthor = (req, res) => {
    Author.deleteOne({_id: req.params.id})
        .then((deletedAuthor) => {
            res.json({ deletedAuthor });
        })
        .catch((err) => {res.json(400).json({err});
    });
};

module.exports = {
    createNewAuthor,
    getOneAuthor,
    getAllAuthors,
    updateAuthor,
    deleteAuthor,
};



