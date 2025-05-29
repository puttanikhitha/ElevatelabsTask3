const books = require('../models/bookModel');

// GET all books
const getAllBooks = (req, res) => {
  res.json(books.list);
};

// GET book by ID
const getBookById = (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.list.find(b => b.id === id);
  if (!book) return res.status(404).json({ message: 'Book not found' });
  res.json(book);
};

// POST new book
const createBook = (req, res) => {
  const { title, author } = req.body;
  if (!title || !author)
    return res.status(400).json({ message: 'Title and author are required' });

  const newBook = {
    id: books.nextId++,
    title,
    author
  };

  books.list.push(newBook);
  res.status(201).json(newBook);
};

// PUT update book
const updateBook = (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.list.find(b => b.id === id);
  if (!book) return res.status(404).json({ message: 'Book not found' });

  const { title, author } = req.body;
  if (title) book.title = title;
  if (author) book.author = author;

  res.json(book);
};

// DELETE book
const deleteBook = (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.list.findIndex(b => b.id === id);
  if (index === -1) return res.status(404).json({ message: 'Book not found' });

  books.list.splice(index, 1);
  res.status(204).send();
};

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook
};
