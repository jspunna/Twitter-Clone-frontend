import React from "react";
import "./HomeStyle.css";
import NavigationSidebar from "../NavigationSidebar";
import PostSummaryList from "../PostSummaryList";
import TweetList from "../TweetList";
import WhatsHappening from "../WhatsHappening"

const HomeScreen = () => {
    return(
        <div className="container">
            <div className="row mt-2">
                <div className="col-2 col-sm-2 col-lg-1 col-xl-2">
                    <NavigationSidebar active={"home"}/>
                </div>
                <div className="col-10 col-sm-10 col-lg-7 col-xl-6">
                    <WhatsHappening/>
                    <TweetList/>
                </div>
                <div className="d-none d-lg-block col-lg-4 col-xl-4">
                    <PostSummaryList title={"What's Happening"}/>
                </div>
            </div>
        </div>
    );
};
export default HomeScreen;