import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ProfileCard from "./ProfileCard";
import { ProfileContainer, Divider } from "./ProfileElem";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
    root: {
        width: "100%",
        maxWidth: "100%",
    },
    avatar: {
        margin: 10,
    },
    bigAvatar: {
        margin: 10,
        width: 80,
        height: 80,
    },
});

const ProfilePage = () => {
    const classes = useStyles();
    return (
        <ProfileContainer>
            <Grid container justify="center" alignItems="center">
                <Avatar
                    alt="Harry Styles"
                    src="https://image.flaticon.com/icons/png/512/1864/1864593.png"
                    className={classes.bigAvatar}
                />
            </Grid>
            <h2>Harry Styles</h2>
            <Divider />
            <div className="text-center">
                <h4>User Information</h4>
            </div>
            <ProfileCard styles={classes} />
        </ProfileContainer>
    );
};
export default ProfilePage;
