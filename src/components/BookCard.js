import { Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BookCard = ({ book }) => {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl relative">
      <div className="relative aspect-[2/3] w-full">
        <Image
          src={book.image_url}
          alt={book.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <Chip size="lg" className="absolute right-4 top-4">
        {book.category}
      </Chip>

      <div className="p-5">
        <h3 className="text-lg font-bold text-secondary-custom">
          {book.title}
        </h3>
        <p className="mt-1 text-sm text-secondary-custom/80">
          by{" "}
          <span className="text-secondary-custom font-semibold">
            {book.author}
          </span>
        </p>

        <p className="mt-3 line-clamp-2 text-sm text-secondary-custom/80">
          {book.description}
        </p>

        <div className="mt-5">
          <Link href={`/all-books/${book.id}`}>
            <button
              variant="outline"
              className="w-full rounded-lg bg-primary-custom px-4 py-2 text-sm font-semibold text-primary-custom transition hover:opacity-90"
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
