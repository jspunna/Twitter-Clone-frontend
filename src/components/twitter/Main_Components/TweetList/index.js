import React, {useEffect} from "react";
import TweetListItem from "./TweetListItem";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllTweets} from "../../services/tweeter-service";

const TweetList = () => {
    const tweets = useSelector((state) => state.tweets);
    const dispatch = useDispatch();
    useEffect(() => fetchAllTweets(dispatch), []);

    return(
        <ul className="list-group">
            {
                tweets.map(tweet => {
                    return(<TweetListItem tweet={tweet} key={tweet._id}/>);
                })
            }
        </ul>
    );
}
export default TweetList;