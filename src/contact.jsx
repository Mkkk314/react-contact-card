import './Contact.css'

function Contact(props) {
  return (
    <article className="contact-card">
      <div className="profile-container">
        <img
          className="profile-picture"
          src={props.pfp}
          alt={`${props.name}'s profile`}
        />
      </div>

      <div className="contact-info">
        <h3>{props.name}</h3>

        <p>
          <span className="contact-label">Phone</span>
          {props.phone}
        </p>

        <p>
          <span className="contact-label">Email</span>
          {props.email}
        </p>

        <button
          type="button"
          className={
            props.favorite
              ? 'favorite-button favorite-active'
              : 'favorite-button'
          }
          onClick={props.onFavorite}
          aria-pressed={props.favorite}
        >
          {props.favorite
            ? '★ Favorite'
            : '☆ Add to Favorites'}
        </button>
      </div>
    </article>
  )
}

export default Contact