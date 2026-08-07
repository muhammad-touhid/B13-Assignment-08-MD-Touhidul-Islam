import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1683178861337-ca70ef8c0db3?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Banner background"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-secondary-custom opacity-80" />

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
              className="inline-flex items-center rounded-lg bg-primary-custom px-6 py-3 text-base font-semibold text-primary-custom transition hover:opacity-90"
            >
              Browse Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
