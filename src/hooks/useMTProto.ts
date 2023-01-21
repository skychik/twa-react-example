import {useEffect, useState} from "react";
import MTProto, {MTProtoOptions} from "@mtproto/core/envs/browser";

export const useMTProto = (options: MTProtoOptions) => {
    const [url, setUrl] = useState<URL | null>(null);

    useEffect(() => {
        const getUrl = async () => {
            const mtproto = new MTProto(options)

            // https://mtproto-core.js.org/docs/call-the-telegram-methods
            mtproto.call('messages.sendMessage', {
                clear_draft: true,
                peer: {
                    _: 'inputPeerSelf',
                },
                message: '/setmenubutton',
                random_id: Math.ceil(Math.random() * 0xffffff) + Math.ceil(Math.random() * 0xffffff),
            })
        }

        getUrl()

        return () => {
        }
    }, [])

    return {url};
}