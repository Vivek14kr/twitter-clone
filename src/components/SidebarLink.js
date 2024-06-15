import React from 'react'

function SidebarLink({ icon, label }) {
  return (
    <div className=" cursor-pointer flex items-center space-x-4 hover:bg-gray-800 p-2 rounded-md">
      {icon}
      <span className='hidden lg:block md:block'>{label}</span>
    </div>
  );
}

export default SidebarLink