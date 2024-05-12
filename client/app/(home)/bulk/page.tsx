import Link from "next/link";
import { Button } from "@/components/ui/button";

const Page = () => {
  return (
    <div className='flex-col gap-4'>
      <h1 className='text-white text-2xl mb-4'>
        This page is currently in developement, you can transfer money to other
        users for now
      </h1>
      <div className='flex gap-4'>
        <Link href='/dashboard'>
          <Button
            className='text-black'
            variant='outline'
          >
            Dashboard
          </Button>
        </Link>
        <Link href='/transfer'>
          <Button
            className='text-black'
            variant='outline'
          >
            Transfer
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Page;
