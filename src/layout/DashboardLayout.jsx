import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";

export const DashboardLayout = () => {
  return (
    <main className="w-full h-screen overflow-hidden bg-light-100">
      <div>
        <Navbar />
      </div>
      <div>
        <Outlet />
      </div>
    </main>
  );
};
