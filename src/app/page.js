import Banner from "@/components/Banner";
import FeaturedBooks from "@/components/FeaturedBooks";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NewArrival from "@/components/NewArrival";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Banner />
      <NewArrival />
      <FeaturedBooks />
    </>
  );
}
