import BookCard from "./shared/BookCard";

const FeaturedBooks = async () => {
  const res = await fetch(
    "https://b13-assignment-08-md-touhidul-islam.vercel.app/data.json",
  );
  const books = await res.json();
  const featuredBooks = books.slice(0, 4);

  return (
    <section className="bg-secondary-custom py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-secondary-custom sm:text-4xl">
            Featured Books
          </h2>
          <p className="mt-3 text-sm text-secondary-custom/80 sm:text-base">
            Explore our top picks and discover your next favorite read.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {featuredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;
