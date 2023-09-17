import React from "react";
import NoteItem from "./NoteItem";

export default function NoteList({
  title,
  notes,
  isArchived,
  onDelete,
  onModifyStatus,
}) {
  function getFilteredNotesByStatus() {
    return notes.filter((note) => note.archived === isArchived);
  }

  const filteredNotes = getFilteredNotesByStatus();

  return (
    <>
      <h2>{title}</h2>
      {filteredNotes.length <= 0 ? (
        <p className="notes-list__empty-message">Tidak ada catatan</p>
      ) : (
        <div className="notes-list">
          {filteredNotes.map((note) => (
            <NoteItem
              key={note.id}
              id={note.id}
              title={note.title}
              timestamp={note.createdAt}
              body={note.body}
              archived={note.archived}
              onDelete={onDelete}
              onModifyStatus={onModifyStatus}
            />
          ))}
        </div>
      )}
    </>
  );
}
