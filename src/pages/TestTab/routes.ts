import FileIcon from "@/components/atoms/icons/FileIcon";
import Attendance from "@/components/organisms/Attendance";
import { Route } from "@/typings/routes";
import React from "react";

export const BASE_URL: string = "/attendance";

const routes: Route[] = [
  {
    path: BASE_URL,
    element: React.createElement(Attendance),
    // roles
    icon: React.createElement(FileIcon),
    key: "attendance",
    showOnSideNav: true
  },
];

export default routes;
