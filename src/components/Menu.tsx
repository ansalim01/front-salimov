import React from "react";
import "./menu.css";
import arrow from "../img/arrow.svg";
import arrowR from "../img/B.svg";
import closse from "../img/x.svg";
import logo from "../img/Logo.svg";
import { navData } from "../data/navData";

interface PropsMenu {
  toggleBurgerMenu: boolean;
  setToggleBurgerMenu: (i: boolean) => void;
}

function Menu({ toggleBurgerMenu, setToggleBurgerMenu }: PropsMenu) {
  return (
    <div
      className={toggleBurgerMenu ? `header__menu active` : `header__menu`}
      onClick={() => setToggleBurgerMenu(false)}
    >
      <div className={toggleBurgerMenu ? "blur" : ""}></div>
      <div
        className="menu_container _container"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="menu__top">
          <img className="menu__top-logo" src={logo} alt="logo" />
          <img
            onClick={() => setToggleBurgerMenu(!toggleBurgerMenu)}
            className="menu__top-borger"
            src={closse}
            alt="borger"
          />
        </div>

        <nav className="menu">
          <ul className="menu__items">
            {navData.map((item, index) => (
              <li key={index} className="menu__item">
                <div className="menu__item-cont">
                  <span className="menu__item-text">{item.name}</span>
                  {item.img && <img src={item.img} alt="arrow" />}
                </div>
                {item.dat && (
                  <ul className="menu-item__fall-items">
                    {item.dat.map((it, ind) => (
                      <li
                        key={it.name + "-" + ind}
                        className="menu-item__fall-item"
                      >
                        {it.name}
                        <img src={it.img} alt="arrowR" />
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Menu;
