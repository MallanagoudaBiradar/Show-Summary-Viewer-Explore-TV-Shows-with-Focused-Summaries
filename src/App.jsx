// App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import ShowList from './ShowList';
import ShowDetails from './ShowDetails';
import BookTicketForm from './BookTicketForm';
import './styles.css';
import ShowSummary from './ShowSummary';
const API_URL = 'https://api.tvmaze.com/search/shows?q=all';

const App = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await axios.get(API_URL);
        setShows(response.data);
      } catch (error) {
        console.error('Error fetching shows:', error);
      }
    };

    fetchShows();
  }, []);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<ShowList shows={shows} />} />
          <Route path="/show/:id" element={<ShowDetails />} />
          <Route path="/book-ticket/:id" element={<BookTicketForm />} />
          <Route path="/show/:id/summary" element={<ShowSummary />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
