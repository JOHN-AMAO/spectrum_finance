"use client";
import React, { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";

interface Bank {
  id: number;
  code: string;
  name: string;
}

interface ApiResponse {
  status: string;
  data: Bank[];
}

const Page = () => {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchData = async () => {
    try {
      const response: AxiosResponse<ApiResponse> = await axios.get(
        "http://localhost:3001/banks"
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>Page</div>
      {isLoading ? (
        <p>Loading...</p>
      ) : data && data.data ? (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Code</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {data.data.map((bank: Bank) => (
              <tr key={bank.id}>
                <td>{bank.id}</td>
                <td>{bank.code}</td>
                <td>{bank.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No data available</p>
      )}
    </>
  );
};

export default Page;
