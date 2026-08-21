"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const BorrowBtn = () => {
  const router = useRouter();
  const userData = authClient.useSession();
  const user = userData.data?.user;
  const handleBorrow = () => {
    if (!user) {
      router.push("/sign-in");
    } else {
      toast.success("Book Borrowed Successfully!");
    }
  };
  return (
    <div>
      <button
        onClick={handleBorrow}
        className="mt-8 w-fit rounded-lg bg-primary-custom px-6 py-3 font-semibold text-primary-custom transition hover:opacity-90"
      >
        Borrow This Book
      </button>
    </div>
  );
};

export default BorrowBtn;
