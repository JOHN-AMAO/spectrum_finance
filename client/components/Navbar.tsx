import Image from "next/image";
import Link from "next/link";
import UserButton from "@/components/UserButton";

import MobileNav from "./MobileNav";
import { Button } from "./ui/button";
import CreateSubAccount from "./CreateSubAccount";

const Navbar = () => {
  return (
    <nav className='flex flex-row justify-between flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10'>
      <Link
        href='/'
        className='flex items-center gap-1'
      >
        {/* <Image
          src='/icons/logo.svg'
          width={32}
          height={32}
          alt='spectrum logo'
          className='max-sm:size-10'
        /> */}
        <p className='text-[26px] font-extrabold font-sans border-b-2 max-sm:hidden'>
          <span className='bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text'>
            Spectrum
          </span>
        </p>
      </Link>
      <div className='flex-between gap-5 '>
        <div className='flex gap-4'>
          {/* <Button>Create Sub Account</Button> */}
          <CreateSubAccount />
          <UserButton />
        </div>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
