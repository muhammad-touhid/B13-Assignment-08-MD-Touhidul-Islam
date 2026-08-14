import BookCard from "@/components/BookCard";
import React from "react";

const AllBooks = async () => {
  const res = await fetch(
    "https://b13-assignment-08-md-touhidul-islam.vercel.app/data.json",
  );
  const books = await res.json();

  return (
    <section className="bg-secondary-custom py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-secondary-custom sm:text-4xl">
            All Books
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllBooks;
