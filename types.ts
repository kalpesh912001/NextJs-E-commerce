import { ReactNode } from "react";

export interface TopbarManuLinks {
    component?: string | ReactNode;
    path?: string;
    icon?: any;
    activeIcon?: any;
    key?: string;
}