import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {updateCurrentProfile} from "../../services/profile-service";

const EditProfileItem = ({
                            profile = {
                                "firstName": "Elon",
                                "lastName": "Musk",
                                "handle": "elonmusk",
                                "profilePicture": "/images/elon_twitter_image.jpg",
                                "bannerPicture": "/images/mars_to_earth.jpg",
                                "bio": "SpaceX, Tesla, Boring Company,Neuralink, OpenAI",
                                "website": "www.tesla.com",
                                "location": "Earth and Mars",
                                "dateOfBirth": "6/28/1971",
                                "dateJoined": "6/2009",
                                "followingCount": "105",
                                "followersCount": "62.1M"
                            }
}) => {
    let [firstName, setFirstName] = useState(profile.firstName);
    let [lastName, setLastName] = useState(profile.lastName);
    let [bio, setBio] = useState(profile.bio);
    let [location, setLocation] = useState(profile.location);
    let [website, setWebsite] = useState(profile.website);
    let [dateOfBirth, setDateOfBirth] = useState(profile.dateOfBirth);
    let [profilePicture] = useState(profile.profilePicture);
    let [bannerPicture] = useState(profile.bannerPicture);
    let [_id] = useState(profile._id);

    const dispatch = useDispatch();
    const saveClickHandler = () => {
        saveProfileChanges();
        goBackToProfile();
    }
    const goBackToProfile = () => {
        const action = {
            type: 'show-profile',
        }
        dispatch(action);
    }
    const saveProfileChanges = () => {
        const updatedProfile = {
            firstName: firstName,
            lastName: lastName,
            profilePicture: profilePicture,
            bannerPicture: bannerPicture,
            bio: bio,
            website: website,
            location: location,
            dateOfBirth: dateOfBirth,
            _id: _id,
        }
        updateCurrentProfile(dispatch, updatedProfile);
    }

    return(
        <>
            <div className="wd-dm-gray row d-flex align-items-center">
                <div className="col-10">
                    <div className="text-white">
                        <i className="fas fa-times ms-3" onClick={goBackToProfile}></i>
                        <span className="fw-bold fs-5 ms-4">Edit Profile</span>
                    </div>
                </div>
                <div className="col-2">
                    <button className="btn btn-outline-dark rounded-pill fa-pull-right mt-2 mb-3 wd-save-button"
                    onClick={saveClickHandler}>Save</button>
                </div>
            </div>
            <div className="wd-dm-gray row">
                <div>
                    <div className="position-relative">
                        <img src={bannerPicture} alt="banner image" className="w-100 wd-profile-banner"/>
                        <div className="wd-profile-banner-overlay"></div>
                        <i className="fas fa-camera wd-edit-icon-banner-camera"></i>
                        <i className="fas fa-times wd-edit-icon-banner-exit"></i>
                        <img className="wd-profile-image position-absolute wd-profile-pic-position" src={profilePicture} alt="profile image" />
                        <div className="wd-profile-pic-overlay"></div>
                        <i className="fas fa-camera wd-edit-icon-prof-pic-camera"></i>
                    </div>
                </div>
            </div>
            <div className="wd-dm-gray row mt-5">
                <div className="border border border-secondary mt-4 mb-3 pb-2 wd-label-input-box ms-4">
                    <label className="wd-label-small" htmlFor="firstName">First Name</label><br/>
                    <input type="text" id="firstName" className="w-100 wd-input-edit-profile text-white"
                           onChange={(event) => setFirstName(event.target.value)}
                           value={firstName}/>
                </div>
                <div className="border border border-secondary mb-3 pb-2 wd-label-input-box ms-4">
                    <label className="wd-label-small" htmlFor="lastName">Last Name</label><br/>
                    <input type="text" id="lastName" className="w-100 wd-input-edit-profile text-white"
                           onChange={(event) => setLastName(event.target.value)}
                           value={lastName}/>
                </div>
                <div className="border border border-secondary mb-3 pb-2 wd-label-input-box ms-4">
                    <label className="wd-label-small" htmlFor="bio">Bio</label><br/>
                    <textarea type="text" id="bio" className="w-100 wd-input-edit-profile text-white"
                              onChange={(event) => setBio(event.target.value)}
                              value={bio}/>
                </div>
                <div className="border border border-secondary mb-3 pb-2 wd-label-input-box ms-4">
                    <label className="wd-label-small" htmlFor="location">Location</label><br/>
                    <input type="text" id="location" className="w-100 wd-input-edit-profile text-white"
                           onChange={(event) => setLocation(event.target.value)}
                           value={location}/>
                </div>
                <div className="border border border-secondary mb-3 pb-2 wd-label-input-box ms-4">
                    <label className="wd-label-small" htmlFor="website">Website</label><br/>
                    <input type="url" id="website" className="w-100 wd-input-edit-profile text-white"
                           onChange={(event) => setWebsite(event.target.value)}
                           value={website}/>
                </div>
                <div className="ms-3 mb-3">
                    <label className="wd-label-small" htmlFor="dob">Birth Date</label><br/>
                    <input type="date" id="dob"
                           onChange={(event) => setDateOfBirth(event.target.value)}
                           value={dateOfBirth}/>
                </div>
            </div>
        </>
    );
}
export default EditProfileItem;