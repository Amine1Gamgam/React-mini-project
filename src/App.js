import React, { useState } from 'react';
import './App.css';
import ListBook from './components/ListBook/listbook';
import AddBook from './components/AddBook/addbook';
import EditBook from './components/EditBook/editbook';

function App() {
  const [books, setBooks] = useState([
    { id: 1, bookNumber: "001", title: "Atomic Habits", author: "James Clear" },
    { id: 2, bookNumber: "002", title: "The Slight Edge", author: "Jeff Olsen" },
    { id: 3, bookNumber: "003", title: "La gloire de mon père", author: "Marcel Pagnol" },
    { id: 4, bookNumber: "004", title: "Les misérables", author: "Victor Hugo" }
  ]);

  const [editingBook, setEditingBook] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false); 

  const addNewBook = (newBook) => {
    newBook.id = books.length ? books[books.length - 1].id + 1 : 1; 
    setBooks([...books, newBook]);
  };

  const deleteBook = (id) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer ce livre?")) {
      setBooks(books.filter(book => book.id !== id));
    }
  };

  const editBook = (updatedBook) => {
    setBooks(books.map(book => (book.id === updatedBook.id ? updatedBook : book)));
    setEditingBook(null); // Réinitialiser l'édition
  };

  return (
    <div>
      <h1>Application de gestion des livres électroniques</h1>

      {/* Bouton pour afficher le formulaire d'ajout */}
      <button 
        style={{ backgroundColor: 'blue', color: 'white', padding: '10px', marginBottom: '20px' }}
        onClick={() => setShowAddForm(!showAddForm)} // Afficher/masquer le formulaire
      >
        Ajouter un livre
      </button>

    
      {showAddForm && <AddBook addNewBook={addNewBook} />}

      
      {editingBook ? (
        <EditBook book={editingBook} editBook={editBook} />
      ) : (
        <ListBook books={books} deleteBook={deleteBook} setEditingBook={setEditingBook} />
      )}
    </div>
  );
}

export default App;
