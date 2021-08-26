import { Tabs, Tab } from "tabler-react";
import { TabWrapper } from "../HomeElem";
import {
    NRP1,
    NRP2,
    NRP3,
    NRP4,
    BNRP1,
    BNRP2,
    BNRP3,
    BNRP4,
} from "../StatsConstant";
import "tabler-react/dist/Tabler.css";
import React from "react";
import { StatsCard, StatsIcon, StatsH2, StatsWrapper } from "./NRPElem";

const NRPStats = () => {
    return (
        <TabWrapper>
            <Tabs initialTab="Rakyat">
                <Tab title="Rakyat">
                    <Tabs initialTab="Phase 1">
                        <Tab title="Phase 1">
                            <StatsWrapper>
                                {NRP1.map((stats) => (
                                    <StatsCard>
                                        <StatsIcon src={stats.icon} />
                                        <StatsH2>{stats.text}</StatsH2>
                                    </StatsCard>
                                ))}
                            </StatsWrapper>
                        </Tab>
                        <Tab title="Phase 2">
                            <StatsWrapper>
                                {NRP2.map((stats) => (
                                    <StatsCard>
                                        <StatsIcon src={stats.icon} />
                                        <StatsH2>{stats.text}</StatsH2>
                                    </StatsCard>
                                ))}
                            </StatsWrapper>
                        </Tab>
                        <Tab title="Phase 3">
                            <StatsWrapper>
                                {NRP3.map((stats) => (
                                    <StatsCard>
                                        <StatsIcon src={stats.icon} />
                                        <StatsH2>{stats.text}</StatsH2>
                                    </StatsCard>
                                ))}
                            </StatsWrapper>
                        </Tab>
                        <Tab title="Phase 4">
                            <StatsWrapper>
                                {NRP4.map((stats) => (
                                    <StatsCard>
                                        <StatsIcon src={stats.icon} />
                                        <StatsH2>{stats.text}</StatsH2>
                                    </StatsCard>
                                ))}
                            </StatsWrapper>
                        </Tab>
                    </Tabs>
                </Tab>
                <Tab title="Business">
                    <Tabs initialTab="Phase 1">
                        <Tab title="Phase 1">
                            <StatsWrapper>
                                {BNRP1.map((stats) => (
                                    <StatsCard>
                                        <StatsIcon src={stats.icon} />
                                        <StatsH2>{stats.text}</StatsH2>
                                    </StatsCard>
                                ))}
                            </StatsWrapper>
                        </Tab>
                        <Tab title="Phase 2">
                            <StatsWrapper>
                                {BNRP2.map((stats) => (
                                    <StatsCard>
                                        <StatsIcon src={stats.icon} />
                                        <StatsH2>{stats.text}</StatsH2>
                                    </StatsCard>
                                ))}
                            </StatsWrapper>
                        </Tab>
                        <Tab title="Phase 3">
                            <StatsWrapper>
                                {BNRP3.map((stats) => (
                                    <StatsCard>
                                        <StatsIcon src={stats.icon} />
                                        <StatsH2>{stats.text}</StatsH2>
                                    </StatsCard>
                                ))}
                            </StatsWrapper>
                        </Tab>
                        <Tab title="Phase 4">
                            <StatsWrapper>
                                {BNRP4.map((stats) => (
                                    <StatsCard>
                                        <StatsIcon src={stats.icon} />
                                        <StatsH2>{stats.text}</StatsH2>
                                    </StatsCard>
                                ))}
                            </StatsWrapper>
                        </Tab>
                    </Tabs>
                </Tab>
            </Tabs>
        </TabWrapper>
    );
};

export default NRPStats;
