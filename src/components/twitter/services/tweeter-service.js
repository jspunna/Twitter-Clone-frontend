const TWEET_API = () => {
    if (process.env.NODE_ENV === "development") {
        return 'http://localhost:4000/tweets';
    } else {
        return 'https://jsp-twitter-clone.herokuapp.com/tweets';
    }
}

export const fetchAllTweets = (dispatch) =>
    fetch(TWEET_API())
        .then(response => response.json())
        .then(tweets => {
                dispatch({
                    type: 'fetch-all-tweets',
                    tweets
                })
        }
        );

export const postNewTweet = (dispatch, newTweet) =>
    fetch(TWEET_API(), {
        method: 'POST',
        body: JSON.stringify(newTweet),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(tweet =>
            dispatch({
                type: 'create-tweet',
                tweet
            })
        );

export const deleteTweet = (dispatch, tweet) =>
    fetch(`${TWEET_API()}/${tweet._id}`, {
        method: 'DELETE'
    }).then(response => dispatch({
        type: 'delete-tweet',
        tweet
    }));

export const likeTweet = (dispatch, tweet) =>
    fetch(`${TWEET_API()}/${tweet._id}/like`, {
        method: 'PUT',
        body: JSON.stringify(tweet),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response =>
            dispatch({
                type: 'like-tweet',
                tweet
            }));
