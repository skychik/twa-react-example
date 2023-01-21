import { FC } from "react";
import { RGB } from '@twa.js/utils';

type Props = {
    name: string;
    color: RGB;
}
export const ThemeInfoCard: FC<Props> = ({color, name}) => {
    return <>
        <div>{name}</div>
        <div style={{color}}>{color}</div>
    </>
}