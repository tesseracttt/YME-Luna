import React from "react";

const styles = {
    jobcont: {
        display: "flex",
        flexDirection: "row",
        width: "60rem",
        height: "6.5rem",
        boxShadow: "0px 4px 6px 4px rgba(91, 164, 164, 0.2)",
        borderRadius: "5px",
        marginBottom: "30px",
        borderLeft: "10px solid #4c4c6d",
        alignItems: "center",
    },
    logo: {
        display: "flex",
        paddingLeft: "20px",
        alignItems: "center",
    },
    part1: {
        display: "flex",
        flexDirection: "column",
        width: "40rem",
        paddingLeft: "2rem",
    },
    company: {
        fontWeight: 800,
        color: "#4c4c6d",
        fontSize: "18px",
    },
    position: {
        fontWeight: 650,
        fontSize: "1.1rem",
    },
    details: {
        color: "dark-greyish",
    },
    part2: {
        fontWeight: 700,
        fontSize: "20px",
    },
};

const JobCard = ({
    id,
    company,
    jobtitle,
    location,
    posted,
    type,
    salary,
    img,
}) => {
    return (
        <div className="jobcontainer" style={styles.jobcont}>
            <div className="logo" style={styles.logo}>
                <img style={{ borderRadius: "50%" }} src={img} alt="" />
            </div>
            <div className="part1" style={styles.part1}>
                <div className="company" style={styles.company}>
                    <span className="cname">{company}</span>
                </div>

                <div className="position" style={styles.position}>
                    {jobtitle}
                </div>

                <div className="details" style={styles.details}>
                    <span>{posted}</span>
                    <span>&nbsp;•&nbsp;</span>
                    <span>{location}</span>
                    <span>&nbsp;•&nbsp;</span>
                    <span>{type}</span>
                </div>
            </div>

            <div className="part2" style={styles.part2}>
                {salary}
            </div>
        </div>
    );
};

export default JobCard;
