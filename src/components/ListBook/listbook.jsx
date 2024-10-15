import React from "react";

function ListBook({ books, deleteBook, setEditingBook }) {
  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
  };

  const thStyle = {
    backgroundColor: "#f2f2f2",
    padding: "10px",
    textAlign: "left",
    borderBottom: "2px solid black",
  };

  const tdStyle = {
    padding: "10px",
    textAlign: "left",
    borderBottom: "2px solid black",
  };

  const editButtonStyle = {
    backgroundColor: "green",
    color: "white",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
  };

  const deleteButtonStyle = {
    backgroundColor: "red",
    color: "white",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
  };

  return (
    <table style={tableStyle}>
      <thead>
        <tr>
          <th style={thStyle}>Numéro</th>
          <th style={thStyle}>Titre</th>
          <th style={thStyle}>Auteur</th>
          <th style={thStyle}>Éditer</th>
          <th style={thStyle}>Supprimer</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <tr key={book.id}>
            <td style={tdStyle}>{book.bookNumber}</td>
            <td style={tdStyle}>{book.title}</td>
            <td style={tdStyle}>{book.author}</td>
            <td style={tdStyle}>
              <button style={editButtonStyle} onClick={() => setEditingBook(book)}>
                Éditer
              </button>
            </td>
            <td style={tdStyle}>
              <button style={deleteButtonStyle} onClick={() => deleteBook(book.id)}>
                Supprimer
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ListBook;
