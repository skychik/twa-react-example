import { useSDK, useWebApp } from "@twa.js/sdk-react";
import { PropsWithChildren, useEffect } from "react";
import {isInDevMode} from "../utils";

export function TwaIsReady({ children }: PropsWithChildren) {
    const webApp = useWebApp();
    const sdk = useSDK();

    useEffect(() => {
        webApp.ready();
    }, [webApp]);

    return <>{children}</>
}

/**
 * This component controls render of important part of application
 * which uses hooks, returning SDK components.
 */
export function TwaLoader({ children }: PropsWithChildren) {
    const { didInit, components, error } = useSDK();

    // There were no calls of SDK's init function. It means, we did not
    // even try to do it.
    if (!didInit) {
        return <div>SDK init function is not yet called.</div>;
    }

    // Error occurred during SDK init.
    if (error) {
        if (isInDevMode()) {
            throw error;
        }

        return <div>Something went wrong: {(error as any)?.message}</div>;
    }

    // If components is null, it means, SDK is not ready at the
    // moment and currently initializing. Usually, it takes like
    // several milliseconds or something like that, but we should
    // have this check.
    if (components === null) {
        return <div>Warming up SDK.</div>;
    }

    // Safely render application.
    return <TwaIsReady>{children}</TwaIsReady>;
}