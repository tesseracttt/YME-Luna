import React from "react";
import GuideDesc from "./GuideDesc";
import { makeStyles } from "@material-ui/core/styles";
import {
    Grid,
    Card,
    CardContent,
    Typography,
    CardMedia,
    CardActionArea,
    CardActions,
    Button,
    Popover,
} from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
    media: {
        height: 140,
    },
}));

const GuideCard = ({ guides }) => {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    const id = open ? "simple-popover" : undefined;

    return (
        <div className={classes.root}>
            <Grid
                container
                spacing={5}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
            >
                {guides.map((guide) => (
                    <Grid item xs={12} sm={6} md={3}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={guide.source}
                                    title={guide.name}
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="h2"
                                    >
                                        {guide.name}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        component="p"
                                    >
                                        {guide.desc}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button
                                    size="small"
                                    aria-describedby={id}
                                    color="primary"
                                    onClick={handleClick}
                                >
                                    Learn More
                                </Button>
                                <Popover
                                    id={id}
                                    open={open}
                                    anchorEl={anchorEl}
                                    onClose={handleClose}
                                    anchorOrigin={{
                                        vertical: "center",
                                        horizontal: "center",
                                    }}
                                    transformOrigin={{
                                        vertical: "center",
                                        horizontal: "center",
                                    }}
                                >
                                    <GuideDesc title={guide.name} />
                                </Popover>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default GuideCard;
