import React, { useState } from 'react';
import axios from 'axios';
import './notes.css';

const Notes = () => {
  const [note, setNote] = useState('');
  const [email, setEmail] = useState('');

  const handleSaveNote = () => {
    if (!email || !note) {
      alert('Please enter your email and note.');
      return;
    }

    // Split emails by semicolon and trim spaces
    const emailList = email.split(';').map(e => e.trim());

    // Send the note via email to multiple recipients
    axios.post('http://localhost:8000/send-email', { emailList, note })
      .then(() => {
        alert('Your note has been emailed!');
        // No clearing the note after saving, as requested
      })
      .catch(error => {
        console.error('Error sending the email:', error);
        alert('There was an error sending your note.');
      });
  };

  const handleClearNote = () => {
    setNote(''); // Clear the notepad content
  };

  // Calculate number of lines in the note
  const lineNumbers = Array.from({ length: note.split('\n').length }, (_, i) => i + 1).join('\n');

  return (
    <div className="notes-container">
      <div className="top-bar">
        <input
          type="text"
          placeholder="Enter emails separated by ;"
          className="email-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="save-button" onClick={handleSaveNote}>
          Send to Email
        </button>
        <button className="clear-button" onClick={handleClearNote}>
          Clear
        </button>
      </div>

      <div className="notepad-wrapper">
        <div className="line-numbers">{lineNumbers}</div>
        <textarea
          className="notepad"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Type your note here..."
        ></textarea>
      </div>
    </div>
  );
};

export default Notes;
