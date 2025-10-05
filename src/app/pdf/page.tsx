"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

interface Contact {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

const Page = () => {
  const [data, setData] = useState<Contact[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get<Contact[]>(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/contact`
        );
        setData(response.data);
      } catch (err: any) {
        setError(err.message || "Failed to fetch data");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">Error: {error}</div>;

  return (
    <div className="mt-20 p-6">
      <h1 className="text-2xl font-bold mb-4">Contact Records</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 text-sm">
          <thead>
            <tr className="bg-gray-900 text-left">
              <th className="px-4 py-2 border">#</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Message</th>
              <th className="px-4 py-2 border">Created At</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item.id} className={`hover:bg-neutral-800 ${index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-700'}`}>
                <td className="px-4 py-2 border" >{index + 1}</td>
                <td className="px-4 py-2 border">{item.name}</td>
                <td className="px-4 py-2 border">{item.email}</td>
                <td className="px-4 py-2 border">{item.message}</td>
                <td className="px-4 py-2 border">
                  {new Date(item.createdAt).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
