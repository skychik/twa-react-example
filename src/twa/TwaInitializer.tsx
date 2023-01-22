import React, {FC, ReactNode} from "react";
import {InitOptions} from '@twa.js/sdk';
import {SDKProvider} from '@twa.js/sdk-react';
import {isInDevMode} from "../utils";
import {TwaDev} from "./TwaDev";
import {TwaProd} from "./TwaProd";

function getInitOptions(isDev: boolean): InitOptions {
    if (isDev) {
        return {
            debug: true,
        };
    }

    return {}
}

type Props = {
    children?: ReactNode
}
export const TwaInitializer: FC<Props> = ({children}) => {
    const isDev: boolean = isInDevMode();

    return (
        <SDKProvider initOptions={getInitOptions(isDev)}>
            {isDev ?
                <TwaDev>{children}</TwaDev>
                : <TwaProd>{children}</TwaProd>
            }
        </SDKProvider>
    );
};
