
import { useState, useEffect } from 'react'
import books from '../data/books'

function BooksSection() {
  const [activeCategory, setActiveCategory] = useState('ทั้งหมด')
  const [search, setSearch] = useState('')
  const [selectedBook, setSelectedBook] = useState(null)

  useEffect(() => {
    if (!selectedBook) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedBook(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedBook])

  const categories = [
    'ทั้งหมด',
    'นิยาย',
    'Coming of Age',
    'เรื่องสั้น',
    'วรรณกรรม',
    'มังงะ',
    'Light Novel',
  ]

  const filteredBooks = books.filter((book) => {
    const categoryMatch =
      activeCategory === 'ทั้งหมด' ||
      book.category === activeCategory

    const keyword = search.toLowerCase()

    const searchMatch =
      (book.title || '').toLowerCase().includes(keyword) ||
      (book.author || '').toLowerCase().includes(keyword)

    return categoryMatch && searchMatch
  })

  return (
    <section className="books-section" id="books">
      <div className="books-container">

        <div className="books-heading">
          <div>
            <div className="section-label">
              เรื่องสนุกที่อยากแบ่งปัน
            </div>

            <h2>
              หนังสือและผลงาน
              <span>จากปลายปากกา</span>
            </h2>

            <p>
              แต่ละเล่มเริ่มต้นจากคำถามเล็ก ๆ
              ก่อนจะเติบโตเป็นเรื่องราวที่อยากชวนคุณเข้าไปสำรวจ
            </p>
          </div>

          <div className="books-search">
            <input
              type="text"
              placeholder="ค้นหาหนังสือ..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="category-list">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={
                activeCategory === category
                  ? 'category-button active'
                  : 'category-button'
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <p className="books-count">
          พบหนังสือ {filteredBooks.length} เล่ม
        </p>

        <div className="books-grid">
          {filteredBooks.map((book) => (
            <article className="book-item" key={book.id}>
              <div className="book-cover">
                <img
                  src={book.image}
                  alt={book.title}
                  className="book-cover-image"
                  loading="lazy"
                />
              </div>

              <div className="book-info">
                <div className="book-category">
                  {book.category}
                </div>

                <div className="book-title-row">
                  <h3>{book.title}</h3>

                  <button
                    type="button"
                    className="book-arrow"
                    aria-label={`ดูรายละเอียด ${book.title}`}
                    onClick={() => setSelectedBook(book)}
                  >
                    ↗
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* หน้าต่างรายละเอียดหนังสือ */}
      {selectedBook && (
        <div
          className="book-modal-backdrop"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedBook(null)
            }
          }}
        >
          <section
            className="book-modal"
            role="dialog"
            aria-modal="true"
            aria-label={`รายละเอียด ${selectedBook.title}`}
          >
            <button
              type="button"
              className="book-modal-close"
              aria-label="ปิดหน้าต่าง"
              onClick={() => setSelectedBook(null)}
            >
              ×
            </button>

            <div className="book-modal-image-area">
              {selectedBook.image ? (
                <img
                  src={selectedBook.image}
                  alt={selectedBook.title}
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
                {selectedBook.category}
              </span>

              <h2>{selectedBook.title}</h2>

              <p className="book-modal-author">
                ผู้เขียน: {selectedBook.author || 'ไม่ระบุ'}
              </p>

              <div className="book-modal-divider" />

              <h3 className="book-modal-description-heading">
                เรื่องย่อ
              </h3>

              <p className="book-modal-description">
                {selectedBook.description ||
                  'ยังไม่มีรายละเอียดหนังสือเล่มนี้'}
              </p>
            </div>
          </section>
        </div>
      )}
    </section>
  )
}

export default BooksSection
