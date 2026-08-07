import Link from "next/link";

export default function Banner() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/banner.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-primary-custom opacity-80" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[420px] max-w-7xl items-center px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold leading-tight text-secondary-custom sm:text-5xl md:text-6xl">
            Find Your Next Read
          </h1>

          <p className="mt-5 text-base leading-7 text-secondary-custom sm:text-lg">
            Discover books, borrow easily, and enjoy reading from a growing
            community of book lovers.
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              href="/books"
              className="inline-flex items-center rounded-lg bg-secondary-custom px-6 py-3 text-base font-semibold text-primary-custom transition hover:opacity-90"
            >
              Browse Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
