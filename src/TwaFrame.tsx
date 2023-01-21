import { useBackButton, useWebApp } from "@twa.js/sdk-react";
import { FC, ReactNode, useEffect } from "react";

type Props = {
    children?: ReactNode
}
export const TwaFrame: FC<Props> = ({children}) => {
    const backButton = useBackButton();
    const webApp = useWebApp();

    // When App is attached to DOM, lets show back button and
    // add click event handler, which will close application.
    useEffect(() => {
        const listener = () => webApp.close();
        backButton.on('click', listener);
        backButton.show();

        return () => {
            backButton.off('click', listener);
            backButton.hide();
        };
        // We know, that backButton and webApp will never change,
        // but let's follow React rules.
    }, [backButton, webApp]);

    return <>{children}</>;
}