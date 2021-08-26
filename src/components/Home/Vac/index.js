import React from "react";
import { Card, Grid, Text, Icon, Header } from "tabler-react";
import { ChartWrapper } from "../HomeElem";
import { RakyatStats } from "../StatsConstant";
import { Doughnut, Pie } from "react-chartjs-2";
import "tabler-react/dist/Tabler.css";

const data = {
    labels: ["Vaccinated", "Unvaccinated"],
    datasets: [
        {
            label: "Vaccination Status",
            data: [63, 37],
            backgroundColor: ["#006A71", "#FF7E67"],
            hoverBackgroundColor: [
                "rgba(0, 106, 113, 0.9)",
                "rgba(255, 126, 103, 0.9)",
            ],
            borderColor: ["#006A71", "#FF7E67"],
            borderWidth: 1,
        },
    ],
};

const pieData = {
    labels: [
        "Active: mild",
        "Active: Critical",
        "Close: Death",
        "Close: Recovered",
    ],
    datasets: [
        {
            label: "Statistics",
            data: [1220568, 49830, 102734, 376330],
            backgroundColor: ["#FFB830", "#FF2442", "#FFEDDA", "#3DB2FF"],
            hoverBackgroundColor: ["#FFB830", "#FF2442", "#FFEDDA", "#3DB2FF"],
        },
    ],
};

const VacStats = () => {
    return (
        <Grid.Row cards deck>
            {RakyatStats.map((stats) => (
                <Grid.Col md={4}>
                    <Card>
                        <Card.Body className="p-3 text-center">
                            <Text
                                color={
                                    !stats.percentage
                                        ? "yellow"
                                        : stats.percentage > 0
                                        ? "red"
                                        : "green"
                                }
                                className="text-right"
                            >
                                {`${stats.percentage > 0 ? "+" : ""}${
                                    stats.percentage
                                }%`}
                                <Icon
                                    name={
                                        !stats.percentage
                                            ? "minus"
                                            : stats.percentage > 0
                                            ? "chevron-up"
                                            : "chevron-down"
                                    }
                                />
                            </Text>
                            <Header className="m-0">{stats.total}</Header>
                            <Text color="muted" className=" mb-4">
                                {stats.text}
                            </Text>
                        </Card.Body>
                    </Card>
                </Grid.Col>
            ))}
            <div
                style={{
                    marginLeft: "250px",
                    marginRight: "250px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Grid.Row>
                    <Grid.Col>
                        <Card>
                            <Card.Header>
                                <Card.Title>
                                    National Vaccination Status
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <ChartWrapper>
                                    <Doughnut data={data} />
                                </ChartWrapper>
                            </Card.Body>
                        </Card>
                    </Grid.Col>
                    <Grid.Col>
                        <Card>
                            <Card.Header>
                                <Card.Title>
                                    State Vaccination Status
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <ChartWrapper>
                                    <Doughnut data={data} />
                                </ChartWrapper>
                            </Card.Body>
                        </Card>
                    </Grid.Col>
                    <Grid.Col>
                        <Card>
                            <Card.Header>
                                <Card.Title>
                                    COVID-19 Positive Cases Statistics
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <ChartWrapper>
                                    <Pie data={pieData} />
                                </ChartWrapper>
                            </Card.Body>
                        </Card>
                    </Grid.Col>
                </Grid.Row>
            </div>
        </Grid.Row>
    );
};

export default VacStats;
