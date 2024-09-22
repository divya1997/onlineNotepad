import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Notes from './components/notes';
import NoteDetail from './components/NoteDetail'; // Import the new component

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/notes/:id" element={<NoteDetail />} /> {/* New route for individual notes */}
          <Route path="/notes" element={<Notes />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

