"use client";
import React, { useState, useEffect } from "react";
import SearchComponent from "./Search";
import { ButtonIcon } from "./ButtonIcon";
import { FaGasPump } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
  const [ethPrice, setEthPrice] = useState({
    price: "$2680.01",
    change: "+0.47%",
    color: "#00A186", // Green for positive change
  });

  const router = useRouter();

  useEffect(() => {
    // Simulate price update
    const timeout = setTimeout(() => {
      setEthPrice({
        price: "$1895.66",
        change: "-8.27%",
        color: "#FF4D4D", // Red for negative change
      });
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  // Function to handle search when user presses Enter
  const handleSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const query = event.currentTarget.value.trim();
      if (!query) return;

      window.location.href = `https://bscscan.com/search?q=${encodeURIComponent(
        query
      )}`;
    }
  };

  return (
    <div className="sticky py-2 p-4 lg:px-8 xl:px-64 border-b  md:flex items-center justify-between ">
      <div className="md:flex items-center gap-4 text-xs hidden ">
        <p className="text-[#6C757D]">
          ETH Price:{" "}
          <span className="text-[#0784C3]">
            {ethPrice.price}{" "}
            <span style={{ color: ethPrice.color }}>{ethPrice.change}</span>
          </span>{" "}
        </p>
        <div className="flex items-center gap-2 md:hidden lg:flex">
          <FaGasPump className="text-gray-400 " size={13} />
          <p>
            Gas:{" "}
            <Link
              href="https://bscscan.com/gastracker"
              className="text-[#0784C3]"
            >
              1 GWei
            </Link>
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <SearchComponent
          placeholder="Search by Address / Txn Hash / Block / Token / Domain Name"
          onKeyDown={handleSearch} // Listen for Enter key
        />
        <ButtonIcon />
      </div>
    </div>
  );
};

export default Header;
