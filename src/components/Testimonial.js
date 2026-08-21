"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "John Doe",
    role: "Book Lover",
    message:
      "BorrowBook makes it incredibly easy to discover and borrow new books.",
  },
  {
    name: "Sarah Smith",
    role: "Student",
    message: "I love the simple interface and the wide collection of books.",
  },
  {
    name: "Michael Brown",
    role: "Reader",
    message:
      "A great platform for anyone who loves reading without buying every book.",
  },
];

const Testimonials = () => {
  {
    return (
      <section className="bg-secondary-custom py-16 pb-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-custom mt-2">
              What Our Readers Say
            </h2>

            <p className="mt-4 text-secondary-custom">
              See what our community of readers thinks about their BorrowBook
              experience.
            </p>
          </div>

          <Swiper
            className="testimonial-swiper"
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            loop={true}
            spaceBetween={30}
            slidesPerView={1}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.name}>
                <div className="mx-auto max-w-2xl rounded-2xl bg-white p-8 text-center shadow-md">
                  <div className="mb-4 text-4xl text-secondary-custom">❝</div>

                  <p className="mb-6 text-gray-600">{testimonial.message}</p>

                  <h3 className="text-xl font-semibold text-secondary-custom">
                    {testimonial.name}
                  </h3>

                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    );
  }
};

export default Testimonials;
