"use client";
import ActionTypeList from "@/components/ActionTypeList";
import { useSession } from "next-auth/react";
const Home = () => {
  const session = useSession();
  const now = new Date();

  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
    now
  );

  return (
    <section className='flex size-full flex-col gap-5 text-white'>
      <div className='h-[303px] w-full rounded-[20px] bg-hero bg-cover'>
        <div className='flex h-full flex-col justify-between max-md:py-8 lg:p-11'>
          <h2 className='glassmorphism lg:text-3xl font-extrabold rounded py-2 '>
            {session.data?.user?.name}
          </h2>
          <div className='flex flex-col gap-2'>
            <h1 className='text-3xl font-extrabold lg:text-5xl'>{time}</h1>
            <p className='text-lg font-medium text-sky-1 lg:text-2xl'>{date}</p>
          </div>
        </div>
      </div>

      <ActionTypeList />
    </section>
  );
};

export default Home;
