import { useEffect, useState } from "react";
import BookService from "../../../lib/bookService";

const bookService = new BookService();

export default function BookList(category) {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const bookFetch = await bookService.getBooksByCategory(category);
      setBooks(bookFetch);
    };
    fetchData();
  }, []);
  //   console.log(books);
  return <div></div>;
}
