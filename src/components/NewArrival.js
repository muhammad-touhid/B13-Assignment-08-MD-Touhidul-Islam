import Marquee from "react-fast-marquee";

export default async function NewArrival() {
  const res = await fetch(
    "https://b13-assignment-08-md-touhidul-islam.vercel.app/data.json",
  );
  const books = await res.json();

  return (
    <div className="bg-secondary-custom">
      <div className="container mx-auto py-5 flex items-center gap-6">
        <Marquee speed={45} gradient={false} pauseOnHover autoFill>
          <button className="rounded-lg bg-primary-custom px-6 py-3 mx-4 text-base font-semibold text-primary-custom transition hover:opacity-90 text-nowrap">
            New Arrival
          </button>
          <div className="flex items-center gap-6 text-secondary-custom font-medium">
            {books.slice(0, 6).map((book) => (
              <span key={book.id} className="flex items-center gap-3">
                {book.title}
                <span className="text-secondary-custom/60">|</span>
              </span>
            ))}
            <button className="rounded-lg bg-primary-custom px-6 py-3 mx-4 text-base font-semibold text-primary-custom transition hover:opacity-90 text-nowrap">
              Special Offer
            </button>
            <span className="rounded-full py-1 text-lg font-semibold text-secondary-custom">
              Special Discount on Memberships
            </span>
            <span className="rounded-full  py-1 text-lg font-semibold text-secondary-custom">
              |
            </span>
            <span className="rounded-full  py-1 text-lg font-semibold text-secondary-custom">
              Borrow 3 Books & Get Free Delivery
            </span>
          </div>
        </Marquee>
      </div>
    </div>
  );
}
