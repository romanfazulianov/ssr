import Root from "./Root";
import Admin from "./Admin";

export default [
    {
        path: "/",
        component: Root,
        exact: true,
        key: 'root'
    },
    {
        path: "/admin",
        component: Admin,
        exact: true,
        key: 'admin'
    }
];