"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRef } from "react";
import { useRouter } from "next/navigation"; // Import useRouter

const InputSearch = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSearch = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (searchRef.current?.value) {
      router.push(`/search/${searchRef.current.value}`);
    }
  };

  return (
    <div className="relative">
      <input
        placeholder="Cari anime"
        className="w-full p-2 rounded"
        ref={searchRef}
        // onchange
      />
      <button className="absolute top-2 right-2" onClick={handleSearch}>
        <MagnifyingGlass size={24} />
      </button>
    </div>
  );
};

export default InputSearch;
