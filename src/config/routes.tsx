import React from 'react'
import Dashboard from '../pages/Dashboard'
import Home from '../pages/Home'
import Carousel from '../components/Carousel'

interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string
}

const routes: RouteType[] = [
    {
        path: "",
        component: Home,
        name: "Home Screen"
    },

    {
        path: "/dashboard",
        component: Dashboard,
        name: "Dashboard"
    },
];

export default routes