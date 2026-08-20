"use client";
const handleBorrow = () => {};
const BorrowBtn = () => {
  return (
    <div>
      <button
        onClick={handleBorrow}
        className="mt-8 w-fit rounded-lg bg-secondary-custom px-6 py-3 font-semibold text-primary-custom transition hover:opacity-90"
      >
        Borrow This Book
      </button>
    </div>
  );
};

export default BorrowBtn;
