// components/BookList.js
import React, { useState, useEffect } from 'react';
import { getBooks } from './api';

const BookList = ({ onSelectBook }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await getBooks();
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };
    fetchBooks();
  }, []);

  return (
    <div>
      <ul>
        {books.map((book) => (
          <li key={book.id} onClick={() => onSelectBook(book.id)}>
            {book.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
