import { FaBookOpen, FaSyncAlt, FaMoneyBillWave, FaBolt } from "react-icons/fa";

const features = [
  {
    icon: FaBookOpen,
    title: "Wide Collection",
    description:
      "Explore a growing collection of books across different genres and interests.",
  },
  {
    icon: FaSyncAlt,
    title: "Easy Borrowing",
    description:
      "Find your favorite book and borrow it with a simple and hassle-free process.",
  },
  {
    icon: FaMoneyBillWave,
    title: "Save More",
    description:
      "Enjoy more books without the cost of buying every title you want to read.",
  },
  {
    icon: FaBolt,
    title: "Quick & Simple",
    description:
      "Browse, discover, and manage your borrowed books through an easy-to-use platform.",
  },
];

const WhyBorrowBook = () => {
  return (
    <section className="py-16 px-4 bg-secondary-custom">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-secondary-custom/70">
            Why Choose Us
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-secondary-custom mt-2">
            Why BorrowBook?
          </h2>

          <p className="mt-4 text-secondary-custom/80">
            Discover more. Read more. Spend less. BorrowBook makes it simple to
            discover and enjoy your favorite books.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-primary-custom flex items-center justify-center text-3xl">
                  <Icon className="text-3xl text-primary-custom" />
                </div>

                <h3 className="text-xl font-semibold text-secondary-custom mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyBorrowBook;
