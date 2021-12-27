import React from "react";
import {useDispatch} from "react-redux";

const ProfileDetails = ({
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
    const dispatch = useDispatch();
    const editProfileClickHandler = () => {
        const action = {
            type: 'show-edit',
        }
        dispatch(action);
    }

    // referenced https://stackoverflow.com/questions/47575119/how-to-get-month-name-from-an-html-date-input-value
    const formatDateOfBirth = (date) => {
        const dateSplit = date.split("-");
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return months[dateSplit[1]-1] + " " + dateSplit[2] + ", " + dateSplit[0];
    }

    return(
        <>
            <div className="wd-dm-gray row">
                <div className="text-white pb-2">
                    <i className="fas fa-arrow-left ms-3"></i>
                    <span className="fw-bold fs-5 ms-4">{profile.firstName} {profile.lastName}</span>
                </div>
            </div>
            <div className="row">
                <div className="position-relative">
                    <img src={profile.bannerPicture} alt="banner image" className="w-100 wd-profile-banner"/>
                    <img className="wd-profile-image wd-profile-pic-position" src={profile.profilePicture} alt="profile image" />
                    <button className="btn btn-outline-light rounded-pill fa-pull-right text-white mt-2 mb-3 border border-secondary"
                            onClick={editProfileClickHandler}>Edit Profile</button>
                </div>
            </div>
            <div className="wd-dm-gray row ms-1">
                <div className="fw-bold fs-5 text-white">{profile.firstName} {profile.lastName}</div>
                <div>@{profile.handle}</div>
                <div className="text-white mt-2">{profile.bio}</div>
                <a className="wd-text-no-underline" href={`${profile.website}`}>{profile.website}</a><br/>
                <div className="mt-2">
                    <span><i className="fas fa-map-marker-alt"></i> {profile.location}</span>
                    <i className="far fa-calendar-alt ms-3"></i> Joined {profile.dateJoined}
                    <i className="fas fa-birthday-cake ms-3"></i> Born {formatDateOfBirth(profile.dateOfBirth)}
                </div>
                <div className="mt-2 mb-3">
                    <span className="text-white">{profile.followingCount}</span> Following
                    <span className="text-white ms-3">{profile.followersCount}</span> Followers
                </div>
            </div>
        </>
    );
}
export default ProfileDetails;