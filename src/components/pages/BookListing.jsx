import Banner from "../UI/organisms/Banner";
import BookService from "../../lib/bookService";
import { useEffect, useState } from "react";
import BookList from "../UI/organisms/BookList";

const bookService = new BookService();

export default function BookListing() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const categoriesFetch = async () => {
      const cateFetch = await bookService.getCategories();
      setCategories(cateFetch);
    };
    categoriesFetch();
  }, []);
  // console.log(categories);
  return (
    <div className="w-screen flex flex-col ">
      <Banner />
      <div className=" m-20">
        {categories.map((category, i) => {
          return (
            <div key={i}>
              <p className="uppercase text-[#004F6D] text-2xl font-semibold">
                {category}
              </p>
              <BookList category={category} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
