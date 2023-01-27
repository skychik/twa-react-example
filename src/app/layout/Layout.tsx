import {PropsWithChildren} from "react";
import {Footer} from "./Footer";

export const Layout = ({children}: PropsWithChildren) => {
    return <>
        {children}
        <Footer/>
    </>
}