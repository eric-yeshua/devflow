import Navbar from "@/components/navigation/navbar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col w-full">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
