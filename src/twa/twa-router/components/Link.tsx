import {FC, ReactNode} from "react";
import {useSDK, useWebApp} from "@twa.js/sdk-react";
import {assertNever} from "../../../utils";

export type LinkProps = {
    to: string;
    children: ReactNode;
    className: string;
    type?: 'external' | 'in-app' | 'basic';
}
export const Link: FC<LinkProps> = (props) => {
    const {to, children, type = 'basic', className} = props;

    const webApp = useWebApp();

    switch (type) {
        case 'basic':
            return <a className={className} href={to}>{children}</a>
        case 'external':
            return <a className={className} onClick={() => webApp.openLink(to)}>{children}</a>
        case 'in-app':
            return <a className={className} onClick={() => webApp.openTelegramLink(to)}>{children}</a>
        default:
            assertNever(type);

            return <>{children}</>
    }
}

