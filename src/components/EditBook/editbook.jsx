import React, { useState } from "react";

function EditBook({ book, editBook }) {
  const [updatedBook, setUpdatedBook] = useState(book);

  const inputChangeHandler = ({ target }) => {
    setUpdatedBook({ ...updatedBook, [target.name]: target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    editBook(updatedBook); 
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Numéro de livre</label>
          <input
            type="text"
            name="bookNumber"
            value={updatedBook.bookNumber}
            onChange={inputChangeHandler}
          />
        </div>
        <div>
          <label>Titre de livre</label>
          <input
            type="text"
            name="title"
            value={updatedBook.title}
            onChange={inputChangeHandler}
          />
        </div>
        <div>
          <label>Auteur</label>
          <input
            type="text"
            name="author"
            value={updatedBook.author}
            onChange={inputChangeHandler}
          />
        </div>
        <button type="submit">Modifier</button>
      </form>
    </div>
  );
}

export default EditBook;
