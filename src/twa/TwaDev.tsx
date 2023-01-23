import React, {PropsWithChildren} from "react";
import {TwaFrame} from "./Frame";
import {TwaLoader} from "./Loader";

export const TwaDev = ({children}: PropsWithChildren) => {
    return <TwaLoader>
        <TwaFrame>
            {children}
        </TwaFrame>
    </TwaLoader>
}