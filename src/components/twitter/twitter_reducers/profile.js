import profileJson from "./data/profile.json";

const profile = (state = profileJson, action) => {
    switch (action.type) {
        case 'update-profile':
            return (
                state.map(prof => {
                    prof.firstName = action.updatedProfile.firstName;
                    prof.lastName = action.updatedProfile.lastName;
                    prof.profilePicture = action.updatedProfile.profilePicture;
                    prof.bannerPicture = action.updatedProfile.bannerPicture;
                    prof.bio = action.updatedProfile.bio;
                    prof.location = action.updatedProfile.location;
                    prof.website = action.updatedProfile.website;
                    prof.dateOfBirth = action.updatedProfile.dateOfBirth;
                    return prof;
                })
            );
            break;
        case 'fetch-current-profile':
            return(
                action.profile
            );
        default:
            return state;
    }
};
export default profile;