import { Medal } from "lucide-react";
import React from "react";

interface BadgeProps {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
  variant: "amber" | "gray";
}

const Badge = ({ icon: Icon, text, variant }: BadgeProps) => (
  <div
    className={`flex items-center gap-1 py-1 px-2 text-xs rounded-full border ${
      variant === "amber"
        ? "bg-amber-100 border-amber-800 text-amber-800"
        : "bg-gray-100 border-gray-800 text-gray-800"
    }`}
  >
    <Icon className="flex-shrink-0 h-full w-auto" />
    <span>{text}</span>
  </div>
);

const MainTitle = () => {
  return (
    <div className="flex items-start gap-4 h-24">
      {" "}
      {/* Set a specific height */}
      <div className="h-full aspect-square rounded-lg border-2 border-gray-300 bg-slate-100 flex-shrink-0">
        <img
          src="./dashLogo.png"
          alt="House Spectrum Logo"
          className="w-full h-full object-contain p-1"
          width={64}
          height={64}
        />
      </div>
      <div className="min-w-0">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold truncate">
          House Spectrum Ltd
        </h1>
        <div className="mt-2 flex flex-wrap items-center gap-2 text-sm">
          <Badge icon={Medal} text="Certified" variant="amber" />
          <Badge icon={Medal} text="Jessica Parker" variant="gray" />
          <time className="text-gray-600 p-2">Edited 7 hours ago</time>
        </div>
      </div>
    </div>
  );
};

export default MainTitle;
