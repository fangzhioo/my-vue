import { RouteConfig } from "vue-router";

const UserLayout = () => import("@/layout/UserLayout");
const BasicLayout = () => import("../src/layout/BasicLayout");
const BlankLayout = () => import("../src/layout/BlankLayout");
const LoginForm = () => import("../src/components/LoginForm");
const NotFound = () => import("../src/components/NotFound");

const Analysis = () => import("../src/pages/dashboard/Analysis");

const routerConfig: RouteConfig[] = [
    {
        path: "/user",
        component: UserLayout,
        children: [
            {
                path: "/user/login",
                component: LoginForm
            }
        ]
    },

    {
        path: "/form",
        component: BasicLayout,
        children: [
            {
                path: "/form/basic-form",
                component: NotFound
            },
            {
                path: "/form/step-form",
                component: NotFound
            },
            {
                path: "/form/advanced-form",
                component: NotFound
            }
        ]
    },
    {
        path: "/list",
        component: BasicLayout,
        children: [
            {
                path: "/list/search",
                component: BlankLayout,
                children: [
                    {
                        path: "/list/search/articles",
                        component: NotFound
                    },
                    {
                        path: "/list/search/projects",
                        component: NotFound
                    },
                    {
                        path: "/list/search/applications",
                        component: NotFound
                    }
                ]
            },
            {
                path: "/list/table-list",
                component: NotFound
            },
            {
                path: "/list/basic-list",
                component: NotFound
            },
            {
                path: "/list/card-list",
                component: NotFound
            }
        ]
    },
    {
        path: "/profile",
        component: BasicLayout,
        children: [
            {
                path: "/profile/basic",
                component: NotFound
            },
            {
                path: "/profile/advanced",
                component: NotFound
            }
        ]
    },
    {
        path: "/result",
        component: BasicLayout,
        children: [
            {
                path: "/result/success",
                component: NotFound
            },
            {
                path: "/result/fail",
                component: NotFound
            }
        ]
    },
    {
        path: "/exception",
        component: BasicLayout,
        children: [
            {
                path: "/exception/403",
                component: NotFound
            },
            {
                path: "/exception/404",
                component: NotFound
            },
            {
                path: "/exception/500",
                component: NotFound
            }
        ]
    },
    {
        path: "/account",
        component: BasicLayout,
        children: [
            {
                path: "/account/center",
                component: NotFound
            },
            {
                path: "/account/settings",
                component: NotFound
            }
        ]
    },
    {
        path: "/",
        component: BasicLayout,
        redirect: "/dashboard/analysis",
        children: [
            {
                path: "/dashboard/analysis",
                component: Analysis
            },
            {
                path: "/dashboard/monitor",
                component: NotFound
            },
            {
                path: "/dashboard/workplace",
                component: NotFound
            }
        ]
    },
    {
        path: "*",
        component: NotFound
    }
];

export default routerConfig;
