import Banner from "@/components/Banner";
import FeaturedBooks from "@/components/FeaturedBooks";
import NewArrival from "@/components/NewArrival";
import Testimonials from "@/components/Testimonial";
import WhyBorrowBook from "@/components/WhyBorrowBook";

export default function Home() {
  return (
    <>
      <Banner />
      <NewArrival />
      <FeaturedBooks />
      <WhyBorrowBook />
      <Testimonials />
    </>
  );
}
