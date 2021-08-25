import React from "react";
import * as Fa from "react-icons/fa";
import * as Ai from "react-icons/ai";
import * as Ri from "react-icons/ri";
import * as Md from "react-icons/md";

export const SidebarData = [
    {
        title: "Home",
        path: "/",
        icon: <Ai.AiFillHome />,
        iconClosed: <Ri.RiArrowDownSFill />,
        iconOpened: <Ri.RiArrowUpSFill />,
    },
    {
        title: "Luna Cari Job",
        path: "/job",
        icon: <Fa.FaSearch />,
        iconClosed: <Ri.RiArrowDownSLine />,
        iconOpened: <Ri.RiArrowUpSLine />,
    },
    {
        title: "Luna AI Bot",
        path: "/bot",
        icon: <Md.MdExplore />,
    },
    {
        title: "Luna Covid-19 Guide",
        path: "/guide",
        icon: <Md.MdEventAvailable />,

        iconClosed: <Ri.RiArrowDownSLine />,
        iconOpened: <Ri.RiArrowUpSLine />,
    },
    {
        title: "Profile",
        path: "/profile",
        icon: <Fa.FaUserCircle />,
    },
];
