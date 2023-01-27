import { createRouter } from "@swan-io/chicane";

export const Router = createRouter({
    Home: "/",
    Users: "/users",
    User: "/users/:userId",
});
