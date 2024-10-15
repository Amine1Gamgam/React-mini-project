import React, { useState } from "react";

function AddBook({ addNewBook }) {
  const [book, setBook] = useState({
    bookNumber: "",
    title: "",
    author: "",
  });

  const inputChangeHandler = ({ target }) => {
    setBook({ ...book, [target.name]: target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (book.bookNumber && book.title && book.author) {
      addNewBook(book); 
      setBook({ bookNumber: "", title: "", author: "" }); 
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Numéro de livre</label>
          <input
            type="text"
            name="bookNumber"
            placeholder="Numéro de livre"
            value={book.bookNumber}
            onChange={inputChangeHandler}
          />
        </div>
        <div>
          <label>Titre de livre</label>
          <input
            type="text"
            name="title"
            placeholder="Titre de livre"
            value={book.title}
            onChange={inputChangeHandler}
          />
        </div>
        <div>
          <label>Auteur</label>
          <input
            type="text"
            name="author"
            placeholder="Auteur"
            value={book.author}
            onChange={inputChangeHandler}
          />
        </div>
        <button type="submit">Valider</button>
      </form>
    </div>
  );
}

export default AddBook;
