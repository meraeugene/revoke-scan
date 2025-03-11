import DropdownMenu from "../components/DropdownMenu";
import { LuCircleUser } from "react-icons/lu";
import Image from "next/image";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MdOutlineMenu } from "react-icons/md";

const NavMenu = () => {
  return (
    <nav>
      <div className="first hidden lg:flex  items-center justify-between xl:px-64 shadow-2xl border-b border-t-0 border-x-0 lg:px-8">
        <Link href="https://bscscan.com/">
          <Image src="/logo.png" width={200} height={200} alt="Logo" />
        </Link>

        <nav>
          <ul className="flex items-center text-sm">
            <Link href="https://bscscan.com/" className="px-3 py-4 mr-2">
              Home
            </Link>
            <DropdownMenu />
            <li className="mx-3 text-blue-100">|</li>
            <Link
              href="https://bscscan.com/login"
              className="pr-3 lg:pr-0 py-4 flex items-center gap-1 hover:text-[#0784C3] cursor-pointer "
            >
              <LuCircleUser />
              Sign in
            </Link>
          </ul>
        </nav>
      </div>

      <div className="flex lg:hidden items-center justify-between px-4 py-3 ">
        <Link href="https://bscscan.com/">
          <Image src="/logo.png" width={180} height={180} alt="Logo" />
        </Link>

        <div className="flex items-center gap-3">
          <Sheet>
            <Link
              href="https://bscscan.com/login"
              className=" flex items-center gap-1 text-sm hover:text-[#0784C3] cursor-pointer"
            >
              <LuCircleUser />
              Sign in
            </Link>
            <SheetTrigger>
              <div className="border p-1 rounded-md">
                <MdOutlineMenu size={28} className="text-gray-400 " />
              </div>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default NavMenu;
