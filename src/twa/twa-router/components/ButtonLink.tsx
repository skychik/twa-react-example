import {FC, ReactNode} from "react";
import {useWebApp} from "@twa.js/sdk-react";

export type ButtonLinkProps = {
    to: string;
    children: ReactNode;
    className: string;
    isExternal: boolean;
}
export const ButtonLink: FC<ButtonLinkProps> = (props) => {
    const {to, children, isExternal = false, className} = props;

    const webApp = useWebApp();

    if (isExternal) {
        return <button className={className} onClick={() => webApp.openLink(to)}>{children}</button>
    }

    const isInApp = to.startsWith('t.me');
    if (isInApp) {
        return <button className={className} onClick={() => webApp.openTelegramLink(to)}>{children}</button>
    } else {
        return <button className={className} onClick={(e) => {
            e.preventDefault()
            window.location.href = to
        }}>{children}</button>
    }
}

