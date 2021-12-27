import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {postNewTweet} from "../../services/tweeter-service";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState("");
    const dispatch = useDispatch();
    const tweetClickHandler = () => {
        postNewTweet(dispatch, {
            tweet: whatsHappening
        });
    }

    return (
        <>
            <div className="row">

                {/*avatar image*/}
                <div className="col-1 mt-2">
                    <img src={'/images/elon_twitter_image.jpg'}
                         alt="avatar image"
                         className="wd-post-user-image"/>
                </div>

                <div className="col-11 ps-4 mt-2">
                    {/*Text area*/}
                    <textarea className="w-100 wd-background-none border-0 border-bottom border border-dark text-white"
                              placeholder="What's Happening?" value={whatsHappening}
                              onChange={(event) => setWhatsHappening(event.target.value)}>
                    </textarea>
                    <br/>
                    <a href="/#"><i className="far fa-image"></i></a>
                    <a href="/#"><i className="far fa-chart-bar ps-4"></i></a>
                    <a href="/#"><i className="far fa-smile ps-4"></i></a>
                    <a href="/#"><i className="far fa-calendar ps-4"></i></a>
                    <button className="btn btn-primary rounded-pill fa-pull-right mb-3"
                            onClick={tweetClickHandler}>Tweet</button>
                </div>

            </div>
        </>
    )
}
export default WhatsHappening;