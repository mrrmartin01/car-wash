import { IconLoader } from "@tabler/icons-react";
import React from "react";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-black text-center">
      <h1 className="text-3xl font-mono md:text-4xl font-bold mb-6 bg-gradient-to-b from-white to-yellow-600 bg-clip-text text-transparent tracking-wide">
        Spade Car Wash
      </h1>
      <IconLoader className="animate-spin text-yellow-500" size={56} />
      <p className="mt-4 text-sm text-gray-400 animate-pulse">
        Preparing your shine...
      </p>
    </div>
  );
};

export default LoadingScreen;
