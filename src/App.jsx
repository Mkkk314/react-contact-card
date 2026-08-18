import { useState } from 'react'
import './App.css'
import Contact from './Contact'
import contactsData from './contacts'

function App() {
  const [contacts, setContacts] = useState(contactsData)
  const [showFavorites, setShowFavorites] = useState(false)

  function toggleFavorite(id) {
    setContacts((currentContacts) =>
      currentContacts.map((contact) =>
        contact.id === id
          ? {
              ...contact,
              favorite: !contact.favorite,
            }
          : contact
      )
    )
  }

  const displayedContacts = showFavorites
    ? contacts.filter((contact) => contact.favorite)
    : contacts

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1>ContactHub</h1>

         
        </div>
      </header>

      <main className="contact-section">
        <div className="section-header">
          <div>
            <h2>My Contacts</h2>

            <p className="contact-count">
              {contacts.length} contacts
            </p>
          </div>

          <button
            type="button"
            className="favorite-filter"
            onClick={() => setShowFavorites(!showFavorites)}
          >
            {showFavorites ? 'Show All Contacts' : '★ Favorites'}
          </button>
        </div>

        <div className="contact-list">
          {displayedContacts.map((contact) => (
            <Contact
              key={contact.id}
              name={contact.name}
              phone={contact.phone}
              email={contact.email}
              pfp={contact.pfp}
              favorite={contact.favorite}
              onFavorite={() => toggleFavorite(contact.id)}
            />
          ))}
        </div>

        {displayedContacts.length === 0 && (
          <div className="empty-message">
            <p>No favorite contacts yet.</p>
            <span>
              Click "☆ Add to Favorites" on a contact to add one.
            </span>
          </div>
        )}
      </main>

      <footer className="app-footer">
        <p>ContactHub • Contact Card Project</p>
      </footer>
    </div>
  )
}

export default App