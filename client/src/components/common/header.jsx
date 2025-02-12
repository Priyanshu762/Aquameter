import React from "react";
import { useNavigate ,useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";


const Header = () => {
    
    const navigate = useNavigate();
    const location = useLocation();

    const backgroundColor =
    location.pathname === "/"
      ? "white"
      : location.pathname === "/about"
      ? "linear-gradient(143.49deg, rgba(0, 52, 133, 0.8) 0%, rgba(16, 81, 107, 0.8) 45.5%, rgba(0, 51, 77, 0.8) 91.47%)"
      : "linear-gradient(143.49deg, rgba(0, 52, 133, 0.8) 0%, rgba(16, 81, 107, 0.8) 45.5%, rgba(0, 51, 77, 0.8) 91.47%)"; // Default gradient

      const textColor =
      location.pathname === "/"
        ? "#071C50"
        : location.pathname === "/about"
        ? "white"
        : "white"; // Default gradient

    const navbarItems = [
        {
          id: "analytics",
          label: "Analytics",
          path: "/analytics",
          icon: "/Analytics.png",
        },
     
        {
          id: "map-view",
          label: "Map View",
          path: "/map-view",
          icon: "/Map-view.png",
        },
     
        {
          id: "event",
          label: "Event",
          path: "/event",
          icon: "/Event.png",
        },
     
        {
          id: "complaint",
          label: "Complaint",
          path: "/complaint",
          icon: "/Complaint.png",
        },
        {
          id: "weather",
          label: "Weather",
          path: "/weather",
          icon: "/Weather.png",
        },
        {
          id: "certificate",
          label: "Certificate",
          path: "/certificate",
          icon: "/Certificate.png",
        },
     
      ];
      
  return (
    <div className="header flex justify-between items-center px-16 bg-gray-800 text-white h-[7vh] "
    // conditional background color
    style={{ background: "linear-gradient(143.49deg, rgba(0, 52, 133, 0.8) 0%, rgba(16, 81, 107, 0.8) 45.5%, rgba(0, 51, 77, 0.8) 91.47%)" ,
    }}
> 
      <div className="icon">Logo</div>
      <div className="list">
  <ul className="flex gap-4 items-center">
   
          {navbarItems.map((menuItem) => (
        <div
          key={menuItem.id}
          onClick={() => {gi
            navigate(menuItem.path);
            setOpen ? setOpen(false) : null;
          }}
          className="flex justify-center items-center cursor-pointer text-xl items-center gap-2 rounded-md px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground"
        >
            <img src={menuItem.icon} alt={menuItem.label} className="w-[16px] h-[12px]" />
          <span className="text-[12px] font-Nunito">{menuItem.label}</span>
        </div>
      ))}
  </ul>
</div>

<div
  className="flex flex-row items-center gap-5 p-2 border-2 border-white shadow-[0px_4px_14px_0px_rgba(255,255,255,0.30)] rounded-[30px] px-4 py-2"
  
>
  <img src="/Profile.png" alt="profile" className="w-3 h-3" />
  <img src="/Hamburber.png" alt="menu" className="w-3 h-3" />
</div>

    </div>
  );
};

export default Header;
