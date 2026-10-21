
import { useEffect, useState } from "react";

function BookCard({ book, index = 0 }) {
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  useEffect(() => {
    if (!isDetailOpen) return;

    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsDetailOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = oldOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isDetailOpen]);

  if (!book) return null;

  return (
    <>
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
              <h3>{book.title}</h3>
              <strong>BOOKSPACE</strong>
            </div>
          )}
        </div>

        <div className="book-info">
          <small>
            {book.category}
            {book.author ? ` · ${book.author}` : ""}
          </small>

          <div className="book-info-row">
            <h3>{book.title}</h3>

            <button
              type="button"
              className="round-arrow"
              aria-label={`ดูรายละเอียด ${book.title}`}
              onClick={() => setIsDetailOpen(true)}
            >
              ↗
            </button>
          </div>
        </div>
      </article>

      {isDetailOpen && (
        <div
          className="book-modal-backdrop"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setIsDetailOpen(false);
            }
          }}
        >
          <section
            className="book-modal"
            role="dialog"
            aria-modal="true"
            aria-label={`รายละเอียด ${book.title}`}
          >
            <button
              type="button"
              className="book-modal-close"
              aria-label="ปิดหน้าต่าง"
              onClick={() => setIsDetailOpen(false)}
            >
              ×
            </button>

            <div className="book-modal-image-area">
              {book.image ? (
                <img
                  src={book.image}
                  alt={`ปกหนังสือ ${book.title}`}
                  className="book-modal-image"
                />
              ) : (
                <div className="book-modal-no-image">
                  ไม่มีรูปปกหนังสือ
                </div>
              )}
            </div>

            <div className="book-modal-details">
              <span className="book-modal-category">
                {book.category}
              </span>

              <h2>{book.title}</h2>

              {book.author && (
                <p className="book-modal-author">
                  ผู้เขียน: {book.author}
                </p>
              )}

              <div className="book-modal-divider" />

              <h3 className="book-modal-description-heading">
                เรื่องย่อ
              </h3>

              <p className="book-modal-description">
                {book.description || "ยังไม่มีเรื่องย่อสำหรับหนังสือเล่มนี้"}
              </p>
            </div>
          </section>
        </div>
      )}
    </>
  );
}

export default BookCard;
