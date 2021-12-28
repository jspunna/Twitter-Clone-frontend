const WHO_API = () => {
    if (process.env.NODE_ENV === "development") {
        return 'http://localhost:4000/who';
    } else {
        return 'https://jsp-twitter-clone.herokuapp.com/who';
    }
}

export const fetchAllWhoFollow = (dispatch) =>
    fetch(WHO_API())
        .then(response => response.json())
        .then(who => {
            dispatch({
                type: 'fetch-all-who-follow',
                who
            })
        }
        );