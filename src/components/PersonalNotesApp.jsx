import React, { Component } from "react";
import { getInitialData, notesCollection } from "../utils";
import NavBar from "./NavBar";
import NoteBody from "./NoteBody";
import NoteForm from "./NoteForm";

export default class PersonalNotesApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      searchQuery: "",
    };

    this.getFilteredNotes = this.getFilteredNotes.bind(this);
    this.handleSearchNote = this.handleSearchNote.bind(this);
    this.handleSubmitNote = this.handleSubmitNote.bind(this);
    this.handleDeleteNote = this.handleDeleteNote.bind(this);
  }

  getFilteredNotes() {
    const query = this.state.searchQuery.toLowerCase();

    return this.state.notes.filter((note) =>
      note.title.toLowerCase().includes(query)
    );
  }

  handleSearchNote(query) {
    this.setState(() => {
      return {
        searchQuery: query,
      };
    });
  }

  handleSubmitNote(note) {
    const currentNotes = this.state.notes;
    const newCollections = [...currentNotes, note];

    localStorage.setItem(notesCollection, JSON.stringify(newCollections));

    this.setState(() => {
      return {
        notes: newCollections,
      };
    });
  }

  handleDeleteNote(deletedNote) {
    const currentNotes = this.state.notes;
    const newCollections = currentNotes.filter(
      (note) => note.id !== deletedNote.id
    );

    localStorage.setItem(notesCollection, JSON.stringify(newCollections));

    this.setState(() => {
      return {
        notes: newCollections,
      };
    });
  }

  render() {
    return (
      <>
        <NavBar
          searchQuery={this.state.searchQuery}
          onSearch={this.handleSearchNote}
        />
        <NoteBody>
          <NoteForm onSubmit={this.handleSubmitNote} />
        </NoteBody>
      </>
    );
  }
}
