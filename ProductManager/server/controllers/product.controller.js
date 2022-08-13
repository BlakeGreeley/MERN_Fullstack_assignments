const Product = require('../models/product.model');

module.exports.index = (req, res) => {
    res.json({
        message: "Hello World"
    });
}

module.exports = {
    getAllProducts: (req, res) => {
        Product.find({})
            .then((allProducts) => res.json(allProducts))
            .catch((err) => console.log(err));
    },
    
    getOneProduct: (req, res) => {
        Product.findOne({_id: req.params.id})
            .then((oneProduct) => res.json(oneProduct))
            .catch((err) => console.log(err));
    },

    createProduct: (req, res) => {
        Product.create(req.body)
            .then((newProduct) => res.json(newProduct))
            .catch((err) => console.log(err));
    },

    updateProduct: (req, res) => {
        Product.findByIdAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
            runValidators: true,
        })
            .then((updateProduct) => res.json(updateProduct))
            .catch((err) => console.log(err));
    },

    deleteProduct: (req, res) => {
        Product.deleteOne({ _id: req.params.id })
            .then((deleteId) => res.json(deleteId))
            .catch((err) => console.log(err));
    },

}