import React, { Component } from "react";
import { showFormattedDate } from "../utils";

export default class NoteForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getTitleLengthRemaining() {
    return 50 - this.state.title.length;
  }

  handleChange(event) {
    if (event.target.name === "title" && event.target.value.length > 50) return;

    this.setState(() => {
      return {
        [event.target.name]: event.target.value,
      };
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const currentTime = new Date();

    const note = {
      id: +currentTime,
      title: this.state.title,
      body: this.state.body,
      archived: false,
      createdAt: currentTime.toISOString(),
    };

    this.props.onSubmit(note);

    this.setState(() => {
      return {
        title: "",
        body: "",
      };
    });
  }

  render() {
    return (
      <div className="note-input">
        <h2>Buat Catatan</h2>
        <form onSubmit={this.handleSubmit}>
          <p className="note-input__title__char-limit">
            Sisa karakter: {this.getTitleLengthRemaining()}
          </p>

          <input
            type="text"
            name="title"
            id="title"
            className="note-input__title"
            value={this.state.title}
            onChange={this.handleChange}            
            placeholder="Ini adalah judul ..."
            required
          />

          <textarea
            type="text"
            name="body"
            id="body"
            className="note-input__body"
            value={this.state.body}
            onChange={this.handleChange}
            placeholder="Tuliskan catatanmu di sini ..."
            spellCheck={false}
            required
          />

          <button type="submit">Buat</button>
        </form>
      </div>
    );
  }
}
