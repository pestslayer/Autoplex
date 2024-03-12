
import Dashboard from '../pages/Dashboard'
import Home from '../pages/Home'




interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string
    protected: boolean
}

const routes: RouteType[] = [
    {
        path: "",
        component: Home,
        name: "Home Screen",
        protected: false,
    },

    {
        path: "/dashboard",
        component: Dashboard,
        name: "Dashboard",
        protected: true,
    },

];

export default routes