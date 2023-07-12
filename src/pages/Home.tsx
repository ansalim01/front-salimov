import React, { SetStateAction, useEffect, useRef, useState } from "react";
import logo from "../img/Logo.svg";
import loupe from "../img/W.svg";
import borger from "../img/Combined Shape.svg";

import "../css/app.css";
import Menu from "../components/Menu";
import Main from "../components/Main";
import { DisableScroll } from "../components/assets/DisableScroll";

function Home() {
  const [toggleBurgerMenu, setToggleBurgerMenu] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [headerHeight, setHeaderHeight] = useState<number | undefined>(0);
  const refHeader = useRef<HTMLDivElement | null>(null);
  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShow(true);
      } else if (window.scrollY < lastScrollY) {
        setShow(false);
      }
      setLastScrollY(window.scrollY);
    }
  };
  const element = document.body;

  useEffect(() => {
    DisableScroll(element, toggleBurgerMenu);
  }, [toggleBurgerMenu]);

  useEffect(() => {
    setHeaderHeight(refHeader?.current?.clientHeight);
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);
  return (
    <div className="wrapper">
      <div
        className="wrapper__container"
        style={{ paddingTop: `${headerHeight}px` }}
      >
        <header
          className={`header`}
          style={
            show && lastScrollY > 200
              ? { transform: `translateY(-${headerHeight}px)` }
              : {}
          }
          ref={refHeader}
        >
          <div className="header__top _container">
            <div
              className="header-menu__icon"
              onClick={() => setToggleBurgerMenu(!toggleBurgerMenu)}
            >
              <img src={borger} alt="borger" />
            </div>
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="loppa">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text"
              />
              <img src={loupe} alt="loupe" />
            </div>
          </div>

          <Menu
            toggleBurgerMenu={toggleBurgerMenu}
            setToggleBurgerMenu={setToggleBurgerMenu}
          ></Menu>
        </header>

        <Main input={input}></Main>
      </div>
    </div>
  );
}

export default Home;
