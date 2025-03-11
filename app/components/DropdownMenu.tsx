"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { FaFileAlt } from "react-icons/fa";
import { FiRefreshCw } from "react-icons/fi";
import { FaDownload } from "react-icons/fa6";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { FaGasPump } from "react-icons/fa";
import { FaServer } from "react-icons/fa6";
import { FaSignsPost } from "react-icons/fa6";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import { BsFillShieldLockFill } from "react-icons/bs";
import { FaSignature } from "react-icons/fa6";
import { TiFilter } from "react-icons/ti";

const menuItems: Record<string, { name: string; href: string }[]> = {
  Blockchain: [
    { name: "Transactions", href: "https://bscscan.com/txs" },
    { name: "Pending Transactions", href: "https://bscscan.com/txsPending" },
    {
      name: "Contract Internal Transactions",
      href: "https://bscscan.com/txsInternal",
    },
    { name: "View Blobs", href: "https://bscscan.com/txsBlobs" },
    { name: "AA Transactions", href: "https://bscscan.com/txsAA" },
    { name: "View Blocks", href: "https://bscscan.com/blocks" },
    {
      name: "Forked Blocks (Reorgs)",
      href: "https://bscscan.com/blocks_forked",
    },
    { name: "Top Accounts", href: "https://bscscan.com/accounts" },
    {
      name: "Verified Contracts",
      href: "https://bscscan.com/contractsVerified",
    },
  ],
  Validators: [
    { name: "Validators Leaderboard", href: "https://bscscan.com/validators" },
    {
      name: "View Validators Set Info",
      href: "https://bscscan.com/validatorset",
    },
  ],
  Tokens: [
    { name: "Top Tokens (BEP-20)", href: "https://bscscan.com/tokens" },
    { name: "Token Transfers (BEP-20)", href: "https://bscscan.com/tokentxns" },
  ],
  NFTs: [
    { name: "Top NFTs", href: "https://bscscan.com/nft-top-contracts" },
    { name: "Top Mints", href: "https://bscscan.com/nft-top-mints" },
    { name: "Latest Trades", href: "https://bscscan.com/nft-trades" },
    { name: "Latest Transfers", href: "https://bscscan.com/nft-transfers" },
    { name: "Latest Mints", href: "https://bscscan.com/nft-latest-mints" },
  ],
  Resources: [
    { name: "Charts & Stats", href: "https://bscscan.com/charts" },
    { name: "Top Statistics", href: "https://bscscan.com/topstat" },
  ],
  Developers: [
    { name: "API Plans", href: "https://etherscan.io/apis?id=56" },
    { name: "API Documentation", href: "https://docs.bscscan.com/" },
    { name: "Code Reader (Beta)", href: "https://bscscan.com/code-reader" },
    { name: "Verify Contract", href: "https://bscscan.com/verifyContract" },
    {
      name: "Similar Contract Search",
      href: "https://bscscan.com/find-similar-contracts",
    },
    {
      name: "Contract Diff Checker",
      href: "https://bscscan.com/contractdiffchecker",
    },
    { name: "Vyper Online Compiler", href: "https://bscscan.com/vyper" },
    { name: "Bytecode to Opcode", href: "https://bscscan.com/opcode-tool" },
    { name: "Broadcast Transaction", href: "https://bscscan.com/pushTx" },
  ],
};

const moreMenuItems: Record<
  string,
  { name: string; icon: React.ReactNode; href: string; badge?: string }[]
> = {
  Tools: [
    {
      name: "Input Data Decoder",
      href: "https://bscscan.com/inputdatadecoder",
      badge: "Beta",
      icon: <FaFileAlt fontSize={13} color="#010101" />,
    },
    {
      name: "Unit Converter",
      href: "https://bscscan.com/unitconverter",
      icon: <FiRefreshCw fontSize={13} color="#010101" />,
    },
    {
      name: "CSV Export",
      href: "https://bscscan.com/exportData",
      icon: <FaDownload fontSize={13} color="#010101" />,
    },
    {
      name: "Account Balance Checker",
      href: "https://bscscan.com/balancecheck-tool",
      icon: <FaFileInvoiceDollar fontSize={13} color="#010101" />,
    },
  ],
  Explore: [
    {
      name: "Gas Tracker",
      href: "https://bscscan.com/gastracker",
      icon: <FaGasPump fontSize={13} color="#010101" />,
    },
    {
      name: "Node Tracker",
      href: "https://bscscan.com/nodetracker",
      icon: <FaServer fontSize={13} color="#010101" />,
    },
    {
      name: "Label Cloud",
      href: "https://bscscan.com/labelcloud",
      icon: <FaSignsPost fontSize={13} color="#010101" />,
    },
    {
      name: "Domain Name Lookup",
      href: "https://bscscan.com/name-lookup",
      icon: <FaMagnifyingGlassChart fontSize={13} color="#010101" />,
    },
  ],
  Services: [
    {
      name: "Token Approvals",
      href: "https://bscscan.com/tokenapprovalchecker",
      badge: "Beta",
      icon: <BsFillShieldLockFill fontSize={13} color="#0784C3" />,
    },
    {
      name: "Verified Signature",
      href: "https://bscscan.com/verifiedSignatures",
      icon: <FaSignature fontSize={13} color="#010101" />,
    },
    {
      name: "Advanced Filter",
      href: "https://bscscan.com/advanced-filter",
      badge: "Beta",
      icon: <TiFilter fontSize={13} color="#010101" />,
    },
  ],
};

