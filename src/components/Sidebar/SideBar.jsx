import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { MdDashboard, MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
const routes = [
  {
    path: "/",
    name: "Page1",
    icon: <MdMessage />,
  },
  {
    path: "/Page2",
    name: "Page2",
    icon: <FaUser />,
  },
  {
    path: "/Page3",
    name: "Page3",
    icon: <MdMessage />,
  },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [isWidthSet, setIsWidthSet] = useState(true);

  const toggle = () => {
    setIsOpen(!isOpen);
    setIsWidthSet(!isWidthSet); // Set isWidthSet to false when the button is clicked
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <aside className="parent_sideBar">
          <motion.div
            animate={{
              width: isOpen ? "200px" : "45px",

              transition: {
                duration: 0.3,
                type: "spring",
                damping: 20,
              },
            }}
            className={`sidebar `}
          >
            <div className="top_section">
              <AnimatePresence>
                {isOpen && (
                  <motion.h1
                    variants={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="logo"
                  >
                    {/* AUTO ECOLE */}
                    logo
                  </motion.h1>
                )}
              </AnimatePresence>
              {/* icon open sidebare */}
              <div className="bars">
                <FaBars onClick={toggle} />
              </div>
            </div>

            <section className="routes">
              {routes.map((route, index) => {
                return (
                  <NavLink
                    to={route.path}
                    key={index}
                    className="link"
                    activeclassname="active"
                  >
                    <div className="icon">{route.icon}</div>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          variants={showAnimation}
                          initial="hidden"
                          animate="show"
                          exit="hidden"
                          className="link_text"
                        >
                          {route.name}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </NavLink>
                );
              })}
            </section>
        
          </motion.div>
        </aside>

        {/* content page  */}
        <main
          style={
            isWidthSet ? { paddingLeft: "45px" } : { paddingLeft: "200px" }
          }
        >
          {children}
        </main>
      </div>
    </>
  );
};

export default SideBar;
