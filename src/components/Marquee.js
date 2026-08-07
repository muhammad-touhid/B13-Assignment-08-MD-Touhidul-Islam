import Marquee from "react-fast-marquee";

async function getBooks() {
  const res = await fetch(
    "https://b13-assignment-08-md-touhidul-islam.vercel.app/data.json",
    {
      next: { revalidate: 300 },
    },
  );

  return res.json();
}

export default async function MarqueeSection() {
  const books = await getBooks();

  return (
    <section className="bg-primary-custom py-3">
      <Marquee speed={50} gradient={false} pauseOnHover autoFill>
        {books.map((book) => (
          <span key={book.id} className="mx-8 text-primary-custom font-medium">
            📚 New Arrival: <strong>{book.title}</strong>
          </span>
        ))}

        <span className="mx-8 text-primary-custom font-medium">
          🎉 Special Discount on Memberships
        </span>

        <span className="mx-8 text-primary-custom font-medium">
          🚚 Borrow 3 Books & Get Free Delivery
        </span>
      </Marquee>
    </section>
  );
}