const DELAY = 200; // Delay before opening/closing the menu

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [openMore, setOpenMore] = useState(false);
  let openTimeout: NodeJS.Timeout;
  let closeTimeout: NodeJS.Timeout;

  const handleMouseEnter = (category: string) => {
    clearTimeout(closeTimeout);
    openTimeout = setTimeout(() => {
      setOpenMenu(category);
      setOpenMore(false);
    }, DELAY);
  };

  const handleMouseLeave = () => {
    clearTimeout(openTimeout);
    closeTimeout = setTimeout(() => {
      setOpenMenu(null);
      setOpenMore(false);
    }, DELAY);
  };

  const handleMoreEnter = () => {
    clearTimeout(closeTimeout);
    openTimeout = setTimeout(() => {
      setOpenMore(true);
      setOpenMenu(null);
    }, DELAY);
  };

  useEffect(() => {
    return () => {
      clearTimeout(openTimeout);
      clearTimeout(closeTimeout);
    };
  }, []);

  return (
    <nav className="flex gap-6 text-sm">
      {Object.keys(menuItems).map((category) => (
        <div
          key={category}
          className="relative z-20"
          onMouseEnter={() => handleMouseEnter(category)}
          onMouseLeave={handleMouseLeave}
        >
          <button
            className={`flex items-center gap-1 cursor-pointer ${
              openMenu === category ? "text-[#0784C3]" : ""
            } transition-colors`}
          >
            {category} <ChevronDown size={16} />
          </button>

          {openMenu === category && (
            <div className="absolute left-[-15px] top-[28px] mt-2 w-60 bg-white border shadow-lg border-t-3 border-[#0784C3] border-r-0 border-b-0 border-l-0">
              <ul className="p-2 text-sm">
                {menuItems[category].map((item, index) => (
                  <li
                    key={index}
                    className="px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer"
                  >
                    <Link href={item.href} className="block w-full h-full">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}

      {/* 'More' menu */}
      <div
        className="z-20"
        onMouseEnter={handleMoreEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button className="flex items-center gap-1 hover:text-[#0784C3] transition-colors cursor-pointer">
          More <ChevronDown size={16} />
        </button>

        {openMore && (
          <div className="absolute left-[255px] rounded-tr-none rounded-tl-none w-[1390px] top-[98px] mt-2 bg-white border shadow-lg rounded-md border-t-3 border-r-0 border-l-0 border-b-0 border-[#0784C3] p-2 flex gap-6">
            <div className="bg-gray-100 rounded-sm py-4 px-3 basis-[50%]">
              <h1 className="font-medium text-sm mb-2">Tools and Services</h1>
              <p>Discover more of BscScan's tools and services in one place.</p>
            </div>
            {Object.entries(moreMenuItems).map(([section, items]) => (
              <div key={section} className="basis-[50%] py-4">
                <h4 className="font-medium ml-3 mb-2">{section}</h4>
                <ul className="space-y-1 text-sm">
                  {items.map((item, index) => (
                    <li
                      key={index}
                      className="flex  items-center cursor-pointer  px-3 py-[0.35rem] rounded-md hover:bg-gray-100"
                    >
                      <div className="flex items-center gap-2">
                        <span>{item.icon}</span>
                        <Link
                          href={item.href}
                          className={`${
                            item.name === "Token Approvals"
                              ? "text-[#0784C3]"
                              : " "
                          } block w-full h-full`}
                        >
                          {item.name}
                        </Link>
                      </div>
                      {item.badge && (
                        <span className="ml-2 bg-gray-50 text-gray-600 text-xs px-2 py-1 rounded">
                          {item.badge}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
