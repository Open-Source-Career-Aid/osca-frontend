import React, { useState, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import MyDesktop from "../MyHelperCompnents/MyDesktop";
import MyMobile from "../MyHelperCompnents/MyMobile";
import "../Styles/Header.css";
import logo from '../Images/OSCAlogo.png'

const Header = (props) => {

    const [scroll, setScroll] = useState(0);
    const [drawerOpen, setDrawerOpen] = useState(false);

    useLayoutEffect(() => {
        function UpdateScroll() {
            setScroll(window.scrollY);
        }
        window.addEventListener("scroll", UpdateScroll);
        UpdateScroll();
    }, []);

    return (
        <>
            <MyDesktop>
                <div
                    className={scroll < 30 ? "header" : "header header-s"}
                >
                    <div className="row">
                        <div className="col-2 line">
                            <img src={logo} alt="" />
                        </div>
                        <hr className="breaker"></hr>
                        <div className="col-6 header-text">
                            <div className="row">
                                <div className={`col-4 justify-content-center header-text ${props.location === "/learnskill" ? "link__visited" : null}`} >
                                    <Link to="/learnskill" className="link">
                                        Learn a Skill
                                    </Link>
                                </div>
                                <div className={`col-6 text-center justify-content-center ${props.location === "/track" ? "link__visited" : null}`}>
                                    <Link className="link">
                                        Track Your Progress
                                    </Link>
                                </div>
                                <div className={`col-1 text-end ${props.location === "/aboutus" ? "link__visited" : null}`}>
                                    &nbsp;
                                    <Link to="/aboutus" className="link">
                                        About
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-1"></div>
                        <div className="col-3 header-text">
                            <div className="row">
                                <div className="col-3 header-text">
                                    <Link className="link">
                                        Login
                                    </Link>
                                </div>
                                <div className="col-1"></div>
                                <div className="col-6 justify-content-center header-text text-center signup">
                                    <Link className="link-s text-center">
                                        Sign Up
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </MyDesktop>
            <MyMobile>
                <div
                    className={scroll < 30 ? "header pt-2" : "header pt-2 header-s"}
                >
                    <div className="row">
                        <div className="col-3 text-center">
                            <div className="menu-btn" onClick={() => { setDrawerOpen(!drawerOpen) }}>
                                <div className={drawerOpen ? "change-1" : "bar-1"}></div>
                                <div className={drawerOpen ? "change-2" : "bar-2"}></div>
                                <div className={drawerOpen ? "change-3" : "bar-3"}></div>
                            </div>
                        </div>
                        <div className="col-2"></div>
                        <div className="col-1 header-text">
                            <img src={logo} alt="" />
                        </div>
                    </div>
                    {
                        drawerOpen ? (
                            <>
                                <div className="row pt-5 header-ex">
                                    <div className="justify-content-center text-center header-text">
                                        <Link to="/learnskill" className="link">
                                            Learn a Skill
                                        </Link>
                                    </div>
                                </div>
                                <hr className="header-bar" />
                                <div className="row pt-2 header-ex">
                                    <div className="justify-content-center text-center header-text">
                                        <Link className="link">
                                            Track Your Progress
                                        </Link>
                                    </div>
                                </div>
                                <hr className="header-bar" />
                                <div className="row pt-2 header-ex">
                                    <div className="justify-content-center text-center header-text">
                                        <Link className="link">
                                            About us
                                        </Link>
                                    </div>
                                </div>
                                <hr className="header-bar" />
                                <div className="row pt-2 header-ex">
                                    <div className="justify-content-center text-center header-text">
                                        <Link className="link">
                                            Login
                                        </Link>
                                    </div>
                                </div>
                                <hr className="header-bar" />
                                <div className="row py-2 header-ex">
                                    <div className="justify-content-center text-center header-text">
                                        <Link className="link">
                                            Sign Up
                                        </Link>
                                    </div>
                                </div>
                            </>
                        ) : null
                    }
                </div>
            </MyMobile>
        </>
    )
}

export default Header;