import React from "react";

const styles = {
    position: "absolute",
    top: "70%",
    left: "50%",
    transform: "translate(-50%, -70%)",
    alignItems: "center",
    width: "500px",
};

const JobSearchBar = () => {
    return (
        <form action="/" method="get" style={styles}>
            <div class="input-group mb-3">
                <input
                    type="text"
                    class="form-control"
                    placeholder="Search for jobs"
                    aria-label="Search for jobs"
                    aria-describedby="basic-addon2"
                />
                <div class="input-group-append">
                    <button
                        class="btn btn-primary"
                        type="Submit"
                        style={{ background: "#ffe194", color: "black" }}
                    >
                        Search
                    </button>
                </div>
            </div>
        </form>
    );
};

export default JobSearchBar;
