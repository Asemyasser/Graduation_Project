import React, { useState } from "react";
import styles from "./SideNav.module.css";
import logo from "../../../assets/imgs/Logo.png";
import "@fontsource/inter";
import "@fontsource/itim";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faReceipt,
  faGear,
  faUsers,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const SideNav = ({ collapsed, setTitle, setCollapsed }) => {
  const [activeLink, setActiveLink] = useState("home");

  const handleLinkClick = (linkName, title) => {
    setActiveLink(linkName);
    setTitle(title);
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={`${styles.sideNav} ${
        collapsed ? styles.collapsed : styles.open
      } d-flex flex-column vh-100`}
    >
      <div className={`${styles.header} p-3 `}>
        <a href="#">
          <img src={logo} alt="Logo" className={`${styles.logo}`} />
        </a>
        {!collapsed && (
          <h1 className={`${styles.title} h2 ms-3 ${styles.textContainer} `}>
            HTI Housing
          </h1>
        )}
      </div>
      <ul className="nav flex-column mt-4 me-3 text-end fs-5 ">
        <li className="nav-item w-100">
          <NavLink
            onClick={() => {
              handleLinkClick("home", "الواجهة الرئيسية");
            }}
            to="/"
            className={`${styles.navLink}  ${
              activeLink === "home" ? styles.activeLink : ""
            } `}
          >
            {!collapsed && (
              <span className={`${styles.textContainer}`}>
                الواجهة الرئيسية
              </span>
            )}
            <FontAwesomeIcon icon={faHouse} />
          </NavLink>
        </li>

        <li className="nav-item w-100">
          <NavLink
            onClick={() => {
              handleLinkClick("requests", "طلبات الإقامة");
            }}
            to="/requests"
            className={`${styles.navLink}  ${
              activeLink === "requests" ? styles.activeLink : ""
            } `}
          >
            {!collapsed && (
              <span className={`${styles.textContainer} `}>طلبت الإقامة</span>
            )}
            <FontAwesomeIcon icon={faUsers} />
          </NavLink>
        </li>

        <li className="nav-item w-100">
          <NavLink
            onClick={() => {
              handleLinkClick("receipts", "إيصالات الدفع");
            }}
            to="/receipts"
            className={`${styles.navLink}  ${
              activeLink === "receipts" ? styles.activeLink : ""
            }`}
          >
            {!collapsed && (
              <span className={`${styles.textContainer}`}>إيصلات الدفع</span>
            )}
            <FontAwesomeIcon icon={faReceipt} />
          </NavLink>
        </li>

        <li className="nav-item w-100">
          <NavLink
            onClick={() => {
              handleLinkClick("settings", "الإعدادات");
            }}
            to="/settings"
            className={`${styles.navLink}  ${
              activeLink === "settings" ? styles.activeLink : ""
            }`}
          >
            {!collapsed && (
              <span className={`${styles.textContainer}`}>الإعدادات</span>
            )}
            <FontAwesomeIcon icon={faGear} />
          </NavLink>
        </li>
      </ul>

      <div className={`${styles.footer} mt-auto w-100 text-end  fs-5 mb-4`}>
        <NavLink
          onClick={() => handleLinkClick("logout")}
          to="/login"
          className={`${styles.navLink} ${
            activeLink === "logout" ? styles.activeLink : ""
          }  me-3 pt-3 mt-2 `}
        >
          {!collapsed && (
            <span className={`${styles.textContainer} `}>تسجل خروج</span>
          )}
          <FontAwesomeIcon icon={faArrowRightFromBracket} />
        </NavLink>
        <div
          className={`${styles.copyright} ${
            collapsed ? styles.collapsed : ""
          } mt-3 text-center`}
        >
          © {new Date().getFullYear()} <span>HTI Housing</span>. All rights
          reserved.
        </div>
      </div>
    </div>
  );
};

export default SideNav;
