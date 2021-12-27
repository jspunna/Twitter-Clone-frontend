import React from "react";
import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
    return(
        <>
            {/*Search bar row*/}
            <div className="row d-flex align-items-center mb-2">
                <div className="col-11">
                    <div className="wd-search-bar position-relative">
                        <i className="fas fa-search ms-3 mt-2 position-absolute"></i>
                        <input className="form-control rounded-pill ps-5"
                               type="text"
                               placeholder="Search Twitter"/>
                    </div>
                </div>
                <div className="col-1">
                    <a href="../../../../../public/a5/twitter/explore/explore-settings.html"><i className="fas fa-cog fa-2x wd-tweet-blue"></i></a>
                </div>
            </div>

            {/*Nav tabs*/}
            <div className="row">
                <div className="col-12">
                    <ul className="nav nav-tabs mb-2">
                        <li className="nav-item">
                            <a className="nav-link active" href="for-you.html">For you</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="trending.html">Trending</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="news.html">News</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="sports.html">Sports</a>
                        </li>
                        <li className="nav-item d-none d-md-block">
                            <a className="nav-link" href="entertainment.html">Entertainment</a>
                        </li>
                    </ul>
                </div>
            </div>

            {/*Image*/}
            <div className="row mb-2">
                <div className="col-12">
                    <div className="wd-image-group position-relative">
                        <div className="wd-image-text position-absolute bottom-0 ms-2 fs-2 fw-bold text-white">
                            SpaceX's Starship</div>
                        <img className="img-fluid" src="/images/spacex_starship.jpg" alt="content image"/>
                    </div>
                </div>
            </div>

            {/*summary posts*/}
            <PostSummaryList/>
        </>

    );
}
export default ExploreComponent;
