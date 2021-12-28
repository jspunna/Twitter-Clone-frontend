const PROFILE_API_A9 = () => {
    if (process.env.NODE_ENV === "development") {
        return 'http://localhost:4000/profile';
    } else {
        return 'https://jsp-twitter-clone.herokuapp.com/profile';
    }
}

export const getCurrentProfile = (dispatch) =>
    fetch(`${PROFILE_API_A9()}/get`)
        .then(response => response.json())
        .then(profile => {
            dispatch({
                type: 'fetch-current-profile',
                profile
            })
        });

export const updateCurrentProfile = (dispatch, updatedProfile) =>
    fetch(`${PROFILE_API_A9()}/${updatedProfile._id}`, {
        method: 'PUT',
        body: JSON.stringify(updatedProfile),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response =>
            dispatch({
                type: 'update-profile',
                updatedProfile
            }));