import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './notes.css';

const Notes = () => {
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // Fetch notes from the backend when the component loads
    axios.get('http://localhost:8000/notes')
      .then(response => {
        const allNotes = response.data;
        // Limit to the last 5 notes for display
        const latestNotes = allNotes.slice(-10);
        setNotes(latestNotes);
      })
      .catch(error => console.log(error));
  }, []);

  const handleSaveNote = () => {
    // Save the current note to the backend
    axios.post('http://localhost:8000/notes', { note })
      .then(response => {
        // Add the new note to the list, and show only the last 5 notes
        const updatedNotes = [...notes, response.data].slice(-10);
        setNotes(updatedNotes);
        // Clear the note textarea after saving
        setNote('');
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="notes-container">
      <h2>Your Notes</h2>
      <textarea 
        className="notepad"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Type your note here..."
      ></textarea>
      <button className="save-button" onClick={handleSaveNote}>Save Note</button>

      <h3>Previous Notes</h3>
      <ul className="notes-list">
        {notes.map((n, index) => (
          <li key={index}>
            {/* Link to the individual note page */}
            <Link to={`/notes/${n.id}`} target="_blank">
              Note {index + 1}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;
