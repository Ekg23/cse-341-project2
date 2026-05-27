const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {

    const result = await mongodb.getDb().collection('books').find();
    result.toArray().then((books) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(books);
    })
};

const getSingleBook = async (req, res) => {
    const bookId = new ObjectId(req.params.id);
    const result = await mongodb.getDb().collection('books').find({ _id: bookId });
    result.toArray().then((books) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(books[0]);
    })
}

const addBook = async (req, res) => {
    const user = {
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
        publishedYear: req.body.publishedYear,
        
    };
    const response = await mongodb.getDb().collection('books').insertOne(book);
    if (response.acknowledged) {
        res.status(201).json(response);
    } else {
        res.status(500).json(response.error || 'Some error occurred while creating the book.')
    }   
}


const updateBook = async (req, res) => {
    //#swagger.tags = ['Books']
    const bookId = new ObjectId(req.params.id);
    const user = {
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
        publishedYear: req.body.publishedYear
    };
    const response = await mongodb.getDb().collection('books').replaceOne({ _id: userId }, user);
    if (response.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while updating the book.')
    }
}


const deleteBook = async (req, res) => {
    const bookId = new ObjectId(req.params.id);
    const response = await mongodb.getDb().collection('books').deleteOne({ _id: bookId });
    if (response.deletedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while deleting the book.')
    }
}

module.exports = {
    getAll,
    getSingleBook,
    addBook,
    updateBook,
    deleteBook
}