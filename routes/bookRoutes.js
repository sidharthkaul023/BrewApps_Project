import express from 'express';
import { Book } from '../models/bookModel.js';

const router = express.Router();

//Read Books
router.get('/', async (req, res) => {
    const books = await Book.find({});
    res.render('books/index', { books });
})

//Create new Book Part 1.
router.get('/new', (req, res) => {
    res.render('books/new')
})

//Create new Book Part 2.
router.post('/', async (req, res) => {
    try {
        if (!req.body.title || !req.body.author || !req.body.summary) {
            return res.status(400).send({ message: 'Send all required fields: title, author, summary' })
        }
        const newBook = new Book(req.body);
        await newBook.save();
        res.redirect(`/books/${newBook._id}`);
    } catch (err) {
        console.log(err.message);
    }
})

//Show Book 
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id);
        res.render('books/show', { book });
    } catch (err) {
        console.log(err.message);
    }
})

//Update Book Part 1.
router.get('/:id/edit', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        res.render('books/edit', { book });
    } catch (err) {
        console.log(err.message);
    }
})

//Update Book Part 2.
router.put('/:id', async (req, res) => {
    try {
        if (!req.body.title || !req.body.author || !req.body.summary) {
            return res.status(400).send({ message: 'Send all required fields: title, author, summary' })
        }

        const { id } = req.params;
        const book = await Book.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
        res.redirect(`/books/${book._id}`);
    } catch (err) {
        console.log(err.message);
    }
})

//Destroy Book(D)
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deleteBook = await Book.findByIdAndDelete(id);
        res.redirect('/books');
    } catch (err) {
        console.log(err.message);
    }
})

export default router;
