import React, { useState } from "react";
import { SidebarSection, Wrapper, MenuIcon } from "./sidebar.styles";
import { useNavigate, useLocation } from "react-router-dom";

import { IoHomeOutline, IoPersonOutline, IoMenu } from "react-icons/io5";
import { FaInbox, FaCode } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";

const menu = [
  { title: "Home", path: "/", icon: <IoHomeOutline /> },
  { title: "About", path: "/about", icon: <IoPersonOutline /> },
  { title: "Skill", path: "/skill", icon: <FaCode /> },
  { title: "Portfolio", path: "/portfolio", icon: <FaInbox /> },
  { title: "Contact", path: "/contact", icon: <FiMessageSquare /> },
];

const SideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <>
      {!open && (
        <MenuIcon onClick={() => setOpen(true)}>
          <IoMenu />
        </MenuIcon>
      )}

      <SidebarSection className={open ? "open" : ""}>
        <Wrapper>
          <h1>
            <b style={{ fontFamily: "Cinzel", fontWeight: 300, fontSize: "40px" }}>
              L
            </b>
            azizjon
          </h1>

          <div className="menu_start">
            {menu.map((item, index) => (
              <div
                key={index}
                className={`menu ${
                  location.pathname === item.path ? "active" : ""
                }`}
                onClick={() => {
                  navigate(item.path);
                  setOpen(false);
                }}
              >
                <span>{item.icon}</span>
                <h2>{item.title}</h2>
              </div>
            ))}
          </div>
        </Wrapper>
      </SidebarSection>
    </>
  );
};

export default SideBar;
