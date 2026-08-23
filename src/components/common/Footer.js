import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-primary-custom text-primary-custom">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">BorrowBook</h2>
            <p className="mt-4 max-w-md text-sm leading-7 ">
              BorrowBook is an online book borrowing platform that makes reading
              simple, affordable, and accessible. We help readers borrow and
              share books with ease while building a community that loves
              learning.
            </p>
          </div>

          <div className="md:justify-self-end">
            <h3 className="text-xl font-semibold ">Contact Us</h3>

            <ul className="mt-4 space-y-2 text-sm">
              <li>Email: support@borrowbook.com</li>
              <li>Phone: +880 1234 567890</li>
              <li>Address: Dhaka, Bangladesh</li>
            </ul>

            <div className="mt-5 flex items-center gap-4">
              <a
                href="#"
                aria-label="Facebook"
                className="rounded-full border border-white/20 p-3 text-white transition hover:bg-white hover:text-primary-custom"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="rounded-full border border-white/20 p-3 text-white transition hover:bg-white hover:text-primary-custom"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="rounded-full border border-white/20 p-3 text-white transition hover:bg-white hover:text-primary-custom"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                aria-label="X"
                className="rounded-full border border-white/20 p-3 text-white transition hover:bg-white hover:text-primary-custom"
              >
                <FaXTwitter />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/15 pt-6 text-center text-sm text-white/70">
          © {new Date().getFullYear()} BorrowBook. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
