import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function LegalTabs() {
  const location = useLocation();

  const tabs = [
    { name: "Terms & Conditions", path: "/terms-and-conditions" },
    { name: "Privacy Policy", path: "/privacy-policy" },
  ];

  return (
    <>
      <div className=" mt-[32px] rounded-[5px] p-[1px] bg-gradient-to-bl from-brand_primary to-dark_brand_primary w-fit mb-8">
        <div className="flex flex-wrap items-center justify-center gap-4 rounded-[5px] px-2 py-1 w-fit bg-white">
          {tabs.map((tab, index) => (
            <Link
              key={index}
              to={tab.path}
              className={`px-4 py-2 rounded-[5px] text-14 text-center font-aileron_r lg:min-w-[11rem] transition-all duration-200 ${
                location.pathname === tab.path
                  ? "bg-brand_secondary text-white"
                  : "text-brand_secondary"
              }`}
            >
              {tab.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
