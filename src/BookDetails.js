// components/BookDetails.js
import React, { useState, useEffect } from 'react';
import { getBookDetails } from '../services/api';

const BookDetails = ({ bookId }) => {
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await getBookDetails(bookId);
        setBook(response.data);
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };
    if (bookId) {
      fetchBookDetails();
    }
  }, [bookId]);

  return (
    <div>
      {book ? (
        <div>
          <h2>{book.title}</h2>
          <p>{book.description}</p>
        </div>
      ) : (
        <p>Select a book to view details.</p>
      )}
    </div>
  );
};

export default BookDetails;
