import {
  FaQuoteLeft,
  FaStar,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Sarah Ahmed",
    role: "Book Lover",
    image: "https://i.pravatar.cc/150?img=47",
    review:
      "BorrowBook has made it so easy for me to discover and borrow books. I love how simple and convenient the whole experience is.",
  },
  {
    id: 2,
    name: "James Wilson",
    role: "Student",
    image: "https://i.pravatar.cc/150?img=12",
    review:
      "I can quickly find the books I need without spending a lot of money buying them. The collection is also really impressive.",
  },
  {
    id: 3,
    name: "Emily Carter",
    role: "Book Enthusiast",
    image: "https://i.pravatar.cc/150?img=32",
    review:
      "The interface is clean and easy to use. Borrowing books has never felt this simple. BorrowBook is now one of my favorite platforms.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-secondary-custom py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-custom mt-2">
            What Our Readers Say
          </h2>

          <p className="mt-4 text-secondary-custom/80">
            See what our community of readers thinks about their BorrowBook
            experience.
          </p>
        </div>

        {/* Carousel */}
        <div className="carousel w-full rounded-2xl">
          {testimonials.map((testimonial, index) => {
            const previousSlide =
              index === 0 ? testimonials.length : testimonials[index - 1].id;

            const nextSlide =
              index === testimonials.length - 1
                ? testimonials[0].id
                : testimonials[index + 1].id;

            return (
              <div
                key={testimonial.id}
                id={`slide${testimonial.id}`}
                className="carousel-item relative w-full"
              >
                <div className="w-full bg-secondary-custom/30 rounded-2xl px-6 py-10 md:px-20">
                  {/* Quote Icon */}
                  <FaQuoteLeft className="text-4xl text-primary-custom/30 mx-auto mb-6" />

                  {/* Review */}
                  <p className="max-w-3xl mx-auto text-center text-lg md:text-xl text-gray-700 leading-relaxed">
                    “{testimonial.review}”
                  </p>

                  {/* Rating */}
                  <div className="flex justify-center gap-1 mt-6">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-500" />
                    ))}
                  </div>

                  {/* User */}
                  <div className="flex flex-col items-center mt-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mb-3"
                    />

                    <h3 className="font-semibold text-lg text-secondary-custom">
                      {testimonial.name}
                    </h3>

                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>

                {/* Navigation */}
                <div className="absolute left-4 right-4 top-1/2 flex -translate-y-1/2 justify-between">
                  <a
                    href={`#slide${previousSlide}`}
                    className="btn btn-circle bg-primary-custom text-white border-none hover:opacity-90"
                  >
                    <FaChevronLeft />
                  </a>

                  <a
                    href={`#slide${nextSlide}`}
                    className="btn btn-circle bg-primary-custom text-white border-none hover:opacity-90"
                  >
                    <FaChevronRight />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((testimonial) => (
            <a
              key={testimonial.id}
              href={`#slide${testimonial.id}`}
              className="w-2.5 h-2.5 rounded-full bg-primary-custom/40 hover:bg-primary-custom transition"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
