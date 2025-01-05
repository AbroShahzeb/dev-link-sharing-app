import { useState } from "react";
import { MobileLinkProfileView } from "../../../generalComponents/MobileLinkProfileView";

import { FormActions } from "./components/FormActions";
import { useSelector } from "react-redux";

export const Links = () => {
  const links = useSelector((state) => state.links);
  return (
    <main className="h-[calc(100vh-80px)]   p-6 flex gap-6">
      {/* PHONE MOCKUP  */}
      <div className="hidden h-full lg:flex  items-center justify-center w-[560px] p-6 bg-white rounded-[12px] ">
        <MobileLinkProfileView />
      </div>

      {/* FORM ACTIONS  */}
      <FormActions />
    </main>
  );
};
