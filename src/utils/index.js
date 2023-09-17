const notesCollection = "notesCollection";

// const getInitialData = () => [
//   {
//     id: 1,
//     title: "Babel",
//     body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
//     createdAt: "2022-04-14T04:27:34.572Z",
//     archived: false,
//   },
// ];

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
