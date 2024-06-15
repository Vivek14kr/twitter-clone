import React from "react";

function SidebarLink({ icon, label }) {
  return (
    <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-800 p-2 rounded">
      {icon}
      <span>{label}</span>
    </div>
  );
}

export default SidebarLink;
