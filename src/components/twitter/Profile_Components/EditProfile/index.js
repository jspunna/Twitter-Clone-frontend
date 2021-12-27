import React from "react";
import {useSelector} from "react-redux";
import EditProfileItem from "./EditProfileItem";

const EditProfile = () => {
    const prof = useSelector((state) => state.profile);
    return(
        <>
            {
                prof.map(pro => {
                    return (<EditProfileItem profile={pro} key={pro.handle}/>);
                })
            }
        </>
    );
}
export default EditProfile;