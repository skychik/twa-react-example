import { useThemeParams } from "@twa.js/sdk-react";
import { FC } from "react";
import {ThemeInfoCard} from "./ThemeCard";

export const ThemeInfo: FC = () => {
    const theme = useThemeParams();

    return <>
        <ThemeInfoCard name="backgroundColor" color={theme.backgroundColor} />
    </>
}