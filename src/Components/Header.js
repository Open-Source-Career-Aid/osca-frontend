import React, { useState, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import MyDesktop from "../MyHelperCompnents/MyDesktop";
import MyMobile from "../MyHelperCompnents/MyMobile";
import "../Styles/Header.css";

const Header = () => {

    const [scroll, setScroll] = useState(0);
    const [drawerOpen, setDrawerOpen] = useState(0);

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
                        </div>
                        <div className="col-4 header-text">
                            <div className="col-3 header-text">
                                <Link className="link">
                                    Learn a Skill
                                </Link>
                            </div>
                            <div className="row">
                                <div className="col-9 text-center">
                                    <Link className="link">
                                        Track Your Progress
                                    </Link>
                                </div>
                                <div className="col-1 text-end">
                                    &nbsp;
                                    <Link className="link">
                                        About
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-3"></div>
                        <div className="col-2 header-text">
                            <div className="row">
                                <div className="col-3 header-text">
                                    <Link className="link">
                                        Login
                                    </Link>
                                </div>
                                <div className="col-2"></div>
                                <div className="col-6 header-text text-center signup">
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
                    className={scroll < 30 ? "header" : "header header-s"}
                >
                    <div className="row">
                        <div className="col-1">
                            
                        </div>
                        <div className="col-4"></div>
                        <div className="col-1 header-text">
                            OSCA
                        </div>
                    </div>
                </div>
            </MyMobile>
        </>
    )
}

export default Header;