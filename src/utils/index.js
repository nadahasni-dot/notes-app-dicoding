const notesCollection = "notesCollection";

const getInitialData = () => {
  if (typeof Storage === undefined) {
    alert("This browser doesn't support Web Storage");
    return;
  }

  const notes = localStorage.getItem(notesCollection);

  if (!notes) return [];

  return JSON.parse(notes);
};

const showFormattedDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("id-ID", options);
};

export { notesCollection, getInitialData, showFormattedDate };
