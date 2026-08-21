"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const SearchBtn = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();

    const term = searchTerm.trim();

    if (!term) {
      router.push("/all-books");
      return;
    }

    router.push(`/all-books?search=${encodeURIComponent(term)}`);
  };

  return (
    <form onSubmit={handleSearch} className="join">
      <div>
        <label className="input validator join-item">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </g>
          </svg>

          <input
            type="text"
            placeholder="Write your book name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </label>
      </div>

      <button
        type="submit"
        className="btn bg-primary-custom text-primary-custom join-item"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBtn;