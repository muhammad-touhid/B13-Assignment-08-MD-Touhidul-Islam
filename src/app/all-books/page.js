import BookCard from "@/components/BookCard";
import SearchBtn from "@/components/SearchBtn";
import Link from "next/link";

const AllBooks = async ({ searchParams }) => {
  const { search, category } = await searchParams;

  const res = await fetch(
    "https://b13-assignment-08-md-touhidul-islam.vercel.app/data.json",
  );

  const books = await res.json();

  let filteredBooks = search
    ? books.filter((book) =>
        book.title?.toLowerCase().includes(search.toLowerCase()),
      )
    : books;

  if (category) {
    filteredBooks = filteredBooks.filter((book) => book.category === category);
  }

  const categories = [];

  books.forEach((book) => {
    if (!categories.includes(book.category)) {
      categories.push(book.category);
    }
  });

  return (
    <section className="bg-secondary-custom py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-15 text-right">
          <SearchBtn />
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-2">
            <p className="bg-primary-custom text-primary-custom p-2 rounded-xl text-center">
              Category
            </p>

            <ul className="mt-4 space-y-3 pl-3">
              <li>
                <Link
                  href="/all-books"
                  className="cursor-pointer hover:font-semibold text-secondary-custom block"
                >
                  All Books
                </Link>
              </li>

              {categories.map((category) => (
                <li key={category}>
                  <Link
                    href={`/all-books?category=${encodeURIComponent(category)}`}
                    className="cursor-pointer hover:font-semibold text-secondary-custom block"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {filteredBooks.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 col-span-10">
              {filteredBooks.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          ) : (
            <p className="py-20 text-center text-xl col-span-10">
              No books found.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default AllBooks;
