import React from "react";
import {Link} from "react-router-dom";

const NavigationSidebar = ({active = 'explore'}) => {
    return(
        <>
            <ul className="list-group">
                    <li className="list-group-item">
                        <Link to="/a9">
                            <i className="fab fa-twitter"></i>
                        </Link>
                    </li>
                <Link to="/a9/twitter/home" className="wd-text-no-underline">
                    <li className={`list-group-item ${active === 'home' ? 'active' : ''}`}>
                        <div className="row">
                            <div className="col-xl-3">
                                <i className="fas fa-home"></i>
                            </div>
                            <div className="d-none d-xl-block col-xl-9">
                                Home
                            </div>
                        </div>
                    </li>
                </Link>
                <Link to="/a9/twitter/explore" className="wd-text-no-underline">
                    <li className={`list-group-item ${active === 'explore' ? 'active' : ''}`}>
                        <div className="row">
                            <div className="col-xl-3">
                                <i className="fas fa-hashtag"></i>
                            </div>
                            <div className="d-none d-xl-block col-xl-9">
                                Explore
                            </div>
                        </div>
                    </li>
                </Link>
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-xl-3">
                            <i className="fas fa-bell"></i>
                        </div>
                        <div className="d-none d-xl-block col-xl-9">
                            Notifications
                        </div>
                    </div>
                </li>
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-xl-3">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <div className="d-none d-xl-block col-xl-9">
                            Messages
                        </div>
                    </div>
                </li>
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-xl-3">
                            <i className="fas fa-hashtag"></i>
                        </div>
                        <div className="d-none d-xl-block col-xl-9">
                            Bookmarks
                        </div>
                    </div>
                </li>
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-xl-3">
                            <i className="fas fa-list"></i>
                        </div>
                        <div className="d-none d-xl-block col-xl-9">
                            Lists
                        </div>
                    </div>
                </li>
                <Link to="/a9/twitter/profile" className="wd-text-no-underline">
                    <li className={`list-group-item ${active === 'profile' ? 'active' : ''}`}>
                        <div className="row">
                            <div className="col-xl-3">
                                <i className="fas fa-user"></i>
                            </div>
                            <div className="d-none d-xl-block col-xl-9">
                                Profile
                            </div>
                        </div>
                    </li>
                </Link>
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-xl-3">
                        <span className="fa-stack wd-fa-small">
                            <i className="fas fa-circle fa-stack-2x fa-inverse"></i>
                            <i className="fas fa-ellipsis-h fa-stack-1x "></i>
                        </span>
                        </div>
                        <div className="d-none d-xl-block col-xl-9">
                            More
                        </div>
                    </div>
                </li>
            </ul>

            <div className="d-grid mx-auto mt-2">
                <a href="tweet.html" className="btn btn-primary btn-block rounded-pill">Tweet</a>
            </div>
        </>

    );
}
export default NavigationSidebar;
