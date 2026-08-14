import Image from "next/image";
import React from "react";

const BookDetails = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(
    "https://b13-assignment-08-md-touhidul-islam.vercel.app/data.json",
  );
  const books = await res.json();
  const selectedBook = books.find((book) => book.id == id);

  const handleBorrow = () => {};
  return (
    <section className="bg-secondary-custom px-4 py-12">
      <div className="mx-auto grid max-w-6xl gap-10 rounded-2xl bg-primary-custom p-6 shadow-lg md:grid-cols-2 md:p-10">
        <div className="relative h-[420px] w-full overflow-hidden rounded-2xl bg-secondary-custom">
          <Image
            src={selectedBook.image_url}
            alt={selectedBook.title}
            fill
            className="object-contain p-6"
            priority
          />
        </div>

        <div className="flex flex-col justify-center">
          <span className="mb-3 inline-block w-fit rounded-full bg-secondary-custom px-4 py-1 text-sm font-semibold text-primary-custom">
            {selectedBook.category}
          </span>

          <h1 className="text-3xl font-bold text-secondary-custom sm:text-4xl">
            {selectedBook.title}
          </h1>

          <p className="mt-3 text-lg text-secondary-custom/90">
            by {selectedBook.author}
          </p>

          <p className="mt-6 leading-8 text-secondary-custom/90">
            {selectedBook.description}
          </p>

          <p className="mt-6 text-lg font-semibold text-secondary-custom">
            {selectedBook.available_quantity} copies left
          </p>

          <button
            onClick={handleBorrow}
            className="mt-8 w-fit rounded-lg bg-secondary-custom px-6 py-3 font-semibold text-primary-custom transition hover:opacity-90"
          >
            Borrow This Book
          </button>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
