import React from "react";
import {
    JobContainer,
    JobTitle,
    JobWrapper,
    JobMedContainer,
    JobSubtitle1,
    JobSubtitle2,
    JobSubtitle3,
    JobImage,
} from "./JobElem";
import JobCard from "./JobCard";
import { job1, job2, job3, job4, job5 } from "./JobData";
import JobSearchBar from "./JobSearch";
import JobDropDown from "./JobDropdown";

const JobPage = () => {
    return (
        <>
            <JobContainer>
                <JobWrapper
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                    <JobTitle>Luna Cari Job</JobTitle>
                </JobWrapper>
                <JobMedContainer>
                    <JobImage
                        src={
                            "https://images.unsplash.com/photo-1518655048521-f130df041f66?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                        }
                    />
                    <JobSubtitle1>Find Job That Suits You</JobSubtitle1>
                    <JobSubtitle2>Help you go through COVID19</JobSubtitle2>
                    <JobSearchBar> </JobSearchBar>
                </JobMedContainer>
                <JobDropDown />
                <JobSubtitle3>
                    <b>Jobs Suggested for You</b>
                </JobSubtitle3>
                <JobWrapper>
                    <JobCard {...job1} />
                    <JobCard {...job2} />
                    <JobCard {...job3} />
                    <JobCard {...job4} />
                    <JobCard {...job5} />
                </JobWrapper>

                <JobSubtitle3>
                    <b>Jobs Near You</b>
                </JobSubtitle3>
                <JobWrapper>
                    <JobCard {...job4} />
                    <JobCard {...job3} />
                    <JobCard {...job5} />
                    <JobCard {...job2} />
                    <JobCard {...job1} />
                </JobWrapper>
            </JobContainer>
        </>
    );
};
export default JobPage;
