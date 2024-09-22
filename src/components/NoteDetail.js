import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './NoteDetail.css'; // Optional for custom styling

const NoteDetail = () => {
  const { id } = useParams(); // Get the note ID from the URL
  const [note, setNote] = useState(null);

  useEffect(() => {
    // Fetch the individual note by ID from the backend
    axios.get(`http://localhost:8000/notes/${id}`)
      .then(response => setNote(response.data))
      .catch(error => console.log(error));
  }, [id]);

  return (
    <div className="note-detail-container">
      {note ? (
        <>
          <h2>Note {id}</h2>
          <p>{note.content}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default NoteDetail;
