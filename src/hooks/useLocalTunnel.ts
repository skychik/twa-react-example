import {useEffect, useState} from "react";
import localtunnel from "localtunnel";

export const useLocalTunnel = () => {
    const [url, setUrl] = useState<URL | null>(null);

    useEffect(() => {
        let tunnel: localtunnel.Tunnel | null = null;
        const getUrl = async () => {
            tunnel = await localtunnel({
                port: parseInt(import.meta.env.VITE_DEV_PORT),
                subdomain: import.meta.env.VITE_DEV_SUBDOMAIN
            });

            console.log(tunnel.url)

            setUrl(new URL(tunnel.url));
        }

        getUrl()

        return () => {
            tunnel?.close()
        }
    }, [])

    return {url};
}