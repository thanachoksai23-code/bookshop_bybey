
function BookCard({ book, index }) {
  return (
    <article className={`book-card book-color-${index % 4}`}>
      <div className="book-cover">
        {book.image ? (
          <img
            src={book.image}
            alt={`ปกหนังสือ ${book.title}`}
            className="book-cover-image"
            loading="lazy"
          />
        ) : (
          <div className="book-cover-border">
            <small>{book.category}</small>

            <div className="book-symbol">
              {index % 3 === 0
                ? "✳"
                : index % 3 === 1
                ? "○"
                : "✉"}
            </div>

            <h3>{book.title}</h3>
            <p>{book.description}</p>
            <strong>BOOKSPACE</strong>
          </div>
        )}
      </div>

      <div className="book-info">
        <small>
          {book.category} · {book.author}
        </small>

        <div className="book-info-row">
          <h3>{book.title}</h3>

          <button
            className="round-arrow"
            type="button"
            aria-label={`ดูรายละเอียด ${book.title}`}
          >
            ↗
          </button>
        </div>
      </div>
    </article>
  );
}

export default BookCard;
