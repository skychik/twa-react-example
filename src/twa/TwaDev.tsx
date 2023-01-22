import {PropsWithChildren} from "react";
import {useLocalTunnel} from "../hooks/useLocalTunnel";

export const TwaDev = ({children}: PropsWithChildren) => {
    useLocalTunnel()

    return <>{children}</>
}