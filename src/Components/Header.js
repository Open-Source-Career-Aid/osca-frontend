import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MyDesktop from "../MyHelperCompnents/MyDesktop";
import "./Style.css";

export default class Header extends Component {
    render() {
        return (
            <>
                <MyDesktop>
                    <div className="header">
                        <div className="row">
                            <div className="col-2 line">
                            </div>
                            <div className="col-1 header-text">
                                <Link className="link">
                                    Learn a Skill
                                </Link>
                            </div>
                            <div className="col-2 header-text">
                                <div className="row">
                                    <div className="col-8">
                                        <Link className="link">
                                            Track Your Progress
                                        </Link>
                                    </div>
                                    <div className="col-2 text-center">
                                        &nbsp;
                                        <Link className="link">
                                            About
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-5"></div>
                            <div className="col-2 header-text">
                                <div className="row">
                                    <div className="col-3 header-text">
                                        <Link className="link">
                                            Login
                                        </Link>
                                    </div>
                                    <div className="col-1"></div>
                                    <div className="col-4 header-text signup">
                                        <Link className="link">
                                            Sign Up 
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </MyDesktop>
            </>
        )
    }
}
