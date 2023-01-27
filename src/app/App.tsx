import {useState} from 'react'
import './App.css'
import {ThemeInfo} from './ThemeInfo';
import {ButtonLink} from "../twa/twa-router/components/ButtonLink";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <h1>Telegram Web App Example</h1>
            <div className="card">
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

export default App
