import {useEffect, useState} from "react";
import ngrok from "ngrok";

type Ngrok = {
    url: URL | null; // null returned when haven't connected yet
}
export const useNgrok = (options: ngrok.Ngrok.Options): Ngrok => {
    const [url, setUrl] = useState<URL | null>(null);

    useEffect(() => {
        const getUrl = async () => {
            const url = await ngrok.connect(options);

            console.log(`setUrl ${url}`);
            setUrl(new URL(url))
        }

        getUrl()

        return () => {
            if (url) {
                ngrok.disconnect(url.href)
            }
        }
    }, [])

    return {url};
}