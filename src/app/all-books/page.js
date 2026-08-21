import BookCard from "@/components/BookCard";
import SearchBtn from "@/components/SearchBtn";

const AllBooks = async ({ searchParams }) => {
  const { search } = await searchParams;

  const res = await fetch(
    "https://b13-assignment-08-md-touhidul-islam.vercel.app/data.json",
  );

  const books = await res.json();

  const filteredBooks = search
    ? books.filter((book) =>
        book.title?.toLowerCase().includes(search.toLowerCase()),
      )
    : books;

  return (
    <section className="bg-secondary-custom py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-secondary-custom sm:text-4xl">
            All Books
          </h2>

          <SearchBtn />
        </div>

        {filteredBooks.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {filteredBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        ) : (
          <p className="py-20 text-center text-xl">
            No books found for "{search}".
          </p>
        )}
      </div>
    </section>
  );
};

export default AllBooks;
