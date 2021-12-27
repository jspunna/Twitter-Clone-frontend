import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import ProfileDetails from "./ProfileDetails";
import {getCurrentProfile} from "../../services/profile-service";

const Profile = () => {
    const prof = useSelector((state) => state.profile);
    const dispatch = useDispatch();
    useEffect(() => getCurrentProfile(dispatch), []);
    return(
        <>
            {
                prof.map(pro => {
                    return (<ProfileDetails profile={pro} key={pro.handle}/>);
                })
            }
        </>
    );
}
export default Profile;