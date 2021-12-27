const WHO_API = () => {
    if (process.env.NODE_ENV === "development") {
        return 'http://localhost:4000/rest/who';
    } else {
        return 'https://web-dev-node-5610.herokuapp.com/rest/who';
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