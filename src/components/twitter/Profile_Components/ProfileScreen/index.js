import React from "react";
import NavigationSidebar from "../../Main_Components/NavigationSidebar";
import PostSummaryList from "../../Main_Components/PostSummaryList";
import Profile from "../Profile";
import "./ProfileStyle.css";
import TweetList from "../../Main_Components/TweetList";
import EditProfile from "../EditProfile";
import {useSelector} from "react-redux";

const ProfileScreen = () => {
    const displayProfile = useSelector((state) => state.showProfileOrEdit);
    return(
        <div className="container">
            <div className="row mt-2">
                <div className="col-2 col-sm-2 col-lg-1 col-xl-2">
                    <NavigationSidebar active={"profile"}/>
                </div>
                <div className="col-10 col-sm-10 col-lg-7 col-xl-6">
                    {displayProfile === true ? <Profile/> : <EditProfile/>}
                    <TweetList/>
                </div>
                <div className="d-none d-lg-block col-lg-4 col-xl-4">
                    <PostSummaryList title={"What's Happening"}/>
                </div>
            </div>
        </div>
    );
};
export default ProfileScreen;