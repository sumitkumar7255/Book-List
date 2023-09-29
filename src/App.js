import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@mui/material';
import LoginRegister from './LoginRegister';
import BookList from './BookList';
import BookDetails from './BookDetails';

const App = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSelectBook = (bookId) => {
    setSelectedBook(bookId);
  };

  return (
    <Router>
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Book App</Typography>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route
            path="/login"
            element={loggedIn ? <Navigate to="/" /> : <LoginRegister />}
          />
          <Route
            path="/"
            element={
              loggedIn ? (
                <div>
                  <BookList onSelectBook={handleSelectBook} />
                  <BookDetails bookId={selectedBook} />
                </div>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

