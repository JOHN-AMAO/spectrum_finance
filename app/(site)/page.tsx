import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className='bg-black text-white w-full h-full'>
        <h1>This is the homepage</h1>
        <Link href='/auth'>
          <Button variant='outline'>Login</Button>
        </Link>
      </div>
    </>
  );
}
