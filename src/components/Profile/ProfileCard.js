import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Divider, ProfileCardContainer } from "./ProfileElem";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import LanguageIcon from "@material-ui/icons/Language";
import Switch from "@material-ui/core/Switch";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";

const useStyles = makeStyles({
    root: {
        width: "100%",
        maxWidth: "100%",
    },
});

const ProfileCard = () => {
    const classes = useStyles();

    const [checked, setChecked] = React.useState(["vaccination"]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return (
        <ProfileCardContainer>
            <div className={classes.root}>
                <List component="nav">
                    <ListItem button>
                        <ListItemIcon>
                            <LanguageIcon />
                        </ListItemIcon>
                        <ListItemText primary="Language" secondary="English" />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete">
                                <EditIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <LocationOnIcon />
                        </ListItemIcon>
                        <ListItemText
                            primary="Location"
                            secondary="Ara Damansara"
                        />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete">
                                <EditIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <LocalHospitalIcon />
                        </ListItemIcon>
                        <ListItemText
                            id="switch-list-label-vaccination"
                            primary="Vaccination Status"
                            secondary={
                                checked.indexOf("vaccination") !== -1
                                    ? "Vaccinated"
                                    : "Not vaccinated"
                            }
                        />
                        <ListItemSecondaryAction>
                            <Switch
                                edge="end"
                                onChange={handleToggle("vaccination")}
                                checked={checked.indexOf("vaccination") !== -1}
                                inputProps={{
                                    "aria-labelledby":
                                        "switch-list-label-vaccination",
                                }}
                            />
                        </ListItemSecondaryAction>
                    </ListItem>
                </List>
                <Divider />
                <List component="nav">
                    <ListItem button>
                        <ListItemText primary="About Luna" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="FAQs" />
                    </ListItem>
                </List>
            </div>
        </ProfileCardContainer>
    );
};

export default ProfileCard;
