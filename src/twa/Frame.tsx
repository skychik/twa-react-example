import {useBackButton, useWebApp} from "@twa.js/sdk-react";
import {FC, ReactNode, useEffect} from "react";

type Props = {
    children?: ReactNode
}

/**
 * Instantiate all useful stuff for TWA, like BackButton, etc.
 */
export const TwaFrame: FC<Props> = ({children}) => {
    // const backButton = useBackButton();
    const webApp = useWebApp();

    // useEffect(() => {
    //     const listener = () => {throw new Error();}
    //     backButton.on('click', listener);
    //     backButton.show();
    //
    //     return () => {
    //         backButton.off('click', listener);
    //         backButton.hide();
    //     };
    // }, [backButton, webApp]);

    return <>{children}</>;
}