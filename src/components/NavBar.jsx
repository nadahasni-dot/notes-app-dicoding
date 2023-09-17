import React from "react";

export default function NavBar({ searchQuery, onSearch }) {
  return (
    <nav className="note-app__header">
      <h1>Notes</h1>
      <div className="note-search">
        <input
          type="text"
          placeholder="Cari catatan ..."
          value={searchQuery}
          onChange={(event) => onSearch(event.target.value)}
        />
      </div>
    </nav>
  );
}
