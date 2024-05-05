"use client";
import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import { Button } from "./ui/button";

const UserButton = () => {
  const session = useSession();
  return (
    <div className='hidden md:block '>
      <Popover>
        <PopoverTrigger>
          <Image
            src={session?.data?.user?.image}
            width={50}
            height={50}
            alt='me'
            className='rounded-full w-10 border-4 border-blue-600'
          />
        </PopoverTrigger>
        <PopoverContent className='bg-white text-black mr-5'>
          <p className='font-extrabold text-lg'>
            Welcome 👋, {session.data?.user?.name}{" "}
          </p>
          <p className='text-gray-700'>{session?.data?.user?.email}</p>
          <Button
            className='mt-4 bg-black text-white'
            onClick={() => signOut()}
          >
            Log out
          </Button>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default UserButton;
