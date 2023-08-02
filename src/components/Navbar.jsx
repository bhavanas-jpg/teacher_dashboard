import React from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineDashboard, MdOutlineGroups } from "react-icons/md";
import { FaIdCard } from "react-icons/fa";
import { AiOutlineFileText } from "react-icons/ai";

const Navbar = () => {
  return (
    <div>
      <ul className="sidebar__lists">
        <li>
          <NavLink className="menu__list--item" to="/">
            <i className="mr-1 ">
              <MdOutlineDashboard />
            </i>
            <span>Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="menu__list--item" to="/attendance">
            <i className="mr-1">
              <FaIdCard />
            </i>
            <span>Attendance</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="menu__list--item" to="/assignments">
            Assignments
          </NavLink>
        </li>
        <li>
          <NavLink className="menu__list--item" to="/allStudents">
            <i className="mr-1">
              <MdOutlineGroups />
            </i>
            <span> All Students</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="menu__list--item" to="/lessonPlan">
            <i className="mr-1">
              <AiOutlineFileText />
            </i>
            <span>Lesson Plan</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
