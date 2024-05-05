/* eslint-disable camelcase */
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import HomeCard from "./HomeCard";

const initialValues = {
  dateTime: new Date(),
  description: "",
  link: "",
};

const MeetingTypeList = () => {
  const router = useRouter();

  return (
    <section className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4'>
      <HomeCard
        img='/icons/add-meeting.svg'
        title='Transfer'
        description='Transfer funds'
        handleClick={() => router.push("/transfer")}
      />
      <HomeCard
        img='/icons/join-meeting.svg'
        title='Transaction History'
        description='view transaction history'
        className='bg-blue-1'
        handleClick={() => router.push("/history")}
      />
      <HomeCard
        img='/icons/schedule.svg'
        title='Analytics'
        description='Check the analysis of your data'
        className='bg-purple-1'
        handleClick={() => router.push("/analytics")}
      />
      <HomeCard
        img='/icons/recordings.svg'
        title='Banks'
        description='Banks'
        className='bg-yellow-1'
        handleClick={() => router.push("/banks")}
      />
    </section>
  );
};

export default MeetingTypeList;
