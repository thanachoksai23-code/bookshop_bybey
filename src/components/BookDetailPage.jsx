import { useParams, Link } from "react-router-dom";
import { books } from "../data/books";

export default function BookDetailPage() {
  const { slug } = useParams();
  const book = books.find((b) => b.slug === slug);

  if (!book) {
    return (
      <main>
        <p>ไม่พบหนังสือเล่มนี้</p>
        <Link to="/">กลับหน้าแรก</Link>
      </main>
    );
  }

  return (
    <main>
      <Link to="/">← กลับ</Link>
      <img src={book.cover} alt={book.title} />
      <h1>{book.title}</h1>
      <p>{book.details}</p>
    </main>
  );
}