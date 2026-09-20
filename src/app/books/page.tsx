import React from "react";
import { IbookType } from "@/types/book.type";
import BookCard from "@/shared/components/BookCard";

const booksData = async () => {
  const response = await fetch("http://localhost:3000/booksData.json");
  return response.json();
};

const Books = async () => {
  const books = await booksData();
  //   console.log(books);

  return (
    <section className="container mx-auto">
      <div className="flex flex-col items-center justify-center my-12">
        <h1 className="text-3xl md:text-5xl font-extrabold font-serif text-gray-900 tracking-tight">
          Explore All Books
        </h1>
        <div className="h-1 w-16 bg-[#23BE0A] rounded-full mt-3"></div>
      </div>
      <div className="grid grid-cols-4 gap-15">
        {books.map((book: IbookType) => {
          return <BookCard key={book.bookId} bookCard={book} />;
        })}
      </div>
    </section>
  );
};

export default Books;
