"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";

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

  const handleExportCSV = () => {
    if (!data.length) return;

    const headers = ["#", "Name", "Email", "Message", "Created At"];
    const rows = data.map((item, index) => [
      index + 1,
      `"${item.name.replace(/"/g, '""')}"`,
      `"${item.email.replace(/"/g, '""')}"`,
      `"${item.message.replace(/"/g, '""')}"`,
      new Date(item.createdAt).toLocaleString(),
    ]);

    const csvContent =
      [headers, ...rows].map((row) => row.join(",")).join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "contact_records.csv");
    link.click();
  };

  const handleExportExcel = () => {
    if (!data.length) return;

    const worksheetData = data.map((item, index) => ({
      "#": index + 1,
      Name: item.name,
      Email: item.email,
      Message: item.message,
      "Created At": new Date(item.createdAt).toLocaleString(),
    }));

    const worksheet = XLSX.utils.json_to_sheet(worksheetData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Contacts");

    XLSX.writeFile(workbook, "contact_records.xlsx");
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-yellow-400 animate-pulse">
        Loading contact records...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="bg-red-900/30 border border-red-500/50 text-red-300 px-6 py-4 rounded-xl shadow-lg">
          <p className="font-medium">Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black px-6 py-16 text-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl lg:text-4xl font-bold mb-8 text-center">
          <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Contact Records
          </span>
        </h1>

        {/* Export Buttons */}
        <div className="flex justify-end gap-3 mb-4">
          <button
            onClick={handleExportCSV}
            className="px-5 py-2 bg-yellow-800/50 border border-yellow-500 text-yellow-500 rounded-md shadow-md hover:from-yellow-400 hover:to-yellow-500 transition"
          >
            Export CSV
          </button>
          <button
            onClick={handleExportExcel}
            className="px-5 py-2 bg-yellow-800/50 border border-yellow-600 text-yellow-500 rounded-md shadow-md hover:from-yellow-500 hover:to-yellow-600 transition"
          >
            Export Excel
          </button>
        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
          <div className="h-[75dvh] overflow-auto">
            <table className="min-w-full text-sm hover:cursor-pointer">
              <thead className="sticky top-0 bg-black backdrop-blur-md">
                <tr className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 text-yellow-300">
                  <th className="px-4 py-3 border border-white/10 text-left font-semibold">
                    #
                  </th>
                  <th className="px-4 py-3 border border-white/10 text-left font-semibold">
                    Name
                  </th>
                  <th className="px-4 py-3 border border-white/10 text-left font-semibold">
                    Email
                  </th>
                  <th className="px-4 py-3 border border-white/10 text-left font-semibold">
                    Message
                  </th>
                  <th className="px-4 py-3 border border-white/10 text-left font-semibold">
                    Created At
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr
                    key={item.id}
                    className={`transition-colors duration-200 ${
                      index % 2 === 0 ? "bg-black/40" : "bg-black/20"
                    } hover:bg-yellow-600/10`}
                  >
                    <td className="px-4 py-3 border border-white/10 text-gray-200">
                      {index + 1}
                    </td>
                    <td className="px-4 py-3 border border-white/10">
                      <span className="text-white font-medium">{item.name}</span>
                    </td>
                    <td className="px-4 py-3 border border-white/10 text-gray-300">
                      {item.email}
                    </td>
                    <td className="px-4 py-3 border border-white/10 text-gray-400 max-w-xs truncate">
                      {item.message}
                    </td>
                    <td className="px-4 py-3 border border-white/10 text-gray-400">
                      {new Date(item.createdAt).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
