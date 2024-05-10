// @ts-nocheck
"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Page = () => {
  const [data, setData] = useState([]); // Specify the type of data as an array of Bank objects

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<any>("http://localhost:3001/banks");
        setData([response.data]); // Set the data array from the response
      } catch (error) {
        console.error("Error fetching data:", error);
      }

      console.log(data);
    };

    fetchData();
  }, [data]);

  const firstLayer = data.map(data);
  const secondLayer = firstLayer.data;

  return (
    <div>
      {secondLayer.map((bank) => {
        return (
          <>
            <p
              className='text-white'
              key={bank.id}
            >
              {bank.name}
            </p>
            <p>it is not funny</p>
          </>
        );
      })}
    </div>
  );
};

export default Page;
