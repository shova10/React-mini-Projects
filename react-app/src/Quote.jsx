import React, { useState, useEffect } from 'react';


function App() {
  const [quotes, setQuotes] = useState([]);

  const [currentQuote, setCurrentQuote] = useState({ text: '', author: '' });

 
  useEffect(() => {
    const initialQuotes = [
      { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
      { text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
      { text: "The mind is everything. What you think you become.", author: "Buddha" },
      { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
      { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    ];
    setQuotes(initialQuotes);

    generateRandomQuote(initialQuotes);
  }, []); 

  const generateRandomQuote = (allQuotes) => {
    if (allQuotes.length === 0) {
      setCurrentQuote({ text: 'No quotes available.', author: '' });
      return;
    }
    const randomIndex = Math.floor(Math.random() * allQuotes.length);
    setCurrentQuote(allQuotes[randomIndex]);
  };


  const handleNewQuoteClick = () => {
    generateRandomQuote(quotes);
  };

  return (
    <div className="quote-generator">
      <h1>Quote Generator</h1>
      <div className="quote-display">
        {currentQuote.text ? (
          <>
            <p className="quote-text">"{currentQuote.text}"</p>
            <p className="quote-author">- {currentQuote.author}</p>
          </>
        ) : (
          <p>Loading quotes...</p>
        )}
      </div>
      <button onClick={handleNewQuoteClick}>New Quote</button>
    </div>
  );
}

export default App;