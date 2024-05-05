"use client";
import { SidebarLinks } from "@/constants";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <>
      <section
        className='sticky left-0 top-0 flex h-screen w-fit flex-col
      justify-between bg-[#08111f] p-6 pt-28 text-white max-sm:hidden lg:w-[264px]'
      >
        <div className='flex flex-1 flex-col gap-6'>
          {SidebarLinks.map((link) => {
            const isActive =
              pathname === link.route || pathname.startsWith(link.route);
            return (
              <>
                <Link
                  href={link.route}
                  key={link.label}
                  className={cn(
                    " flex gap-4 items-center p-4 rounded-lg justify-start",
                    { "bg-blue-700": isActive }
                  )}
                >
                  <Image
                    src={link.imgUrl}
                    width={24}
                    height={24}
                    alt='Sidebar image'
                  />
                  <p className='text-lg font-semibold max-lg:hidden'>
                    {link.label}
                  </p>
                </Link>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Sidebar;
