import { FC, ReactNode } from "react";
import { InitOptions } from '@twa.js/sdk';
import { SDKProvider } from '@twa.js/sdk-react';
import { TwaLoader } from "./Loader";
import { TwaFrame } from "./Frame";
import {isInDevMode} from "../utils";

function getInitOptions(isDev: boolean = false): InitOptions {
    if (isDev) {
        require('dotenv').config()

        return {
            debug: true,
        };
    }

    return {}
}

type Props = {
    children?: ReactNode
}
export const TwaRootInitializer: FC<Props> = ({ children }) => {
    const isDev: boolean = isInDevMode();

    return (
        <SDKProvider initOptions={getInitOptions(isDev)}>
            {!isDev ?
                <TwaLoader>
                    <TwaFrame>
                        {children}
                    </TwaFrame>
                </TwaLoader>
                : <>{children}</>
            }
        </SDKProvider>
    );
};
