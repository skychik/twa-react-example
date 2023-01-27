import './App.css'
import {Router} from "../twa/twa-router/Router";
import {Home} from "./Home";
import {match} from "ts-pattern";
import {Layout} from "./layout/Layout";

function App() {
    const route = Router.useRoute(["Home", "Users", "User"]);

    return <Layout>
        {match(route)
            .with({name: "Home"}, () => <Home />)
            .with({name: "Users"}, () => <h1>Users</h1>)
            .with({name: "User"}, ({params}) => <h1>User {params.userId}</h1>) // params are strongly typed
            .otherwise(() => <h1>404</h1>)}
    </Layout>
}

export default App
