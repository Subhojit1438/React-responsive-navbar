import React, { children, useState } from "react";
import {
  FaBars,
  FaHome,
  FaUserAlt,
} from "react-icons/fa";
import { MdContacts } from "react-icons/md";
import { NavLink } from "react-router-dom";
import styles from './nav.module.css'

const Nav = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  }
  const menuItem = [
    {
      path: "/",
      name: "Home",
      icon: <FaHome />
    },
    {
      path: "/about",
      name: "About",
      icon: <FaUserAlt />
    },
    {
      path: "/contact",
      name: "Contact",
      icon: <MdContacts />
    }
  ]
  return (
    <>
      <div className={styles.container}>
        <div style={{ width: isOpen ? "200px" : "50px" }} className={styles.sidebar}>
          <div className={styles.top_section}>
            <h1 style={{ display: isOpen ? "block" : "none" }} className={styles.logo}>Logo</h1>
            <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className={styles.bars}>
              <FaBars onClick={toggle} />
            </div>
          </div>
          {
            menuItem.map((item, index) => (
              <NavLink to={item.path} key={index} className={styles.link} activeclassName={styles.active}>
                <div className={styles.icon}>{item.icon}</div>
                <div style={{ display: isOpen ? "block" : "none" }} className={styles.link_text}>{item.name}</div>
              </NavLink>
            ))
          }
        </div>
        <main>{children}</main>
      </div>
    </>
  )
}

export default Nav;