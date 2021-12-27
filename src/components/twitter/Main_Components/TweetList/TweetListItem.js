import React from "react";
import {useDispatch} from "react-redux";
import {deleteTweet, likeTweet} from "../../services/tweeter-service";

const TweetListItem = ({
                      tweet= {
                          "id": 123,
                          "topic": "Space",
                          "avatar_image": "/images/elon_twitter_image.jpg",
                          "userName": "Elon Musk",
                          "verified": true,
                          "handle": "elonmusk",
                          "time": "23h",
                          "tweet": "Amazing show about <a class=\"wd-text-no-underline\" href=\"#\">@inspiration4x</a> mission!",
                          "tweet_image": "/images/netflix_inspiration4.jpg",
                          "tweet_link_title": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
                          "tweet_link_description": "From training to launch to landing, this all-access docuseries rides along with the inspiration4 crew on the first all-civilian orbital space...",
                          "tweet_link_url": "netflix.com",
                          "stats": {
                              "comments": 235,
                              "retweets": 477,
                              "likes": 989
                          },
                          "liked": false
                      }
}) => {

    const dispatch = useDispatch();
    const deleteTweetClickHandler = () => {
        deleteTweet(dispatch, tweet);
    }

    const likeClickHandler = () => {
         likeTweet(dispatch, tweet);
    }

    const userImage = <div className="col-1 mt-3">
                            <img src={tweet.avatar_image}
                             alt="avatar image"
                                 className="wd-post-user-image"/>
                        </div>;

    const userDetailsAndTweetDescription = <div className="text-white mb-3">
                                                <span className="fw-bold">{tweet.userName}</span> <i className={tweet.verified === true ? 'fas fa-check-circle' : ''}></i>
                                                <span className="wd-dm-gray"> @{tweet.handle} &middot; {tweet.time}</span>
                                                <i onClick={deleteTweetClickHandler} className="fas fa-times fa-pull-right"></i>
                                                <div dangerouslySetInnerHTML={ {__html: tweet.tweet} } />
                                            </div>;

    const tweetFooter = <div className="wd-post-footer mt-3 mb-3 me-5 pe-4 small">
                            <a href="/#">
                                <i className="far fa-comment wd-dm-gray"></i>
                                <span className="ps-2 wd-dm-gray">{tweet.stats.comments}</span>
                            </a>
                            <a href="/#">
                                <i className="fas fa-retweet wd-dm-gray"></i>
                                <span className="ps-2 wd-dm-gray">{tweet.stats.retweets}</span>
                            </a>
                            <div onClick={likeClickHandler}>
                                {
                                    tweet.liked && <i className="fas fa-heart" style={{color: "red"}}></i>
                                }
                                {
                                    !tweet.liked && <i className="far fa-heart wd-dm-gray"></i>
                                }
                                <span className="ps-2 wd-dm-gray">{tweet.stats.likes}</span>
                            </div>
                            <a href="/#">
                                <i className="fa fa-upload wd-dm-gray"></i>
                            </a>
                        </div>;

    if (tweet.tweet_link_title === "" && tweet.tweet_link_description === "" && tweet.tweet_link_url === "") {
        return(
            <>
                <div className="row wd-new-post-border">
                    {/*user avatar/image icon*/}
                    {userImage}

                    <div className="col-11 ps-4 mt-3">
                        {/*author details and tweet description*/}
                        {userDetailsAndTweetDescription}

                        {/*link image and content*/}
                        <div className="">
                            <img src={tweet.tweet_image}
                                 alt="link image"
                                 className="img-fluid wd-post-image2"/>
                        </div>

                        {/*post footer*/}
                        {tweetFooter}
                    </div>
                </div>
            </>
        );
    } else {
        return(
            <>
                <div className="row wd-new-post-border">
                    {/*user avatar/image icon*/}
                    {userImage}

                    <div className="col-11 ps-4 mt-3">
                        {/*author details and tweet description*/}
                        {userDetailsAndTweetDescription}

                        {/*link image and content*/}
                        <div className="wd-post-image1-box">
                            <img src={tweet.tweet_image}
                                 alt="link image"
                                 className="img-fluid wd-post-image1"/>
                        </div>
                        <div className="wd-post-image1-text text-white">
                            {tweet.tweet_link_title}<br/>
                            <span className="wd-dm-gray">{tweet.tweet_link_description}<br/>
                                    <i className="fas fa-link"></i> {tweet.tweet_link_url}
                                </span>
                        </div>

                        {/*post footer*/}
                        {tweetFooter}
                    </div>
                </div>
            </>
        );
    }
}
export default TweetListItem;