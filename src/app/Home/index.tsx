import {ThemeInfo} from "../ThemeInfo";
import {ButtonLink} from "../../twa/twa-router/components/ButtonLink";
import {FC, useState} from "react";

export const Home: FC = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <h1>Telegram Web App Example</h1>
            <div className="p-1">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <ThemeInfo />
            </div>
            <ButtonLink isExternal={true} className="read-the-docs" to="https://telegram-web-apps.github.io/twa">
                Read the docs
            </ButtonLink>
        </div>
    )
}