import React from "react";

const WhoToFollowListItem = ({
                                 who = {
                                     "avatarIcon": "/images/nasa-logo.jpg",
                                     "userName": "NASA",
                                     "handle": "NASA",
                                 }
}) => {
    return(
        <div>
            <li className="list-group-item">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-2 col-xl-2 col-xxl-2">
                        <img src={who.avatarIcon} alt="logo image" className="wd-follow-logo-images"/>
                    </div>
                    <div className="col-lg-6 col-xl-6 col-xxl-7">
                        <span className="fw-bold">{who.userName} </span>
                        <i className="fas fa-check-circle"></i><br/>
                        @{who.handle}
                    </div>
                    <div className="col-lg-4 col-xl-4 col-xxl-3">
                        <button className="btn btn-primary rounded-pill">Follow</button>
                    </div>
                </div>
            </li>
        </div>
    );
}
export default WhoToFollowListItem;