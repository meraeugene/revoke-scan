import Image from "next/image";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { LuArrowUpToLine } from "react-icons/lu";
import { RxExternalLink } from "react-icons/rx";

const Footer = () => {
  return (
    <footer className="lg:px-8 xl:px-64 p-4  bg-gray-100 py-6 text-sm  relative ">
      <div className="flex items-center justify-between pb-6">
        <Link
          href="https://twitter.com/bscscan"
          className="flex items-center gap-1 hover:text-[#0784C3] cursor-pointer"
        >
          <FaXTwitter />
          <h1>(Twitter)</h1>
        </Link>

        <Link
          href="https://bscscan.com/tokenapprovalchecker#"
          className="flex items-center gap-1 hover:text-[#0784C3] cursor-pointer"
        >
          <LuArrowUpToLine />
          <h1>Back to Top</h1>
        </Link>
      </div>

      <div className="mx-auto flex lg:flex-row flex-col basis-full   gap-6 py-8 border-t border-gray-200 ">
        <div className="basis-[40%]">
          <p className="flex items-center gap-2">
            <Image src="/eth.svg" width={25} height={25} alt="ethereum" />
            <span className="text-lg hover:text-[#538096] cursor-pointer group relative flex items-center gap-1">
              Powered by Ethereum
              <RxExternalLink
                className="text-gray-500 hidden group-hover:inline-block ml-1"
                size={13}
              />
            </span>
          </p>

          <p className="mt-2 text-sm">
            RevokeScan is a Block Explorer and Analytics Platform for Ethereum{" "}
            2.0.
          </p>
          <button className="mt-4 cursor-pointer bg-gray-200 hover:bg-gray-300 px-3 py-1.5 rounded-md flex items-center text-xs duration-300 ease-in-out">
            <span className="mr-2">
              <Image
                src="/metamask.svg"
                width={20}
                height={20}
                alt="metamask"
              />
            </span>{" "}
            Add Beacon Network
          </button>
        </div>

        <div className="md:flex-row flex-col gap-8 flex md:basis-full ">
          <div className="basis-[20%] md:basis-full ">
            <h3 className="font-semibold">Company</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link
                  href="https://bscscan.com/delegate"
                  className="hover:text-[#0784C3] duration-100 ease-in-out text-[#081D35] "
                >
                  Delegate to RevokeScan{" "}
                  <span className="bg-[#0784C3] ml-1 text-white text-[11px] px-2 py-1 font-medium rounded-full">
                    Staking
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://bscscan.com/brandassets"
                  className="hover:text-[#0784C3] duration-100 ease-in-out text-[#081D35] "
                >
                  Brand Assets
                </Link>
              </li>
              <li>
                <Link
                  href="https://bscscan.com/contactus"
                  className="hover:text-[#0784C3] duration-100 ease-in-out text-[#081D35] "
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="https://bscscan.com/terms"
                  className="hover:text-[#0784C3] duration-100 ease-in-out text-[#081D35] "
                >
                  Terms & Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="https://etherscan.io/bugbounty"
                  className="hover:text-[#0784C3] duration-100 ease-in-out text-[#081D35] flex items-center gap-1"
                >
                  Bug Bounty <RxExternalLink className="text-gray-500" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="basis-[20%]  md:basis-full ">
            <h3 className="font-semibold">Community</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link
                  href="https://docs.bscscan.com/"
                  className="hover:text-[#0784C3] duration-100 ease-in-out text-[#081D35]"
                >
                  API Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="https://info.bscscan.com/"
                  className="hover:text-[#0784C3] duration-100 ease-in-out text-[#081D35]"
                >
                  Knowledge Base
                </Link>
              </li>
              <li>
                <Link
                  href="https://bscscan.freshstatus.io/"
                  className="hover:text-[#0784C3] duration-100 ease-in-out text-[#081D35]"
                >
                  Network Status
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.binance.org/en/smartChain"
                  className="hover:text-[#0784C3] duration-100 ease-in-out flex items-center gap-1 text-[#081D35]"
                >
                  Learn BSC <RxExternalLink className="text-gray-500" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="basis-[20%]  md:basis-full">
            <h3 className="font-semibold">Products & Services</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link
                  href="https://etherscan.io/contactusadvertise?type=56"
                  className="hover:text-[#0784C3] duration-100 ease-in-out flex items-center gap-1 text-[#081D35]"
                >
                  Advertise <RxExternalLink className="text-gray-500" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://etherscan.io/eaas"
                  className="hover:text-[#0784C3] duration-100 ease-in-out flex items-center gap-1 text-[#081D35]"
                >
                  Explorer as a Service (EaaS){" "}
                  <RxExternalLink className="text-gray-500" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://etherscan.io/apis?id=56"
                  className="hover:text-[#0784C3] duration-100 ease-in-out flex items-center gap-1 text-[#081D35]"
                >
                  API Plans <RxExternalLink className="text-gray-500" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://bscscan.com/priority-support"
                  className="hover:text-[#0784C3] duration-100 ease-in-out text-[#081D35]"
                >
                  Priority Support
                </Link>
              </li>
              <li>
                <Link
                  href="https://blockscan.com/"
                  className="hover:text-[#0784C3] duration-100 ease-in-out text-[#081D35]"
                >
                  Blockscan
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-6 flex lg:items-center items-start md:flex-row flex-col justify-between border-t pt-4 lg:text-sm text-xs gap-1 ">
        <p>
          RevokeScan © 2025 (BSC-C) | ⛏️ Built by Team{" "}
          <span className="text-[#0784C3] font-semibold">Etherscan</span>
        </p>
        <p>
          Donations:{" "}
          <span className="text-[#0784C3] lg:text-sm text-xs">
            0x71c765...d8976f
          </span>{" "}
          ❤️
        </p>
      </div>
    </footer>
  );
};

export default Footer;
